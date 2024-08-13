import Image from "next/image";


function Header() {
    return (
        <header>
            <div className="flex flex-grow items-center p-1 py-2 bg-o">
            <div className="mt-2 flex items-center ">
                <Image 
                src="/logo(1).jpg"
                alt="logo of the page"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor:pointer"
                />

            </div>
            </div>
            
        </header>

    );
}

export default Header;