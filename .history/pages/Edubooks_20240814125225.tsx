import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Header from "@/pages/Header";
import CustomPagination from "@/components/CustomPagination";
import "./globals.css";


function Edubooks() {
    return (
        <main className="bg-gray-300 min-h-screen">
            <Header />
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
                { src: "/1.jpg", alt: "pic1", title: "Structure and Interpretation of Computer Programs (MIT Electrical Engineering and Computer Science)" },
                { src: "/2.jpg", alt: "pic2", title: "Algorithms with JULIA" },
                { src: "/3.jpg", alt: "pic3", title: "Algorithms in Advanced AI" },
                { src: "/4.jpg", alt: "pic4", title: "The C Programming Language" },
                { src: "/5.jpg", alt: "pic5", title: "Programming Pearls" },
                { src: "/6.jpg", alt: "pic6", title: "Effective Java" },
                { src: "/7.jpg", alt: "pic7", title: "Eloquent JavaScript, 4th Edition" },
                { src: "/8.jpg", alt: "pic8", title: "Python Crash Course, 3rd Edition" },
                { src: "/9.jpg", alt: "pic9", title: "Clean Code: An Agile Guide to Software Craft" },
                { src: "/10.jpg", alt: "pic10", title: "Node.js Design Patterns" },
                { src: "/11.jpg", alt: "pic11", title: "The Pragmatic Programmer: Your Journey to Mastery" },
                { src: "/12.jpg", alt: "pic12", title: "The Passionate Programmer" },
                { src: "/13.jpg", alt: "pic13", title: "The Book Collection React JS" },
                { src: "/14.jpg", alt: "pic14", title: "React js For Beginners" },
                { src: "/15.jpg", alt: "pic15", title: "PyTorch Pocket Reference" },
            ].map((book, index) => (
                <div key={index} className="bg-white relative flex flex-col items-center justify-between p-6 m-5 shadow-md rounded-md">
                    <Image src={book.src} alt={book.alt} height={150} width={150} className="mb-4"/>
                    <h4 className="text-center text-lg font-semibold mb-4">{book.title}</h4>
                    <Button className="bg-amber-700 text-gray-300 py-2 px-4 mt-auto w-full" variant="outline">
                        Add to my bag
                    </Button>
                </div>
            ))}
        </div>
        <CustomPagination />

        </main>

    )
};

export default Edubooks;