import { useRef, useEffect } from 'react';

import Resume from '../../assets/files/Resume.pdf'

const Navbar = () => {
	const navbarRef = useRef();

	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			console.log('Body Scroll Top', document.body.scrollTop);
			console.log('Client Height', navbarRef.current.clientHeight);
			if (document.body.scrollTop > navbarRef.current.clientHeight) {
				navbarRef.current.classList.add('navbar-scrolled');
			} else {
				navbarRef.current.classList.remove('navbar-scrolled');
			}
		});
	});

	return (
		<nav ref={navbarRef} className="navbar" id="navbar">
			<a href="/" className="nav-brand">
				Sayan Das
			</a>
			<div className="nav-link">
				<a href="#projects">/Projects</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a href="#work">/Work</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a href="#contact">/Contact</a>
				<div className="nav-border" />
			</div>
			<div className="nav-link">
				<a download href={Resume}>
					/Resume
				</a>
				<div className="nav-border" />
			</div>
		</nav>
	);
};

export default Navbar;
