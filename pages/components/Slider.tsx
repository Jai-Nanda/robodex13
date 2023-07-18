import Image from 'next/image';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import team from '@/public/team.png'
import soccer from '@/public/soccer.png'
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className='max-h-xl max-w-4xl rounded-lg  m-auto mt-10 bg-white shadow-nav backdrop-filter backdrop-blur-sm bg-opacity-10'>
			<Carousel className='sm:max-h-2xl max-h-xl'>
				<div className='flex justify-center items-center flex-col sm:flex-row sm:max-h-xl'>
					<div className='sm:max-w-[50%]  '>
						<h1 className='text-center text-pm-color font-black  text-2xl'>ROBOSOCCER</h1>
				<p className='sm:text-left font-semibold max-w-[90%] pt-2 m-auto text-center text-lg'>Welcome to the electrifying arena of Robosoccer, where human ingenuity and technological prowess collide in a spectacular display of robotic athleticism. Witness the future of sports as state-of-the-art robots take center stage, showcasing their agility, precision, and strategic brilliance.  It&apos;se a thrilling fusion of cutting-edge engineering and the beautiful game of soccer.</p>
					</div>
					<div className=' mt-4 '>
          <Image src={soccer} alt='jai' className='  sm:min-w-[450px] sm:min-h-[420px] '/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col sm:flex-row sm:max-h-xl'>
					<div className='sm:max-w-[50%]  '>
						<h1 className='text-center text-pm-color font-black  text-2xl'>ROBOSOCCER</h1>
						<p className='sm:text-left font-semibold max-w-[90%] pt-2 m-auto text-center text-lg'>Welcome to the electrifying arena of Robosoccer, where human ingenuity and technological prowess collide in a spectacular display of robotic athleticism. Witness the future of sports as state-of-the-art robots take center stage, showcasing their agility, precision, and strategic brilliance.  It&apos;se a thrilling fusion of cutting-edge engineering and the beautiful game of soccer.</p>
					</div>
					<div className=' mt-4 '>
          <Image src={soccer} alt='jai' className='  sm:min-w-[450px] sm:min-h-[420px] '/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col sm:flex-row sm:max-h-xl'>
					<div className='sm:max-w-[50%]  '>
						<h1 className='text-center text-pm-color font-black  text-2xl'>ROBOSOCCER</h1>
						<p className='sm:text-left font-semibold max-w-[90%] pt-2 m-auto text-center text-lg'>Welcome to the electrifying arena of Robosoccer, where human ingenuity and technological prowess collide in a spectacular display of robotic athleticism. Witness the future of sports as state-of-the-art robots take center stage, showcasing their agility, precision, and strategic brilliance.  It&apos;se a thrilling fusion of cutting-edge engineering and the beautiful game of soccer.</p>
					</div>
					<div className=' mt-4 '>
          <Image src={soccer} alt='jai' className='  sm:min-w-[450px] sm:min-h-[420px] '/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col sm:flex-row sm:max-h-xl'>
					<div className='sm:max-w-[50%]  '>
						<h1 className='text-center text-pm-color font-black  text-2xl'>ROBOSOCCER</h1>
						<p className='sm:text-left font-semibold max-w-[90%] pt-2 m-auto text-center text-lg'>Welcome to the electrifying arena of Robosoccer, where human ingenuity and technological prowess collide in a spectacular display of robotic athleticism. Witness the future of sports as state-of-the-art robots take center stage, showcasing their agility, precision, and strategic brilliance.  It&apos;se a thrilling fusion of cutting-edge engineering and the beautiful game of soccer.</p>
					</div>
					<div className=' mt-4 '>
          <Image src={soccer} alt='jai' className='  sm:min-w-[450px] sm:min-h-[420px] '/>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col sm:flex-row sm:max-h-xl'>
					<div className='sm:max-w-[50%]  '>
						<h1 className='text-center text-pm-color font-black  text-2xl'>ROBOSOCCER</h1>
						<p className='sm:text-left font-semibold max-w-[90%] pt-2 m-auto text-center text-lg'>Welcome to the electrifying arena of Robosoccer, where human ingenuity and technological prowess collide in a spectacular display of robotic athleticism. Witness the future of sports as state-of-the-art robots take center stage, showcasing their agility, precision, and strategic brilliance.  It&apos;se a thrilling fusion of cutting-edge engineering and the beautiful game of soccer.</p>
					</div>
					<div className=' mt-4 '>
          <Image src={soccer} alt='jai' className='  sm:min-w-[450px] sm:min-h-[420px] '/>
					</div>
				</div>
			</Carousel>
			</div>
		);
	}
};
