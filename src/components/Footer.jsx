import './../styles/Footer.css';
import GitHubIcon from './Icons/GitHubIcon';
import TwitterIcon from './Icons/TwitterIcon';
import InstagramIcon from './Icons/InstagramIcon';
import LinkedinIcon from './Icons/LinkedinIcon';

const Footer = () => {
	return (
		<>
			<footer>
				<ul>
					<li>
						<GitHubIcon Link='https://www.duolingo.com/learn' Class='TheIcon' />
					</li>
					<li>
						<InstagramIcon />
					</li>
					<li>
						<TwitterIcon />
					</li>
					<li>
						<LinkedinIcon />
					</li>
					<li className='footer-div'>
						<div className='footer-palo'></div>
					</li>
				</ul>
				<p>
					Design based on the work of
					<a href='https://brittanychiang.com/'>Brittany Chiang</a> and built by
					David Urbano
				</p>
				<div className='TheEmail-container'>
					<span></span>
					<p>david.urbano.code@gmail.com</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
