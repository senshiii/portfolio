import { Fragment, useEffect, useRef } from 'react';
import TypeIt from 'typeit-react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from './components/Layout/Navbar';


import DP from './assets/images/pic.jpg';
import Terminal from './components/Terminal/Terminal';
import Work from './components/landing/Work';
import Project from './components/landing/Project';

const App = () => {
	const scrollRef = useRef();
	

	useEffect(() => {
		document.body.addEventListener('scroll', () => {
			if (document.body.scrollTop > 0) {
				scrollRef.current.style.display = 'none';
			} else {
				scrollRef.current.style.display = 'inline';
			}
		});
	}, []);

	return (
		<Fragment>
			<ReactTooltip place="top" effect="solid" />
			<Navbar />
			<Terminal />

			<section className="home_banner">
				<div className="backdrop">
					<div className="left" />
				</div>

				<div className="headshot">
					<img src={DP} alt="Sayan Das" />
				</div>
				<h1>
					Hello World ! I am <span className="green-text">Sayan Das</span>{' '}
				</h1>
				<br />
				<TypeIt
					element={'h1'}
					options={{ speed: 85, delay: 850, strings: 'I am a ' }}
					style={{ width: '75%' }}
					getBeforeInit={(instance) => {
						instance
							.type('<span class="green-text">Web Developer</span>')
							.pause(750)
							.delete(13, { speed: 100 })
							.type('<span class="green-text">Competitive Coder</span>')
							.pause(750)
							.delete(17, { speed: 100 })
							.type('<span class="green-text">Blogger</span>')
							.pause(750)
							.delete()
							.type('Nice to Meet <span class="green-text" >You</span> !! : )')
							.go();
						return instance;
					}}
				/>

				<div className="icons">
					<a target="_blank" rel="noreferrer" href="https://www.google.com">
						<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.google.com">
						<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
					</a>
					<a target="_blank" rel="noreferrer" href="https://sayand031999.medium.com/">
						<FontAwesomeIcon icon={[ 'fab', 'medium' ]} />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.google.com">
						<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
					</a>
				</div>

				<a
					href="#work"
					onClick={() => document.body.scrollTo(0, window.innerHeight)}
					className="go_down"
					ref={scrollRef}
				>
					Scroll Down <FontAwesomeIcon icon="chevron-down" />
				</a>
			</section>

      <Work />
			
      <Project />
			
		</Fragment>
	);
};

export default App;
