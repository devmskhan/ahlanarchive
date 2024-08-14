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
                { src: "/28.jpg", alt: "pic28", title: "Software Engineering Made Easy" },
                { src: "/29.jpg", alt: "pic29", title: "Control Engineering" },
                { src: "/210.jpg", alt: "pic210", title: "Gynecologic Pathology" },
                { src: "/211.jpg", alt: "pic211", title: "Neuroendoscopic Surgery" },
                { src: "/212.png", alt: "pic212", title: "Financial Accounting Theory" },
                { src: "/213.jpg", alt: "pic213", title: "Capital in the Twenty-First Century" },
                { src: "/214.jpg", alt: "pic214", title: "The Crisis of Globalization: Democracy, Capitalism and Inequality in the Twenty-First Century" },
                { src: "/215.jpg", alt: "pic215", title: "The Structure of Scientific Revolutions" },
                { src: "/215.jpg", alt: "pic215", title: "Guns, Germs, and Steel: The Fates of Human Societies" },
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