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
			</nav>

			<div className={menu_class}>
				<div className='burger-menu' onClick={updateMenu}>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
				</div>
				<ul className={luclass}>
					<li>
						<p>01.</p>
						<a href='#about'>About</a>
					</li>

					<li>
						<p>02.</p>
						<a href='#work'>Work</a>
					</li>
					<li>
						<p>03.</p>
						<a href='#contact'>Contact</a>
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
