import { GiCrossMark } from "react-icons/gi";
import { LuUserPlus } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import { TiThMenu } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [navBar, setNavbar] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setNavbar(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <section className='bg-blue-900'>
                <nav className='flex w-full justify-between top-0 text-white transition-all px-11 py-3 lg:px-10 m-auto font-sans items-center z-10 sticky'>
                    <span className="uppercase text-2xl">logo</span>
                    <motion.ul 
                        layoutId="underline" 
                        className={`capitalize flex space-x-4 max-md:hidden items-center text-sm ${navBar ? 'hidden' : 'flex'}`}
                    >
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='#'>about</Link></li>
                        <li><Link to='#'>contact</Link></li>
                        <li><Link to='#'>news</Link></li>
                    </motion.ul>
                    <div className="flex space-x-4">
                        <button className="lg:hidden md:hidden" onClick={() => setNavbar(!navBar)}>
                            {navBar ? <GiCrossMark className="text-3xl" /> : <TiThMenu className='text-3xl' />}
                        </button>
                        <Button onClick={() => setDropdownVisible(!dropdownVisible)}>
                            <LuUserPlus className="text-xl" />
                        </Button>
                    </div>
                </nav>
            </section>
            <AnimatePresence>
                {navBar && (
                    <motion.div
                        ref={menuRef}
                        className="block absolute mx-2 transition-all border px-8 py-8 rounded-md border-gray-400 justify-center items-center"
                        initial={{ left: -100 }}
                        animate={{ left: 0 }}
                        exit={{ left: -100 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <ul className='capitalize flex flex-col gap-7 pb-2 text-gray-600 text-center m-auto text-sm'>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='#'>about</Link></li>
                            <li><Link to='#'>contact</Link></li>
                            <li><Link to='#'>news</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
                
            <AnimatePresence>
                {dropdownVisible && (
                    <motion.div
                        ref={dropdownRef}
                        className="mx-8 flex right-0 float-right absolute capitalize p-2 gap-2 text-sm border border-gray-400 rounded-md flex-col"
                        initial={{ opacity: 0, top: 50 }}
                        animate={{ opacity: 1, top: 60 }}
                        exit={{ opacity: 0, top: 50 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <Link to='/signup' className="uppercase">signup</Link>
                        <Link to='/signin' className="uppercase">login</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
