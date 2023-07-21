import Image from 'next/image';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import team from '@/public/team.png'
import soccer from '@/public/soccer.png'
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className='max-w-5xl max-h-xl m-auto mt-10 bg-white shadow-bg backdrop-filter backdrop-blur-sm bg-opacity-10'>
			<Carousel>
				<div className='flex justify-between '>
					<div className='max-w-[55%] mt-[3%] ml-[5%]'>
						<h1 className='text-center text-pm-color font-black text-2xl'>ROBOSOCCER</h1>
				<p className='text-left font-black text-lg'>Welcome to the electrifying arena of Robosoccer, where human ingenuity and technological prowess collide in a spectacular display of robotic athleticism. Witness the future of sports as state-of-the-art robots take center stage, showcasing their agility, precision, and strategic brilliance. It's a thrilling fusion of cutting-edge engineering and the beautiful game of soccer.</p>
					</div>
					<div className='max-w-52'>
          <Image src={soccer} alt='jai' className='max-h-[400px]'/>
					</div>
				</div>
				<div>
        <Image src={team} alt='jai'/>

				</div>
				<div>
        <Image src={team} alt='jai'/>

				</div>
				<div>
        <Image src={team} alt='jai'/>

				</div>
				<div>
        <Image src={team} alt='jai'/>

				</div>
			</Carousel>
			</div>
		);
	}
};
