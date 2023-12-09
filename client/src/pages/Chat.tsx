import {
  ChatUIProvider,
  ChatView,
  darkChatTheme,
  ENV,
  SignerType,
} from '@pushprotocol/uiweb';

export default function GroupChat({ chatId, signer }: ChatProps) {
  return (
    <ChatUIProvider theme={darkChatTheme} env={ENV.STAGING} signer={signer}>
      <ChatView chatId={chatId} limit={10} isConnected={true} />
    </ChatUIProvider>
  );
}

interface ChatProps {
  chatId: string;
  signer: SignerType;
}
