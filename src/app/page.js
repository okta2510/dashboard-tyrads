import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
  return (
    <main className="content p-[30px] h-92 bg-[#F7F5FD]" style={{height: 'auto'}}>
      <div className="w-full flex justify-between align-middle">
      top page
      </div>
    </main>
  );
}
