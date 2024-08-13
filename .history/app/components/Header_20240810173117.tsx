import Image from "next/image";


function Header() {
    return (
        <header>
            <div>
                <Image 
                src="/logo().jpg"
                alt="logo of the page"
                width={150}
                height={40}
                />

            </div>
        </header>

    );
}

export default Header;