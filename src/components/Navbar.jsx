'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav 
      className="flex shadow-lg justify-between
      items-center py-2 px-8">
      <Link 
        href='/'
        className="text-lg"  
      >
        Mini <span className="font-black uppercase">Blog</span>
      </Link>
      <ul className="flex list-none space-x-4 py-2 px-3 ">
        <li  
        >
          <Link 
            className={`py-2 px-3 ${pathname === '/' ? 'active' : ''}`}
            href='/'>
            Home
          </Link>
        </li>
        <li  
        >
          <Link 
            className={`py-2 px-3 ${pathname === '/login' ? 'active' : ''}`}
            href='/login'>
            Login
          </Link>
        </li>
        <li  
        >
          <Link 
            className={`py-2 px-3 ${pathname === '/register' ? 'active' : ''}`}
            href='/register'>
            Register
          </Link>
        </li>
        <li>
          <Link 
            className={`py-2 px-3  ${pathname === '/about' ? 'active' : ''}`}
            href='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar