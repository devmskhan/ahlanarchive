import Image from "next/image";


function Header() {
    return (
        <header>
            <div>
                <Image 
                src="/logo(1).jpg"
                alt="logo of the page"
                width={150}
                height={40}
                object
                />

            </div>
        </header>

    );
}

export default Header;