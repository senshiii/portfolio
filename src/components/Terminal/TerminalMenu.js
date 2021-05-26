import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TerminalMenu = ({ toggleTerminal }) => {
	return (
		<div className="terminal-menu">
			<p onClick={toggleTerminal} title="Termianl Menu" id="terminal-toggle" className="terminal-toggle">
				<FontAwesomeIcon icon="terminal" />
			</p>
		</div>
	);
};

export default TerminalMenu;
