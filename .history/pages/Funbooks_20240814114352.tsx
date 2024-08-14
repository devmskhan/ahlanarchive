import Header from "@/pages/Header";
import CustomPagination from "@/components/CustomPagination";


function Funbooks() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header />
      <div className="p-4">
        <h1>Educational Books</h1>
      </div>
      <CustomPagination />

        </main>

    )
};

export default Edubooks;