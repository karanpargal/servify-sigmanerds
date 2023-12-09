import { useAccount, useBalance, useDisconnect } from 'wagmi';

export default function useWallet() {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address: account.address });

  return { ...account, balance, disconnect };
}
