import { Navbar } from "flowbite-react"
import Image from "next/image";

export default function Header() {
  return (
    <Navbar fluid className="fixed top-0 left-0 w-full !bg-p-blue !py-0">
      <Navbar.Brand href="#main" className="relative w-48 h-32 md:max-lg:h-32 max-sm:h-32">
        <Image src="/logo.png" alt="" fill={true} style={{ objectFit: "contain" }} sizes="48rem" priority />
      </Navbar.Brand>
      <Navbar.Toggle className="hover:bg-p-blue" />
      <Navbar.Collapse>
        <Navbar.Link href="#about" className="hover:!text-tertiary hover:bg-p-blue border-p-pink">O que faz uma doula?</Navbar.Link>
        <Navbar.Link href="#services" className="hover:!text-tertiary hover:bg-p-blue border-p-pink">Serviços</Navbar.Link>
        <Navbar.Link href="#nav" className="hover:!text-tertiary hover:bg-p-blue border-p-pink">Quem sou eu</Navbar.Link>
        <Navbar.Link href="#nav" className="hover:!text-tertiary hover:bg-p-blue border-p-blue">Como contratar?</Navbar.Link>
      </Navbar.Collapse>
      <div></div>
    </Navbar>
  )
}