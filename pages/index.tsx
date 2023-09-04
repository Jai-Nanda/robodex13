import Image from "next/image"
import team from '../public/team.png'
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <div style={{
        backgroundImage: `url(/team.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: "cover"

      }} className=" max-w-[100%] object-cover sm:max-w-6xl mt-5 mb-10  m-auto shadow-nav rounded-lg block shadow-bg   h-[700px] sm:h-[750px]">
        <div className="rounded-lg backdrop-blur-lg sm:backdrop-blur-lg pb-7 bg-white/20   ease-in duration-300">
          <h1 className="pt-5 text-center text-black font-black  text-3xl">ROBODEX <span className="text-pm-color">&apos;13</span></h1>
          <div className="flex items-center justify-center p-1">
            <Link href={"https://www.facebook.com/robodexterous/"} target="_blank"><BsFacebook size={20} color="#1d1d3e" className="mr-2" /></Link>
            <Link href={"https://www.linkedin.com/company/robodexx/mycompany/"} target="_blank"><BsLinkedin size={20} color="#1d1d3e" className="mr-2" /></Link>
            <Link href={"https://www.instagram.com/robodexterous/"} target="_blank"><BsInstagram size={20} color="#1d1d3e" className="" /></Link>
          </div>
          <div className="flex justify-center items-center mt-5">
            <span className="text-pm-color sm:pr-2 text-sm pr-1 sm:text-2xl font-black">13 </span><h1 className=" text-sm sm:text-2xl font-black"> YEARS OF ROBOTIC EXCELLENCE!</h1>
          </div>
        </div>
      </div>

      <div className=" max-w-6xl bg-bg-colors shadow-nav m-auto rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-60 pb-5  mb-16 ">
        <div className="flex items-center justify-center flex-col pt-4">
          <h1 className="pt-5 text center text-pm-color font-black text-3xl">ABOUT US</h1>
          <p className="text-center sm:max-w-5xl  pt-4 sm:text-base text-sm max-w-[95%] m-auto">Founded in the year 2009, ROBODEX is the Robotics club of Delhi Public School Dwarka, New Delhi. The club began with only 5 members as intra-house activity. Within an years time we grew to conduct our first inter school event in the year 2010.</p>

          <p className="text-center sm:max-w-5xl  pt-2 sm:text-base text-sm max-w-[95%] m-auto">We are a group of technology enthusiasts who aim at nurturing the spirit of inquiry in young minds by exposing them to applications of everyday learning with the focus being on machines and automation. We strive towards finding innovative solutions to day to day problems through robotics.
            Innovation is the outcome of a habit not a random act</p>
          <p className="text-center sm:max-w-5xl  pt-2 sm:text-base text-sm max-w-[95%] m-auto">Innovation is the outcome of a habit not a random act
            Keeping this in mind, we at Robodex-The robotics club of D.P.S. Dwarka conduct inter-school and intra-school events every year.</p>

        </div>
      </div>
    </>
  )
}
