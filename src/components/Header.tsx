import { Navbar } from "flowbite-react"
import Image from "next/image";

export default function Header() {
  return (
    <Navbar fluid className="fixed top-0 left-0 w-full !bg-main/50 !py-0">
      <Navbar.Brand href="#">
        <img src="/logo.png" className="h-36 sm:h-60 md:h-40" />
        {/* <Image src="/logo.png" className="h-6 sm:h-9" alt="Flowbite Logo" width={50} height={100} /> */}
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Priscila </span> */}
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