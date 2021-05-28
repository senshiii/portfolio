import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Resume from '../../assets/files/Resume.pdf';

const Navbar = () => {
	const navbarRef = useRef();
	const [ toggleMobileMenu, setToggleMobileMenu ] = useState(false);

	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			if (document.body.scrollTop > navbarRef.current.clientHeight) {
				navbarRef.current.classList.add('navbar-scrolled');
			} else {
				navbarRef.current.classList.remove('navbar-scrolled');
			}
		});
	});

	return (
		<nav ref={navbarRef} className="navbar" id="navbar">
			<p className="nav-menu-trigger" onClick={() => setToggleMobileMenu(true)}>
				<FontAwesomeIcon icon="hamburger" />
			</p>
			<div className={toggleMobileMenu ? 'nav-mobile-wrapper show' : 'nav-mobile-wrapper'}>
				<a href="#work">/work</a>
				<a href="#projects">/projects</a>
				<a href="#blogs">/blogs</a>
				<a href="#contact">/contact</a>
				<a href={Resume} download="Resume-Sayan Das">
					/resume
				</a>
				<FontAwesomeIcon icon={[ 'far', 'times-circle' ]} onClick={() => setToggleMobileMenu(false)} />
			</div>
			<a href="/" className="nav-brand">
				Sayan Das
			</a>
			<div className="nav-link">
				<a href="#projects">/projects</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a href="#work">/work</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a href="#work">/blogs</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a href="#contact">/contact</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a download="Resume-Sayan Das" href={Resume}>
					/resume
				</a>
				<div className="nav-border" />
			</div>
		</nav>
	);
};

export default Navbar;
