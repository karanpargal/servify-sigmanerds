import useWallet from '@/hooks/useWallet';
import { SignerType } from '@pushprotocol/restapi';
import { ENV, SupportChat } from '@pushprotocol/uiweb';

const SuppportChat = () => {
  const { walletClient } = useWallet();

  return (
    <>
      <SupportChat
        supportAddress="0xeC2265da865A947647CE6175a4a2646318f6DCEb" //support address, this belongs to you
        env={ENV.STAGING}
        signer={walletClient as SignerType}
        greetingMsg="Hi, how can we help you?"
        modalTitle="Support Chat"
      />
    </>
  );
};

export default SuppportChat;
