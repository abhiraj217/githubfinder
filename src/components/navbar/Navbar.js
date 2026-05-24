import { FaGithub } from "react-icons/fa";

const Navbar =() => {
    return(
        <section className="flex justify-between sticky top-0 z-50 px-6 md:px-10 lg:px-16 py-5 bg-[#dc3545]">
            <div className="flex items-center gap-1">
                <span className="text-2xl text-bold">Github</span><FaGithub className="h-6  w-6"/> <span className="text-2xl text-bold">Finder</span>
            </div>
            <div className="flex gap-6 items-center">
                <span><a href="/" className="text-xl text-bold">Home</a></span>
                <span><a href="/aboutUs" className="text-xl text-bold">About</a></span>
            </div>
        </section>
    )
}

export default Navbar ;