 "use client"
 
 import Header from "@/components/Header"
 import Books from '../components/Books';
 



export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <Books />
    </main>
  );
}
