export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 shadow-nav h-[45px] pt-2 bg-white backdrop-filter backdrop-blur-sm bg-opacity-60">
      <div className="row">
        <div className="item">
          <h1 className='text-pm-color pl-2 font-black text-base'>© Robodex 2023-24</h1>
        </div>
        <div className="item">
          <button className='text-center text-sm shadow-nav flex justify-center items-center w-40 h-8 rounded-lg bg-pm-color text-white'>
            VENI . VEDI . VICI
          </button>
        </div>
        <div className="item">
          <h1 className='text-pm-color pr-2 font-black text-lg'>13 Years of Innovation</h1>
        </div>
      </div>
    </div>
  )
}
