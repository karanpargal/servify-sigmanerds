import { useAccount, useBalance, useDisconnect, useWalletClient } from 'wagmi';

export default function useWallet() {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const { data: walletClient } = useWalletClient();
  const { data: balance } = useBalance({ address: account.address });

  return {
    ...account,
    balance,
    disconnect,
    walletClient: walletClient ?? undefined,
  };
}
