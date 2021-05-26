import { Fragment } from 'react';
import TypeIt from 'typeit-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from './components/Layout/Navbar';

import DP from './assets/images/pic.jpg';
import Terminal from './components/Terminal/Terminal';

const App = () => {
	return (
		<Fragment>
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
					<a target="_blank" rel="noreferrer" href="https://www.google.com">
						<FontAwesomeIcon icon={[ 'fab', 'medium' ]} />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.google.com">
						<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
					</a>
				</div>

				<a href="#more" className="go_down">
					Scroll Down <i className="fas fa-chevron-down" />
				</a>
			</section>

			<section className="work" id="word">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, perspiciatis ad nisi accusamus hic, autem
				nemo, expedita iure aut odio ipsam. Nostrum eaque delectus, placeat quis veritatis impedit nisi
				repellendus. Mollitia eveniet commodi explicabo minus a inventore nihil pariatur vitae deleniti culpa,
				quibusdam ullam necessitatibus voluptate officiis expedita obcaecati tempora distinctio. At pariatur
				rerum magnam laudantium, dignissimos quaerat ipsum quis? Quis, est doloribus. Iure, in! Reiciendis
				aliquid ratione eaque non fugiat sit aspernatur a modi obcaecati, error ipsam expedita facilis
				consequuntur. Rerum ex natus debitis voluptatibus aut totam soluta illo! Cum, sunt eligendi tempore id
				voluptatibus soluta quis laborum est unde incidunt fugiat quidem molestiae recusandae culpa quibusdam
				deserunt obcaecati dolore dolores perspiciatis asperiores officiis! Eos laborum alias debitis
				consequatur? Iste incidunt odio quibusdam quas voluptas impedit vel rerum eius, vitae illo id minima
				laborum! Excepturi id maiores dolorum ratione! Nostrum minima aut amet? Possimus minus temporibus
				voluptas dolor corrupti? Et corrupti quis eum sed eligendi deleniti earum at molestiae adipisci quod!
				Totam voluptas maiores natus architecto enim repudiandae in, dignissimos commodi nemo deleniti ea
				quibusdam, quasi magnam magni exercitationem. Veniam, dolorem tempora debitis adipisci veritatis est?
				Vitae mollitia ullam sunt, expedita delectus quos, ipsam nostrum nemo est animi ipsa nulla esse dolores
				quibusdam illum. Harum mollitia sit possimus at! Autem explicabo, modi eius reiciendis quo molestias
				praesentium necessitatibus ducimus, harum consectetur, omnis voluptatibus! Incidunt corporis rem quaerat
				fuga? Ipsam nisi dignissimos aut sunt iure? Fugit nisi quo quia alias. At molestiae quas excepturi
				dignissimos nobis odio vitae aliquam cum, dolores eveniet? Quidem molestias laborum cumque, cupiditate
				temporibus, optio placeat vero deserunt aperiam officia officiis quaerat necessitatibus libero sapiente
				totam! Obcaecati quisquam rerum soluta totam quibusdam! Sit facere assumenda quam odio consequatur
				accusantium veritatis rerum! Exercitationem deleniti maxime eius minima. Facilis, sunt? Iure provident
				nulla, recusandae deserunt ut ipsa ab?
			</section>
		</Fragment>
	);
};

export default App;
