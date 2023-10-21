import { useState } from "react";
import { FaChrome } from "react-icons/fa6";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <nav className="w-full fixed md:position bg-white flex flex-wrap md:flex-nowrap justify-between py-4 px-8">
            <div className="">
                <a href="/" className="font-bold text-xl">Ekasir</a>
            </div>
            <div className="icon text-[24px] text-black hover:text-sky-500 flex items-center cursor-pointer md:hidden">
                <FaChrome onClick={() => setNav(!nav)} />
            </div>
            <ul className={`${nav ? 'flex' : 'hidden'} md:flex flex-col w-full md:justify-end md:flex-row list-none items-center gap-[2rem]`}>
                <li>
                    <a className="text-slate-950 hover:text-sky-500 border-b-2 border-sky-500 border-opacity-0 hover:border-b-2 py-2 hover:border-sky-500 transition-all duration-300" href="/">Beranda</a>
                </li>
                <li>
                    <a className="text-slate-950 hover:text-sky-500 border-b-2 border-sky-500 border-opacity-0 hover:border-b-2 py-2 hover:border-sky-500 transition-all duration-300" href="/categories">Kategori</a>
                </li>
                <li>
                    <a className="text-slate-950 hover:text-sky-500 border-b-2 border-sky-500 border-opacity-0 hover:border-b-2 py-2 hover:border-sky-500 transition-all duration-300" href="/login">Masuk</a>
                </li>
                <li>
                    <a className="text-slate-950 hover:text-sky-500 border-b-2 border-sky-500 border-opacity-0 hover:border-b-2 py-2 hover:border-sky-500 transition-all duration-300" href="/register">Daftar</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar