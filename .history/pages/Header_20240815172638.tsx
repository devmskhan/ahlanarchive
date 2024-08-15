"use client"

import Image from "next/image";
import { UserIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from "next-auth/react"


function Header() {
    const { data: session } = useSession();

    return (
        <header className="sticky top-0 z-50 w-full bg-amber-900">
            <div className="flex flex-grow items-center p-1 py-2 space-x-2">
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

            <div className="cursor-pointer relative flex items-center justify-center">
      {session ? (
        <div className="flex items-center space-x-2">
          <img 
            src={session.user?.image} 
            alt="User Profile" 
            className="h-10 w-10 rounded-full" 
          />
          <p className="text-xs text-gray-200">
            {session.user.name.split(" ")[0]} {/* Show the first name */}
          </p>
          <p 
            onClick={() => signOut()} 
            className="text-xs text-gray-200 cursor-pointer"
          >
            Sign out
          </p>
        </div>
      ) : (
        <div onClick={() => signIn()} className="flex items-center space-x-2">
          <UserIcon className="h-10 text-gray-200" />
          <p className="text-xs text-gray-200">User</p>
        </div>
      )}
    </div>
            
            <div className="cursor-pointer relative flex items-center justify-center">
                <span className="absolute inset-0 flex items-center justify-center h-6 w-6 bg-blue-600 rounded-full text-white font-bold">
                    0
                </span>
                <ShoppingBagIcon className="h-10 text-gray-200" />
                <p className="text-xs text-gray-200">My bag</p>
            </div>
            </div>
            
        </header>

    );
}

export default Header;