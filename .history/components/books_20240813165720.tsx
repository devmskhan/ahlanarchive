import Image from 'next/image'
import { Button } from "@/components/ui/button"



function Books() {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/1.jpg" alt="pic1" height={100} width={100}/>
                <h4 className="my-3">Structure and Interpretation of Computer Programs (MIT Electrical Engineering and Computer Science)</h4>
                <Button className="bg-amber-700 text-gray-300 p-2" variant="outline">Add to my bag</Button>

            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/2.jpg" alt="pic2" height={100} width={100}/>
                <h4>Algorithms with JULIA</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/3.jpg" alt="pic3" height={100} width={100}/>
                <h4>Algorithms in Advanced AI</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/4.jpg" alt="pic4" height={100} width={100}/>
                <h4>The C Programming Language</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/5.jpg" alt="pic5" height={100} width={100}/>
                <h4> Programming Pearls</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/6.jpg" alt="pic6" height={100} width={100}/>
                <h4>Effective Java</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/7.jpg" alt="pic7" height={100} width={100}/>
            <h4>Eloquent JavaScript, 4th Edition</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/8.jpg" alt="pic8" height={100} width={100}/>
            <h4>Python Crash Course, 3rd Edition</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>


            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/9.jpg" alt="pic9" height={100} width={100}/>
                <h4>Clean Code: An Agile Guide to Software Craft</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/10.jpg" alt="pic10" height={100} width={100}/>
            <h4>Node.js Design Patterns</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/11.jpg" alt="pic11" height={100} width={100}/>
            <h4>The Pragmatic Programmer: Your Journey to Mastery</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/12.jpg" alt="pic12" height={100} width={100}/>
            <h4>The Passionate Programmer</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/13.jpg" alt="pic13" height={100} width={100}/>
            <h4>The Book Collection React JS</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/14.jpg" alt="pic14" height={100} width={100}/>
                <h4>React js For Beginners</h4>
                <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="/15.jpg" alt="pic15" height={100} width={100}/>
            <h4>PyTorch Pocket Reference</h4>
            <Button className="bg-amber-700 text-gray-300" variant="outline">Add to my bag</Button>
            </div>



        </div>
    )
};

export default Books;