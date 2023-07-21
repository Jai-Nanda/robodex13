import footer from '@/public/footer.png'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='shadow-bg max-w-[95%] m-auto bg-white backdrop-filter backdrop-blur-sm bg-opacity-60 max-h-10 '>
      <div className="flex ...">
  <div className="flex-none w-60 h-14 ...">
    <div className=''>
    <h1 className='text-pm-color font-black text-lg'>© Robodex 2023-24</h1>
    </div>
  </div>
  <div className="grow h-14 ...">
    <div className='flex flex-col items-center justify-center '>
        <Image src={footer} alt='veni vedi vici' className='w-56'></Image>
    </div>
  </div>
  <div className="flex-none  h-14 ...">
    <div>
        <h1 className='text-pm-color font-black text-center text-lg'>13 Years of Innovation</h1>
    </div>
  </div>
</div>

    </div>
  )
}
