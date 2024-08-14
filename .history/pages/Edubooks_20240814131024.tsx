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
                { src: "/21.jpg", alt: "pic21", title: "Principles of Mathematical Analysis" },
                { src: "/22.jpg", alt: "pic22", title: "The Feynman Lectures on Physics Vol 1" },
                { src: "/23.jpg", alt: "pic23", title: "Modern Classical Mechanics" },
                { src: "/24.jpg", alt: "pic24", title: "Prolegomena to Relativity Economics: An Elementary Study in the Mechanics and Organics of an Expanding Economic Universe" },
                { src: "/25.jpg", alt: "pic25", title: "The Principles of Quantum Mechanics" },
                { src: "/26.jpg", alt: "pic26", title: "Engineering Mechanics by Ping Yi" },
                { src: "/27.jpg", alt: "pic27", title: "Industrial Robotics" },
                { src: "/8.jpg", alt: "pic28", title: "Software Engineering Made Easy" },
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