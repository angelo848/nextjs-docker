import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 divide-main">
      <div className="shrink-0">
        <Image
          className="h-12 w-12"
          src="/next.svg"
          alt="ChitChat Logo"
          width={1}
          height={1}
        />
      </div>
      <div>
        <div className="text-xl font-medium text-main">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  )
}
