import { useForm, ValidationError } from '@formspree/react';
export default function Qqtd() {
  const [state, handleSubmit] = useForm("myyqgvql");
  if (state.succeeded) {
      return <p>Thanks for answering!</p>;
  }
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
            <h1 className="mt-10 text center text-pm-color font-black text-xl  sm:text-2xl">QUESTION OF THE DAY!</h1>
      </div>
      <div className='bg-white rounded-xl shadow-nav backdrop-filter backdrop-blur-sm bg-opacity-10  sm:max-w-5xl min-h-[65vh] m-auto max-w-[95%] mt-10 '>
          <div className='max-w-[90%] text-center m-auto pt-5 flex flex-col justify-center '>
            <p className='text-lg text-center'>How are you supposed to make the connections of a 3 wheeled bot? (Robodex Interview'23) (Submit link of the image containing answer)</p>
          <p className='text-pm-color text-lg pt-2 font-black'>Stated by: Raghav Bansal</p>
          </div>
            <form className='' onSubmit={handleSubmit}>
              <div className='flex flex-col min-w-6xl mb-14  items-center'>
              <div className=' flex mt-5 justify-between items-center flex-col sm:flex-col '>
              <div className='flex flex-col justify-between items-center  '>
                <div className='flex justify-center items-center  '>
            <label htmlFor="name" className='mr-2 text-lg'>
        Name:    
      </label>
      <input
        id="name"
        type="text" 
        name="name" 
        className='border-gray-500 bg-white background-filter backdrop-blur-sm opacity-80 shadow-nav border-2 rounded-lg w-60 h-8 bg-transparent '
      />
      </div>
     <div className='flex justify-center items-center mt-5 '>
     <label htmlFor="email" className='mr-2 text-lg'>
        Email: 
      </label>
      <input
        id="email"
        type="email" 
        name="email" 
        className='border-gray-500 bg-white background-filter backdrop-blur-sm opacity-80 shadow-nav border-2 rounded-lg w-60 h-8 bg-transparent '
      />
     </div>
      <div className='flex justify-center items-center mt-5'>
      <label htmlFor="name" className='mr-2 text-lg'>
        Class: 
      </label>
      <input
        id="class/sec"
        type="text" 
        name="class/sec" 
        className='border-gray-500 bg-white background-filter backdrop-blur-sm opacity-80 shadow-nav border-2 rounded-lg w-60 h-8 bg-transparent '
      />
      </div>
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className='flex justify-end items-center mt-5'>
        <div className='flex flex-col justify-center items-center '>
        <label htmlFor="ans " className=' text-lg'>
          Answer:
        </label>
      <textarea
      color='black'
      cols={27}
      rows={7}
        id="message"
        name="message" 
        className='border-gray-500 text-pm-color ml-5 bg-white background-filter backdrop-blur-sm opacity-40 shadow-nav border-2 rounded-lg  '
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      </div>
      <button type="submit" disabled={state.submitting} className='text-center shadow-nav mt-5 mb-5 flex justify-center items-center w-32 h-8 rounded-lg bg-pm-color text-white'>
        Submit
      </button>
      </div>
    </form>
    </div>
    </div>
  )
}
