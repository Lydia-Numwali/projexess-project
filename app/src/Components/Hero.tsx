import React from 'react'
import ellipse from '../assets/Ellipse 1.svg'
import ellipse2 from '../assets/Ellipse 2.svg'
import ellipse3 from '../assets/Ellipse 3.svg'
import ellipse4 from '../assets/Ellipse 4.svg'
import ellipse5 from '../assets/Ellipse 5.svg'
import ellipse6 from '../assets/Ellipse 6.svg'
import ellipse7 from '../assets/Ellipse 7.svg'
import Arrowleft from '../assets/icons/Arrow - Left.svg'
import CustomButton from './CustomButton'


const Hero = () => {
  return (
    <div className='bg-[#F1FBFF]'>
      <img src={ellipse}  alt="" className='' />
      <img src={ellipse2} alt=""  />
      <img src={ellipse3} alt="" />
      <img src={ellipse4} alt="" />
      <img src={ellipse5} alt="" />
      <img src={ellipse6} alt="" />
      <img src={ellipse7} alt="" className='absolute' />
       <div className='hero absolute top-32'>
       <div className='pt-0 padding-x text-center'>
        <h1 className="text-4xl font-bold">
          ProjeXess-Your Assistant,<br/>Your Success
        </h1>
        <p className="max-w-screen-lg mx-48 mt-8">Empowering Dreams, Building Futures, Your Bridge to Project Success . We're here to bridge the gap between dreams and reality, equipping project initiators with the guidance, resources, and expert support needed to ensure your initiatives flourish and make a meaningful impact on our communities</p>
      </div>
      <div className='flex items-center justify-center space-x-6 mt-8'>
        <CustomButton label='Click Me ' textColor='#fff' bgColor='#3AA1FF' icon={Arrowleft}/>
        <CustomButton label='Click Me' textColor='#3AA1FF' bgColor='#fff' icon={Arrowleft}/>
        </div>
      </div>
        
    </div>
  )
}

export default Hero

