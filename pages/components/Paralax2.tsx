import React from 'react'
import Image from 'next/image'

const Paralax2 = () => {
  return (
    <>
    <h1 className="text-center text-4xl mb-20 font-semibold text-[#637684]">Modul <span className='text-[#008DFD]'>nostru</span>  de lucru</h1>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Share your Calendly <br /> availability with others
          </h1>
          <p className="text-2xl leading-normal">
            Grow your business with scheduling automation. Simply email, text,
            or add your Calendly availability to your website - and watch
            prospects and recruits book high-value meetings with you.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={300} />
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Schedule as a team
          </h1>
          <p className="text-2xl leading-normal">
            Calendly adapts to both you and your team's scheduling preferences.
            Co-host a client call with a colleague, email reminders and
            follow-ups, and integrate everything with your preferred software
            tools.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={100} />
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Hit your number
          </h1>
          <p className="text-2xl leading-normal">
            High-value meetings are the lifeblood of your business. Increase
            revenue, retain customers, and land recruits with the #1 scheduling
            automation platform.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={100} />
        </div>
      </div>

      <div className="flex mt-20 justify-around items-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-5">
            Echipa <br /> Noastră
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ut,
            nam dignissimos laborum ullam saepe vero enim. Qui, vel. Doloremque
            est facere maxime consequatur distinctio omnis praesentium porro
            delectus placeat.
          </p>
        </div>
        <div>
          <Image src="/images/echipa.jpg" alt="" width={600} height={100} />
        </div>
      </div>
      </>
  )
}

export default Paralax2