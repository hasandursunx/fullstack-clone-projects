import { useRef, useState } from "react";
import { useAuthStore } from "../store/useAuthStore"
import { Flame, User, LogOut, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
    const { authUser, logout } = useAuthStore();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    return (
        <header className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to='/' className="flex items-center space-x-2">
                            <Flame className="w-8 h-8 text-white" />
                            <span className="font-bold text-white text-2xl hidden sm:inline">Swipe</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {
                            authUser ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center space-x-2 focus:outline-none"
                                    >
                                        <img
                                            src={authUser.img || "/avatar.png"}
                                            className="h-10 w-10 object-cover rounded-full border-2 border-white"
                                            alt="User Image" />
                                        <span className="font-medium text-white">
                                            {authUser.name}
                                        </span>
                                    </button>
                                    {
                                        dropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                                <Link
                                                    to='/profile'
                                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    <User className="mr-2" size={16} />
                                                    Profile
                                                </Link>
                                                <button
                                                    onClick={logout}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                >
                                                    <LogOut className='mr-2' size={16} />
                                                    Logout
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            ) : (
                                <>
                                    <Link
                                        to='login'
                                        className="text-white hover:text-pink-200 transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to='register'
                                        className="bg-white text-pink-600 px-4 py-2 rounded-full font-medium
                                        hover:bg-pink-100 transition duration-150 ease-in-out"
                                    >

                                        Sign Up
                                    </Link>
                                </>
                            )
                        }
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none text-white">
                            <Menu className='size-6' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header