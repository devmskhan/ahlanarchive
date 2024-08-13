import Image from "next/image";


function Header() {
    return (
        <header>
            <div>
                <Image 
                src="/logo.jpg"
                alt="logo of the page"
                width={1}
                />

            </div>
        </header>

    );
}

export default Header;