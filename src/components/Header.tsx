import { Navbar } from "flowbite-react"
import Image from "next/image";

export default function Header() {
  return (
    <Navbar fluid className="fixed top-0 left-0 w-full !bg-main-medium !py-0">
      <Navbar.Brand href="#" className="relative w-48 h-40 md:max-lg:h-32 max-sm:h-32">
        <Image src="/logo.png" alt="" fill={true} style={{ objectFit: "contain" }} sizes="48rem" priority />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#nav" className="hover:!text-tertiary">O que é uma doula?</Navbar.Link>
        <Navbar.Link href="#nav" className="hover:!text-tertiary">Quem sou eu</Navbar.Link>
        <Navbar.Link href="#nav" className="hover:!text-tertiary">Meu trabalho</Navbar.Link>
        <Navbar.Link href="#nav" className="hover:!text-tertiary">Como contratar?</Navbar.Link>
      </Navbar.Collapse>
      <div></div>
    </Navbar>
  )
}