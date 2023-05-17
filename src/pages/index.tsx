import Image from "next/image";
import { Card, Carousel } from 'flowbite-react'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className='sm:mt-32 mt-40 relative -z-10'>
        <section id="main" className='h-100 px-20 py-36 text-center font-tertiary relative before:bg-[url("/background-1.png")] 
                          before:bg-cover before:block before:absolute before:left-0 
                          before:top-0 before:w-full before:h-full before:opacity-70
                          before:bg-center max-sm:p-8'>
          <Card className='drop-shadow-xl'>
            <h5 className="text-2xl font-bold text-title">
              O protagonismo da mulher no parto humanizado
            </h5>
            <p className="text-gray-700">
              Dar à luz é um momento único e sagrado na vida de uma mulher. Escolher o parto humanizado é escolher respeitar o seu corpo, a sua intuição e o seu bebê, garantindo uma experiência de nascimento mais tranquila, segura e empoderadora.
            </p>
          </Card>
        </section>
        <section id="about">
          <h3 className='text-2xl font-bold text-main mt-10 mb-5 text-center tracking-wide relative 
          bg-gradient-to-r from-title to-main text-transparent bg-clip-text
          before:absolute before:h-1 before:w-14 before:bg-gradient-to-r before:from-main before:to-title
          before:rounded-xl before:bottom-8'
            id='title-doula'>
            O que é uma doula?
          </h3>
          <div className='w-full inline-grid grid-cols-2 gap-4 px-10
                          max-sm:grid-cols-1'>
            <div className='w-full h-100 max-md:h-80 relative drop-shadow-2xl shadow-2xl
                           max-sm:mb-5 '>
              <Carousel className="drop-shadow-2xl shadow-2x" slide={false}>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                    className=''
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                    className=''
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                    className=''
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                    className=''
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                    className=''
                  />
                </div>
              </Carousel>
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur dipisicing elit. Inventore laboriosam exercitationem dolore ipsa ut praesentium, recusandae eaque nemo facere libero voluptas vero, ducimus non! Voluptates delectus aliquam accusamus error voluptatum? <br /> <br />
              Lorem, ipsum dolor sit amet consectetur dipisicing elit. Inventore laboriosam exercitationem dolore ipsa ut praesentium, recusandae eaque nemo facere libero voluptas vero, ducimus non! Voluptates delectus aliquam accusamus error voluptatum? <br /> <br />
            </div>
          </div>
        </section>
        <section id="services">

        </section>
      </main>
    </>
  )
}
