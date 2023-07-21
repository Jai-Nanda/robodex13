export default function DPSMap() {
    return (
      <div
        style={{
          overflow: `hidden`,
          background: `none !important`,
          height: `450px`,
          width: `420px`,
        }}
        className='border-white border-8   m-auto max-w-[100%] rounded-xl'
      >
        <iframe
          width="420" 
          height="450"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=delhi%20public%20school%20dwarka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          // frameBorder="0"
          scrolling="no"
          // marginheight="0"
          // marginwidth="0"
        ></iframe>
      </div>
    )
  }