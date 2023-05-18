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
        <section id="about" className="font-tertiary mb-16">
          <h3 className='text-2xl font-bold text-main mt-28 mb-10 text-center tracking-wide uppercase'
            id='title-doula'>
            O que faz uma doula?
          </h3>
          <div className='flex justify-evenly w-full max-lg:inline-grid grid-cols-2 gap-4 px-10
                          max-sm:grid-cols-1'>
            <div className='w-3/5 h-100 max-md:h-80 relative drop-shadow-2xl shadow-2xl
                           max-sm:mb-5'>
              <Image
                src='/consultoria-rn.jpg'
                fill={true}
                alt='image'
                className="rounded-xl"
              />
              {/* <Carousel className="drop-shadow-2xl shadow-2x" slideInterval={5000}>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                  />
                </div>
                <div className="h-full">
                  <Image
                    src='/background-1.png'
                    fill={true}
                    alt='image'
                  />
                </div>
              </Carousel> */}
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur dipisicing elit. Inventore laboriosam exercitationem dolore ipsa ut praesentium, recusandae eaque nemo facere libero voluptas vero, ducimus non! Voluptates delectus aliquam accusamus error voluptatum? <br /> <br />
              Lorem, ipsum dolor sit amet consectetur dipisicing elit. Inventore laboriosam exercitationem dolore ipsa ut praesentium, recusandae eaque nemo facere libero voluptas vero, ducimus non! Voluptates delectus aliquam accusamus error voluptatum? <br /> <br />
            </div>
          </div>
        </section>
        <section id="services" className="pt-10 font-tertiary bg-p-pink">
          <h3 className="text-2xl font-bold text-title/60 mb-10 text-center tracking-wide uppercase">
            Serviços
          </h3>
          <div className="flex justify-between px-10 w-full max-lg:inline-grid">
            <div className="max-w-sm max-sm:max-w-fit">
              <Card imgSrc="/mama.png"
                className="drop-shadow-xl max-h-200 h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Facilitadora em amamentação
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Facilitadora em amamentação é um suporte especializado para mães
                  com dificuldades na amamentação. Orientação, solução de problemas
                  e apoio emocional são fornecidos por profissionais treinados para
                  promover uma amamentação bem-sucedida.
                </p>
              </Card>
            </div>
            <div className="max-w-sm max-sm:max-w-fit">
              <Card imgSrc="/orelha.jpg"
                className="drop-shadow-xl max-h-200 h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Furo humanizado
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Furo humanizado em bebê é uma técnica delicada e segura de perfuração
                  de orelhas. Realizada por profissionais capacitados, utiliza materiais
                  esterilizados e agulhas finas, minimizando o desconforto e o risco
                  de complicações. Busca-se proporcionar uma experiência tranquila e estética,
                  respeitando o bem-estar da criança.
                </p>
              </Card>
            </div>
            <div className="max-w-sm max-sm:max-w-fit">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                className="drop-shadow-xl max-h-200 h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Educação perinatal
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  A educação perinatal é um processo educativo voltado para preparar
                  os pais para a chegada do bebê. Envolve aulas, palestras e orientações
                  que abordam temas como cuidados pré-natais, parto, amamentação,
                  cuidados com o recém-nascido e adaptação à nova fase da vida.
                  O objetivo é fornecer informações e recursos para que os pais
                  se sintam mais confiantes e preparados para cuidar do bebê.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex justify-evenly mt-10 px-10 w-full">
            <div className="max-w-sm max-sm:max-w-fit">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                className="drop-shadow-xl max-h-200 h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Consulta pós parto
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  A consulta pós-parto da doula é um serviço que oferece suporte emocional,
                  informação e orientação para a mãe após o parto. A doula ajuda a mãe a
                  processar a experiência do parto, oferece suporte no manejo da cicatrização
                  e cuidados da mãe, fornece suporte geral durante a transição para a maternidade,
                  auxilia nos cuidados com o mamilo.
                </p>
              </Card>
            </div>
            <div className="max-w-sm max-sm:max-w-fit">
              <Card imgSrc="/laser.jpg"
                className="drop-shadow-xl max-h-200 h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Laserterapia no <br /> pós-parto
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  A laserterapia no pós-parto é uma técnica que utiliza a luz laser
                  para ajudar na recuperação de lesões que podem ocorrer após o parto,
                  incluindo dor, inflamação, cicatrização e regeneração tecidual.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}
