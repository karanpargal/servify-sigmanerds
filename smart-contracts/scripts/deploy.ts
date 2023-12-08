const hre = require("hardhat");

async function main() {
  const escrow = await hre.ethers.getContractFactory("Escrow");
  const escrowContract = await escrow.deploy(
    "0xC2e7D52caEecC220AF3f48785ebdF8b331a7B668"
  );

  await escrowContract.deployed();

  console.log("Escrow deployed to:", escrowContract.address);

  const sbt = await hre.ethers.getContractFactory("SBT_NFT");
  const sbtContract = await sbt.deploy();

  await sbtContract.deployed();

  console.log("SBT deployed to:", sbtContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
