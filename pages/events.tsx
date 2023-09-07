import Slider from './components/Slider'
import undraw from '@/public/undraw.svg'
import Image from 'next/image'
export default function events() {
  return (
    <div>
      <h1 className="text-pm-color font-black text-center text-3xl">EVENTS@13</h1>
      <div className='mb-14'>
        {/* <Slider/> */}
        <div className="flex justify-center items-center flex-col h-[60vh] ">
          {/* <div className="flex justify-center items-center flex-col shadow-nav m-auto rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-60 p-10"> */}

          <Image src={undraw} alt='bitch' className='w-96 mb-10 '></Image>
          <h1 className=" text-center text-pm-color font-black  text-2xl ">Coming Soon...</h1>
        </div>
      </div>
    </div>
  )
}
