import Image from "next/image";
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';


function Header() {
    return (
        <header>
            <div className="flex flex-grow items-center p-1 py-2 bg-amber-900 space-x-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                src="/aarlogo.png"
                alt="logo of the page"
                width={100}
                height={30}
                className="cursor-pointer"
                />

            </div>
            <div className="hidden sm:flex items-center h-10 flex-grow cursor-pointer bg-white rounded-xl mr-2">
                <input className="p-2 h-full w-8 flex-grow flex-shrink rounded-l-xl focus:outline-none px-2 " type="text"/>
                <MagnifyingGlassIcon className="h-12 p-4 text-gray-400"/>
            </div>
            
            <div className="cursor-pointer relative itwms-center">
                <
                <ShoppingBagIcon className="h-10 text-gray-200"/>
                <p className="text-xs text-gray-200">My bag</p>
            </div>
            </div>
            
        </header>

    );
}

export default Header;