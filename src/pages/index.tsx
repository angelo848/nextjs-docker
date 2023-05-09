import { Card } from 'flowbite-react'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className='sm:mt-32 mt-40 relative -z-10'> */}
      <section className='h-100 px-20 py-36 mt-40 sm:mt-32 -z-10 text-center font-tertiary relative before:bg-[url("/background-1.png")] 
                          before:bg-cover before:block before:absolute before:left-0 
                          before:top-0 before:w-full before:h-full before:opacity-70
                          before:bg-center max-sm:p-8'>
        <Card className='drop-shadow-xl'>
          <h5 className="text-2xl font-bold text-[#149166]">
            O protagonismo da mulher no parto humanizado
          </h5>
          <p className="text-gray-700">
            Dar à luz é um momento único e sagrado na vida de uma mulher. Escolher o parto humanizado é escolher respeitar o seu corpo, a sua intuição e o seu bebê, garantindo uma experiência de nascimento mais tranquila, segura e empoderadora.
          </p>
        </Card>
      </section>
      {/* </main> */}
    </>
  )
}
