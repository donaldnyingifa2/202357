import Image from 'next/image';

// app/my-dynamic-page/page.js
export const dynamic = 'force-dynamic';

export async function MyDynamicPage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonData = await data.json();

  return (
    <div>
      {/* Display dynamic data */}
      {jsonData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <MyDynamicPage />
  );
}
