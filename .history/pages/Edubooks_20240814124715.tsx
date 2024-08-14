import Header from "@/pages/Header";
import CustomPagination from "@/components/CustomPagination";
import "./globals.css";


function Edubooks() {
    return (
        <main className="bg-gray-300 min-h-screen">
            <Header />
      
      <CustomPagination />

        </main>

    )
};

export default Edubooks;