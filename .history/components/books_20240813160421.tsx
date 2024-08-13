import Image from 'next/image'


function Books() {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-white relative flex flex-col">
                <Image src="https://media.oceanofpdf.com/2020/04/PDF-EPUB-Structure-and-Interpretation-of-Computer-Programs-MIT-Electrical-Engineering-and-Computer-Science-by-Harold-Abelson-Download.jpg" alt="" height={100} width={100}/>
                <h4>Structure and Interpretation of Computer Programs (MIT Electrical Engineering and Computer Science)</h4>
                <button>Add to my bag</button>
            </div>

            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4>Algorithms with JULIA</h4>
                <button></button>
            </div>

            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4>Algorithms in Advanced AI</h4>
                <button></button>
            </div>

            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4>The C Programming Language</h4>
                <button></button>
            </div>

            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4> Programming Pearls</h4>
                <button></button>
            </div>

            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4>Effective Java</h4>
                <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>Eloquent JavaScript, 4th Edition</h4>
            <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>Python Crash Course, 3rd Edition</h4>
            <button></button>
            </div>


            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4>Clean Code: An Agile Guide to Software Craft</h4>
                <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>Clean Code: An Agile Guide to Software Craft</h4>
            <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>Clean Code: An Agile Guide to Software Craft</h4>
            <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>Clean Code: An Agile Guide to Software Craft</h4>
            <button></button>
            </div>

            <div>
            <Image src="" alt="" height={100} width={100}/>
            <h4>Clean Code: An Agile Guide to Software Craft</h4>
            <button></button>
            </div>

            <div>
                <Image src="" alt="" height={100} width={100}/>
                <h4>Clean Code: An Agile Guide to Software Craft</h4>
                <button></button>
            </div>



        </div>
    )
};

export default Books;