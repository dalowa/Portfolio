import './../styles/NavBar.css';
import Logo from './Logo';
import { useState } from 'react';
const NavBar = () => {
	const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
	const [menu_class, setMenuClass] = useState('menu hidden');
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	// toggle burger menu change
	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('burger-bar clicked');
			setMenuClass('menu visible');
		} else {
			setBurgerClass('burger-bar unclicked');
			setMenuClass('menu hidden');
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
				<ul>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Experience</a>
					</li>
					<li>
						<a>Work</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
					<li>
						<a></a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
