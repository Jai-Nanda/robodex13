import DPSMap from "./components/Map"
import Head from "next/head";
export default function Contact() {
  return (
    <>
    <Head>
        <title>ROBODEX</title>
        <meta name="description" content="ROBODEX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="sm:max-w-5xl m-auto  max-w-[80%]  h-[75vh] ">
        <h1 className="mt-5 text-center mb-5 font-black text-3xl text-pm-color">GET IN TOUCH</h1>
        <div className='flex flex-col items-center justify-center sm:flex sm:flex-row-reverse sm:justify-between sm:items-center ' >
         <div className="">
          <DPSMap />
         </div>
         <div className=" bg-white backdrop-filter backdrop-blur-sm bg-opacity-60 pb-5 pt-5 px-5 rounded-lg ">
          <div className='  max-w-[85%] m-auto sm:max-w-[100%]'>
            Contact us at: 
            <h4 >Delhi Public School, Dwarka</h4>
            <br />  
            <p  >
                <b className="text-pm-color">Address: </b>
              Phase I, Dwarka Sector-3, Dwarka, New Delhi, Delhi 110078
            </p>
            <p >
                <b className="text-pm-color">Phone: </b>
              011 2507 4472
            </p>
            <p >
                <b className="text-pm-color">Email: </b>
                robodexclubdpsdwarka@gmail.com
            </p>            <br /> 
            For any queries regarding ROBODEX, feel free to contact any of the
            following:
          </div>
          <ul className="list-disc mt-4 ml-4">
            <li><p className="">Ms. Pooja Batra: 9810164182 (Teacher Incharge)</p></li>
            <li><p className="">Ms. Shikha Sethi: 9818807952(Teacher Incharge)</p></li>
          </ul>
          <ul className="list-disc mt-4 ml-4">
            <li><p>Raghav Grover: 9873430061(President)</p></li>
            <li><p>Suyash Chauhan: 9971431419(President)</p></li>
          </ul>
          </div>
        </div>

        </div>
        </>
  )
}