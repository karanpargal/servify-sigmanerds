import { useOutlet } from 'react-router-dom';

export default function ChatLayout() {
  const outlet = useOutlet();

  return (
    <main className="grid grid-cols-[auto_1fr]">
      <aside></aside>
      {outlet && <section>{outlet}</section>}
    </main>
  );
}
