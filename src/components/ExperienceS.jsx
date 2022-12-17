import './../styles/ExperienceS.css';
import { useState } from 'react';

const ExperienceS = () => {
	return (
		<>
			<section className='ExperienceS-container'>
				<div className='ExperienceS-div'>
					<h2>Where I've Worked</h2>
					<div className='Options'>
						<span className='Options-visible '>Freelancer</span>
						<span>Empty</span>
						<span>Empty</span>
					</div>
					<div className='ExperienceS-text Description-visible'>
						<h3>
							Front-End Dev<span></span>
						</h3>
						<p className='Experience-date'>November 2022 - Present</p>
						<ul>
							<li>
								Develop static sites for small businesses using technologies
								like HTML, CSS, JavaScript and React
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default ExperienceS;
