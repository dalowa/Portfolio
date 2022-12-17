import './../styles/AboutMeS.css';

const AboutMeS = () => {
	return (
		<>
			<section className='AboutMeS-container'>
				<div className='AboutMeS-text'>
					<h2>About Me</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
						dolor felis. Ut semper leo vitae fringilla ultricies. Sed rhoncus
						orci non sapien eleifend, non laoreet mi viverra. Aenean vel
						pellentesque felis.
					</p>
					<span>
						Here are a few technologies I’ve been working with recently:
					</span>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript (ES6+)</li>
						<li>React</li>
						<li>Redux</li>
					</ul>
				</div>
				<div className='AboutMeS-image-container'>
					<div className='AboutMeS-image-capa'>
						<img
							src='https://raw.githubusercontent.com/David-UM/Portfolio/main/src/assets/2022Profile.jpeg'
							alt='Foto'
						/>
						<div></div>
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutMeS;
