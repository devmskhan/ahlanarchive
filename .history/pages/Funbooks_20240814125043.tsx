import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Header from "@/pages/Header";
import CustomPagination from "@/components/CustomPagination";
import "./globals.css";


function Funbooks() {
    return (
        <main className="bg-gray-300 min-h-screen">
            <Header />
      
      <CustomPagination />

        </main>

    )
};

export default Funbooks;