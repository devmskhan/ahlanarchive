import Header from "../pages/Header"


function checkout() {
    return (
        <div className="bg-gray-300">
            <Header />
            <div className="flex flex-col p-5 space-y-10 bg-gray-300">
                <h1 className="text-3xl ">My Books Bag</h1>

            </div>
        </div>
    )
}

export default checkout;