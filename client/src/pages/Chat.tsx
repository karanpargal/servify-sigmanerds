import { ChatView as _ChatView } from '@pushprotocol/uiweb';
import { Navigate, useParams } from 'react-router-dom';

export default function ChatView() {
  // get chatId from route params
  const { chatId } = useParams<{ chatId: string }>();

  if (!chatId) return <Navigate to="/chats" />;
  return <_ChatView chatId={chatId} limit={10} isConnected={true} />;
}
