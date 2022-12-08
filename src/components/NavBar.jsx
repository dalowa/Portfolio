import './../styles/NavBar.css';
import Logo from './Logo';
import { useState } from 'react';
const NavBar = () => {
	const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
	const [menu_class, setMenuClass] = useState('menu hidden');
	const [luclass, setLuclass] = useState('noshow');
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	// toggle burger menu change
	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('burger-bar clicked');
			setLuclass('show');
			setMenuClass('menu visible');
		} else {
			setBurgerClass('burger-bar unclicked');
			setMenuClass('menu hidden');
			setLuclass('noshow');
		}
		setIsMenuClicked(!isMenuClicked);
	};
	return (
		<>
			<nav>
				<Logo></Logo>
				<div className='burger-menu' onClick={updateMenu}>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
				</div>
			</nav>

			<div className={menu_class}>
				<ul className={luclass}>
					<li>
						<p>01.</p>
						<a>About</a>
					</li>
					<li>
						<p>02.</p>
						<a>Experience</a>
					</li>
					<li>
						<p>03.</p>
						<a>Work</a>
					</li>
					<li>
						<p>04.</p>
						<a>Contact</a>
					</li>
					<li>
						<span>
							<a className='resume-link'>Resume</a>
						</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;