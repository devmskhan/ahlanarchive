import Image from "next/image";
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';


function Header() {
    return (
        <header>
            <div className="flex flex-grow items-center p-1 py-2 bg-orange-600">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                src="/logo(1).jpg"
                alt="logo of the page"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor:pointer"
                />

            </div>
            <div className="hidden sm:flex items-center h-10 flex-grow cursor-pointer bg-white rounded-xl mr-2">
                <input className="p-2 h-full w-8 flex-grow flex-shrink rounded-l-md focus:outline-none px-2 " type="text"/>
                <MagnifyingGlassIcon className="h-12 p-4 text-gray-300"/>
            </div>
            
            <div className="cursor-pointer">
                <ShoppingBagIcon className="h-10 text-gray-200"/>
                <p className="text-xs">My bag</p>
            </div>
            </div>
            
        </header>

    );
}

export default Header;