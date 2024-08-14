 
 import Header from "@/pages/Header"
 import Books from "@/pages/Books"
 import CustomPagination from "@/components/CustomPagination";



export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <Books />
      <CustomPagination />
    </main>
  );
}
