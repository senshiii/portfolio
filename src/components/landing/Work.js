import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { work } from '../../assets/files/data';

const Work = () => {
	const workExpRef = useRef();
	const [ currentWork, setCurrentWork ] = useState(0);
	const [ isWorkFullscreen, setIsWorkFullscreen ] = useState(false);

	useEffect(
		() => {
			if (workExpRef.current.exitFullscreen) console.log('Fullscreen Element');
			if (workExpRef.current.webkitFullscreenElement) console.log('Fullscreen Element');
			if (workExpRef.current.msFullscreenElement) console.log('Fullscreen Element');
		},
		[ workExpRef ]
	);

	return (
		<section className="work" id="work">
			<div className="work-folder" ref={workExpRef}>
				<div className="folder-header">
					<h3>My Work Experiences</h3>
					{isWorkFullscreen ? (
						<FontAwesomeIcon
							icon="compress"
							data-tip="Exit Fullscreen"
							onClick={() => {
								if (workExpRef.current.fullscreenElement) {
									workExpRef.current.exitFullscreen();
								} else if (workExpRef.current.webkitFullscreenElement) {
									/* Safari */
									workExpRef.current.webkitExitFullscreen();
								} else if (workExpRef.current.msFullscreenElement) {
									/* IE11 */
									workExpRef.current.msExitFullscreen();
								}
								setIsWorkFullscreen(false);
							}}
							className="folder-header-expand"
						/>
					) : (
						<FontAwesomeIcon
							data-tip="View in Fullscreen"
							icon="expand"
							onClick={() => {
								if (workExpRef.current.requestFullscreen) {
									workExpRef.current.requestFullscreen();
								} else if (workExpRef.current.webkitRequestFullscreen) {
									/* Safari */
									workExpRef.current.webkitRequestFullscreen();
								} else if (workExpRef.current.msRequestFullscreen) {
									/* IE11 */
									workExpRef.current.msRequestFullscreen();
								}
								setIsWorkFullscreen((_) => true);
							}}
							className="folder-header-expand"
						/>
					)}
				</div>
				<div className="folder-body">
					<div className="tree">
						<p style={{ marginRight: '1.2rem' }}>
							<FontAwesomeIcon icon="folder" style={{ fontSize: '1.2rem', color: '#000' }} />
						</p>
						<div className="tree-line" />
						<div className="company-list">
							{work.map((w, index) => (
								<h3
									className={currentWork === index ? 'selected' : ''}
									key={index}
									onClick={() => setCurrentWork(index)}
								>
									<span className="bar" /> {w.companyName}
								</h3>
							))}
						</div>
					</div>

					<div className="work-info">
						<h1>{work[currentWork].role}</h1>
						<p>
							<FontAwesomeIcon icon="laptop-code" />
							&nbsp; Job Type : {work[currentWork].roleType}
						</p>
						<p>
							<FontAwesomeIcon icon="calendar" />
							&nbsp; Calendar : {work[currentWork].calendar}
						</p>
						<p>
							<FontAwesomeIcon icon={[ 'far', 'clock' ]} />
							&nbsp; Duration : {work[currentWork].duration}
						</p>
						<hr className="divider" />
						<h3>Responsibilities : </h3>
						<ul>{work[currentWork].responsibilities.map((res, index) => <li key={index}>{res}</li>)}</ul>
						<br />
						<h3>Technologies : </h3>
						<div className="tech-wrapper">
							{work[currentWork].technologies.map((tech, index) => (
								<div className="tech" key={index}>
									<p>{tech}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="work-mobile">
				<h2>My Work Experiences</h2>
				<div className="works-wrapper">{work.map((w, index) => <WorkMobile work={w} key={index} />)}</div>
			</div>
		</section>
	);
};

const WorkMobile = ({ work }) => {
	const workRef = useRef();
	return (
		<div className="work-folder" ref={workRef}>
			<div className="folder-header">
				<h3>{work.companyName}</h3>
				<FontAwesomeIcon
					icon="expand"
					data-tip="Exit Fullscreen"
					onClick={() => {
						if (workRef.current.requestFullscreen) {
							workRef.current.requestFullscreen();
						} else if (workRef.current.webkitRequestFullscreen) {
							/* Safari */
							workRef.current.webkitRequestFullscreen();
						} else if (workRef.current.msRequestFullscreen) {
							/* IE11 */
							workRef.current.msRequestFullscreen();
						}
					}}
					className="folder-header-expand"
				/>
			</div>
			<div className="folder-body">
				<div className="work-info">
					<h1>{work.role}</h1>
					<p>
						<FontAwesomeIcon icon="laptop-code" />
						&nbsp; Job Type : {work.roleType}
					</p>
					<p>
						<FontAwesomeIcon icon="calendar" />
						&nbsp; Calendar : {work.calendar}
					</p>
					<p>
						<FontAwesomeIcon icon={[ 'far', 'clock' ]} />
						&nbsp; Duration : {work.duration}
					</p>
					<hr className="divider" />
					<h3>Responsibilities : </h3>
					<ul>{work.responsibilities.map((res, index) => <li key={index}>{res}</li>)}</ul>
					<br />
					<h3>Technologies : </h3>
					<div className="tech-wrapper">
						{work.technologies.map((tech, index) => (
							<div className="tech" key={index}>
								<p>{tech}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
