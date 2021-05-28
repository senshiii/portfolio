import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';

const TerminalMenu = ({ toggleTerminal }) => {
	return (
		<div className="terminal-menu">
			<ReactTooltip effect="solid" place="right" />
			<p
				data-tip="Open Terminal"
				onClick={toggleTerminal}
				id="terminal-toggle"
				className="terminal-toggle"
			>
				<FontAwesomeIcon icon="terminal" />
			</p>
		</div>
	);
};

export default TerminalMenu;
