
import Header from "@/pages/Header";
import CustomPagination from "@/components/CustomPagination";
import "./globals.css";


function Funbooks() {
    return (
        <main className="bg-gray-300 min-h-screen">
            <Header />
      <div className="p-4">
        <h1>Educational Books</h1>
      </div>
      <CustomPagination />

        </main>

    )
};

export default Funbooks;