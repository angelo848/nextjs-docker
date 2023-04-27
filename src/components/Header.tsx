import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import Link from "next/link";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href='#nav'>
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#nav" active>
          Home
        </Navbar.Link>
        <Navbar.Link href='#nav'>
          About
        </Navbar.Link>
        <Navbar.Link href="#nav">Services</Navbar.Link>
        <Navbar.Link href="#nav">Pricing</Navbar.Link>
        <Navbar.Link href="#nav">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}