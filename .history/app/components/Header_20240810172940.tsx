import Image from "next/image";


function Header() {
    return (
        <header>
            <div>
                <Image 
                src="/logo.jpg"
                alt="logo of th"
                />

            </div>
        </header>

    );
}

export default Header;