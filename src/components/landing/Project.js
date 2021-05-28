import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ClassroomPic from '../../assets/images/classroom.JPG';
import Picturesque from '../../assets/images/Picturesque.JPG';
import Kovi from '../../assets/images/kovi.JPG';
import Spam from '../../assets/images/Spam.JPG';

const Project = () => {
	return (
		<section className="projects" id="projects">
			<h1>
				These are the best things that <br /> my weekends have produced
			</h1>

			<div className="project-wrapper">
				<div className="demo">
					<div className="laptop">
						<img src={ClassroomPic} alt="Classroom Project - Sayan Das Portfolio" />
					</div>
					<div className="mobile-pic">
						<img src={ClassroomPic} alt="Classroom Project - Sayan Das Portfolio" />
					</div>
				</div>
				<div className="info">
					<h1 className="project-title">Classroom App</h1>
					<p className="project-description">
						The past year has taught us the importance of Online Classrooms and Teaching. This website
						provides you with the opportunity to conduct and attend classes in one place. You can join and
						teach in infinite number of classes and manage all your notes and lecture resources in one
						place.
					</p>
					<p>
						<span>Domain</span> : FullStack Development
					</p>
					<p>
						<span>Technologies</span> : Node.Js, Express.Js, Mongo DB, Mongoose ORM, AWS S3, React.Js, React
						Router, Redux.Js. Redux Thunk
					</p>
					<div className="actions">
						<a href="https://classroom-new.firebaseapp.com/" target="_blank" rel="noreferrer">
							Open Project&nbsp;<FontAwesomeIcon icon="external-link-alt" />
						</a>
						<a href="https://github.com/senshiii/Classroom" target="_blank" rel="noreferrer">
							View Github&nbsp;<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
						</a>
					</div>
				</div>
			</div>

			<div className="project-wrapper">
				<div className="demo">
					<div className="laptop">
						<img src={Kovi} alt="Kovi Covid Assistant - Sayan Das Project" />
					</div>
					<div className="mobile-pic">
						<img src={Kovi} alt="Kovi Covid Assistant - Sayan Das Project" />
					</div>
				</div>
				<div className="info">
					<h1 className="project-title">Kovi - Covid Assistant</h1>
					<p className="project-description">
						In these times of fake news regarding corona virus , KOVI is here to guide you with the dos and
						dont's and keep you updated regarding everything COVID-19. KOVI is a interactive AI driven chat
						bot which can answer any FAQ related to covid-19 , search through news tailored towards
						relevance with covid-19 and give live stats of all countries. All the information is up to date
						and the faq section is powered by the CDC,USA website on COVID-19.
					</p>
					<p>
						<span>Domain</span> : FullStack Development, Natural Language Understanding
					</p>
					<p>
						<span>Teammate</span> : &nbsp;
						<a href="https://github.com/kindler-king" target="_blank" rel="noreferrer">
							Arya Sarkar
						</a>
					</p>
					<p>
						<span>Technologies</span> : Node.Js, Express.Js React.Js, React Router, RASA NLU
					</p>
					<div className="actions">
						<a href="https://www.youtube.com/watch?v=Ycd8BHb_imk" target="_blank" rel="noreferrer">
							Watch in YouTube&nbsp;<FontAwesomeIcon icon={[ 'fab', 'youtube' ]} />
						</a>
						<a href="https://github.com/senshiii/Picturesque-frontend" target="_blank" rel="noreferrer">
							View Github&nbsp;<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
						</a>
					</div>
				</div>
			</div>

			<div className="project-wrapper">
				<div className="demo">
					<div className="laptop">
						<img src={Spam} alt="NLP Spam Classification - Sayan Das" />
					</div>
					<div className="mobile-pic">
						<img src={Spam} alt="NLP Spam Classification - Sayan Das" />
					</div>
				</div>
				<div className="info">
					<h1 className="project-title">NLP Spam Classification</h1>
					<p className="project-description">
						Determines whether a passage of text ( mostly an email ) is spam or not. This model uses TfIdf
						for Text Preprocessing and Support Vector Classifier for the classification model.
					</p>
					<p>
						<span>Domain</span> : Natural Language Processing
					</p>
					<p>
						<span>Technologies</span> : Python
					</p>
					<div className="actions">
						<a
							href="https://colab.research.google.com/github/senshiii/NLP-Spam-Classifier/blob/main/NLP_Spam_Classification.ipynb"
							target="_blank"
							rel="noreferrer"
						>
							Open in Google Collab&nbsp;<FontAwesomeIcon icon="external-link-alt" />
						</a>
						<a href="https://github.com/senshiii/Picturesque-frontend" target="_blank" rel="noreferrer">
							View Github&nbsp;<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
						</a>
					</div>
				</div>
			</div>

			<div className="project-wrapper">
				<div className="demo">
					<div className="laptop">
						<img src={Picturesque} alt="Picturesque Project - Sayan Das Portfolio" />
					</div>
					<div className="mobile-pic">
						<img src={Picturesque} alt="Picturesque Project - Sayan Das Portfolio" />
					</div>
				</div>
				<div className="info">
					<h1 className="project-title">Picturesque</h1>
					<p className="project-description">
						A Gallery of Images. You can call this a stock image website. Users can upload images that can
						be viewed by other users. Users can associate tags to the images so that other users can search
						using these tags. Users also get private image storage
					</p>
					<p>
						<span>Domain</span> : FullStack Development
					</p>
					<p>
						<span>Technologies</span> : Node.Js, Express.Js, Mongo DB, Mongoose ORM, Firebase, React.Js,
						React Router, Redux.Js. Redux Thunk
					</p>
					<div className="actions">
						<a href="https://picturesque-4a060.firebaseapp.com/" target="_blank" rel="noreferrer">
							Open Project&nbsp;<FontAwesomeIcon icon="external-link-alt" />
						</a>
						<a href="https://github.com/senshiii/Picturesque-frontend" target="_blank" rel="noreferrer">
							View Github&nbsp;<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
