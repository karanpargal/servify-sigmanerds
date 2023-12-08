// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Escrow {
    address public arbiter;

    enum State { Initialized, Funded, Completed, Refunded }
    
    struct Order {
        address buyer;
        address seller;
        State state;
        uint256 amount;
    }

    mapping(bytes32 => Order) public orders;

    event FundsDeposited(bytes32 orderId, address indexed depositor, uint256 amount);
    event TransactionCompleted(bytes32 orderId);
    event TransactionRefunded(bytes32 orderId);

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Only the arbiter can call this function");
        _;
    }

    modifier inState(bytes32 orderId, State _state) {
        require(orders[orderId].state == _state, "Invalid state");
        _;
    }

    modifier notInState(bytes32 orderId, State _state) {
        require(orders[orderId].state != _state, "Invalid state");
        _;
    }

    constructor(address _arbiter) {
        arbiter = _arbiter;
    }

    function createOrder(bytes32 orderId, address _seller) external {
        require(orders[orderId].state == State.Initialized, "Order already exists or invalid state");
        orders[orderId] = Order({
            buyer: msg.sender,
            seller: _seller,
            state: State.Initialized,
            amount: 0
        });
    }

    function depositFunds(bytes32 orderId) external payable notInState(orderId, State.Funded) {
        require(msg.value > 0, "Invalid deposit amount");
        orders[orderId].state = State.Funded;
        orders[orderId].amount = msg.value;
        emit FundsDeposited(orderId, msg.sender, msg.value);
    }

    function completeTransaction(bytes32 orderId) external inState(orderId, State.Funded) {
        orders[orderId].state = State.Completed;
        payable(orders[orderId].seller).transfer(orders[orderId].amount);
        emit TransactionCompleted(orderId);
    }

    function refundTransaction(bytes32 orderId) external onlyArbiter inState(orderId, State.Funded) {
        orders[orderId].state = State.Refunded;
        payable(orders[orderId].buyer).transfer(orders[orderId].amount);
        emit TransactionRefunded(orderId);
    }
}
