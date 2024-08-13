import Image from 'next/image'


function Books() {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/1" alt="pic1" height={100} width={100}/>
                <h4 className="my-3">Structure and Interpretation of Computer Programs (MIT Electrical Engineering and Computer Science)</h4>
                <button>Add to my bag</button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/2" alt="pic2" height={100} width={100}/>
                <h4>Algorithms with JULIA</h4>
                <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="/3" alt="pic3" height={100} width={100}/>
                <h4>Algorithms in Advanced AI</h4>
                <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="" alt="" height={100} width={100}/>
                <h4>The C Programming Language</h4>
                <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="" alt="" height={100} width={100}/>
                <h4> Programming Pearls</h4>
                <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="" alt="" height={100} width={100}/>
                <h4>Effective Java</h4>
                <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="" alt="" height={100} width={100}/>
            <h4>Eloquent JavaScript, 4th Edition</h4>
            <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="" alt="" height={100} width={100}/>
            <h4>Python Crash Course, 3rd Edition</h4>
            <button></button>
            </div>


            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
                <Image src="" alt="" height={100} width={100}/>
                <h4>Clean Code: An Agile Guide to Software Craft</h4>
                <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="" alt="" height={100} width={100}/>
            <h4>Node.js Design Patterns</h4>
            <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="" alt="" height={100} width={100}/>
            <h4>The Pragmatic Programmer: Your Journey to Mastery</h4>
            <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="" alt="" height={100} width={100}/>
            <h4>The Passionate Programmer</h4>
            <button></button>
            </div>

            <div className="bg-white relative flex flex-col m-5 z-30 p-10">
            <Image src="" alt="" height={100} width={100}/>
            <h4>The Book Collection React JS</h4>
            <button></button>
            </div>

            <div >
                <Image src="" alt="" height={100} width={100}/>
                <h4>React js For Beginners</h4>
                <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>PyTorch Pocket Reference</h4>
            <button></button>
            </div>



        </div>
    )
};

export default Books;