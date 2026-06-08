"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
    const { data: session } = useSession();
    const [navOpen, setNavOpen] = useState(false);

    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About Our Studio", url: "/about" },
        { label: "Our Manifesto", url: "/manifesto" },
        { label: "Chat Us", url: "/chat" },
        { label: "Contact", url: "/contact" },
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg border-b border-slate-500/20">
            {/* Desktop Navbar Container */}
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
                
                {/* Left Side: Logo & Subtitle aligned to the absolute left edge */}
                <div className="flex items-center gap-3 z-50 shrink-0">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative overflow-hidden rounded-md p-1">
                            <Image
                                src="/DeeOakline2.png"
                                alt="logo"
                                width={500}
                                height={500}
                                className="w-40 h-20 object-contain rounded bg-white/20 shadow-lg border-b border-slate-700/50 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <span className="tracking-widest text-lg font-sans font-bold text-slate-300 group-hover:text-amber-400 transition-colors duration-200 hidden sm:inline-block">
                            FURNITURES
                        </span>
                    </Link>
                </div>

                {/* Center: Main Branding Title fixed precisely to container geometry */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center pointer-events-auto hidden md:block">
                    <Link href="/" className="block">
                        <h1 className="text-xl md:text-3xl font-sans font-black tracking-[0.2em] mr-15 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 transition-all duration-300 hover:brightness-110">
                            DEE OAK-LINE
                        </h1>
                    </Link>
                </div>

                {/* Right Side: Navigation & Actions completely packed to the absolute right edge */}
                <div className="flex items-center gap-8 z-50 ml-auto justify-end">
                    {/* Links - ml-auto completely isolates these items to the right side of the header timeline */}
                    <nav className="hidden lg:flex items-center gap-6 ml-auto">
                        {navLinks.map((item, i) => (
                            <Link 
                                key={i} 
                                href={item.url}
                                className="relative text-base font-medium tracking-wide text-slate-300 hover:text-amber-400 py-2 transition-colors duration-300 group whitespace-nowrap"
                            >
                                {item.label}
                                {/* Center-out expanding underline */}
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Section - Positioned next to rightmost links */}
                    {session && (
                        <div className="hidden md:block shrink-0">
                            <button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className="focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-full block"
                            >
                                <Avatar 
                                    alt={session?.user?.name} 
                                    src={session?.user?.image} 
                                    className="border-2 border-amber-500/50 hover:border-amber-500 transition-colors w-9 h-9"
                                />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: { 'aria-labelledby': 'basic-button' },
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link href="/profile" className="text-slate-700 w-full">My Profile</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link href="/upload" className="text-slate-700 w-full">Upload Tip</Link></MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <button onClick={() => signOut()} className="bg-red-500 w-full text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition-colors">
                                        Logout
                                    </button>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}

                    {/* Mobile Menu Toggle Hamburger Button */}
                    <button 
                        onClick={() => setNavOpen(!navOpen)}
                        className="lg:hidden text-2xl text-slate-300 hover:text-amber-400 p-1 focus:outline-none z-50 shrink-0"
                        aria-label="Toggle Navigation Menu"
                    >
                        {navOpen ? <IoMdClose /> : <RiMenu3Fill />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay Panel */}
            <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-md transition-all duration-300 lg:hidden flex flex-col items-center justify-center gap-8 ${navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col items-center gap-6">
                    {navLinks.map((item, i) => (
                        <Link 
                            key={i} 
                            href={item.url}
                            onClick={() => setNavOpen(false)}
                            className="text-xl font-medium tracking-wider text-slate-200 hover:text-amber-400 py-2 relative group block"
                        >
                            {item.label}
                            {/* Center-out expanding underline on mobile hover */}
                            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-500 transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Auth Actions - Active session only */}
                {session && (
                    <>
                        <hr className="w-1/4 border-slate-700" />
                        <div className="flex flex-col items-center gap-4">
                            <Avatar alt={session?.user?.name} src={session?.user?.image} className="w-12 h-12 border-2 border-amber-500" />
                            <Link href="/profile" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-white">My Profile</Link>
                            <Link href="/upload" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-white">Upload Tip</Link>
                            <button onClick={() => signOut()} className="bg-red-500 text-white px-6 py-2 rounded-md font-medium mt-2">Logout</button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}