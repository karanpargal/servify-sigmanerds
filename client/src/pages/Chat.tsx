import {
  ChatUIProvider,
  ENV,
  SignerType,
  ChatView as _ChatView,
  lightChatTheme,
} from '@pushprotocol/uiweb';
import { Navigate, useParams } from 'react-router-dom';

export default function ChatView() {
  // get chatId from route params
  const { chatId } = useParams<{ chatId: string }>();
  // const {} = useWallet();

  if (!chatId) return <Navigate to="/chats" />;
  return (
    <ChatUIProvider theme={lightChatTheme} env={ENV.STAGING}>
      <_ChatView chatId={chatId} limit={10} isConnected={true} />
    </ChatUIProvider>
  );
}

interface ChatProps {
  chatId: string;
  signer: SignerType;
}
