'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/image/logo.png" 
              alt="logo" 
              width={150} 
              height={50}
              className="w-auto h-8 md:h-10" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-coffee-600 font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-coffee-600 font-medium">
              Menu
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-coffee-600 font-medium">
              About Us
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-coffee-600 font-medium">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-coffee-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="px-6">
              Sign In
            </Button>
            <Button className="px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-gray-50"
              >
                Menu
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link 
                href="/shop" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-gray-50"
              >
                Shop
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
            <div className="px-5 py-4 border-t border-gray-200">
              <Button variant="outline" className="w-full mb-2">
                Sign In
              </Button>
              <Button className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
