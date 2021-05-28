import { useState } from 'react';
import Terminal from 'terminal-in-react';

import Resume from '../../assets/files/Resume.pdf';

const TerminalWindow = ({ toggleTerminal }) => {
	const [ termColor, setTermColor ] = useState('green');

	const colors = {
		white: '#fff',
		green: '#20C20E',
		blue: '#073da3',
		red: 'red',
		cyan: 'cyan',
		purple: 'purple'
	};

	const lsList = [ '/projects', '/work', '/contact' ];

	const commands = {
		ls: (args, print, _) => {
			console.log(args);
			print('/work /projects /contact');
		},
		cls: (_, __, runCommand) => runCommand('clear'),
		hello: () =>
			'Hello. I am Sayan. Welcome to my Portfolio site. Nice to meet you. Type contact in order to contact with me.',
		hi: () =>
			'Hello. I am Sayan. Welcome to my Portfolio site. Nice to meet you. Type contact in order to contact with me.',
		color: (args, print) => {
			if (args.length === 1) {
				print('Error: Missing Argument\nType color --help to know more about the command');
			} else if (args.length > 2) {
				print('Error: Too many arguments\nType color --help to know more about the command');
			} else {
				if (args[1] === '--help') {
					let colorText = 'Available Colors\n';
					for (let color of Object.keys(colors)) colorText += `${color}\n`;
					colorText += "Use command 'color color-name' to change color";
					print(colorText);
				} else if (!Object.keys(colors).includes(args[1])) {
					print('Invalid color\nType color --help to list all colors');
				} else {
					setTermColor((_) => args[1]);
				}
			}
		},
		'download-resume': () => {
			var a = document.createElement('A');
			a.style.display = 'none';
			a.href = Resume;
			a.download = 'Resume-Sayan Das';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		},
		contact: (args, print) => {
			if (args.length === 1) {
				print('email: sayand031999@gmail.com\nType contact --compose to compose a mail for me');
			} else if (args.length > 2) {
				print('Error: Too many errors');
			} else {
				if (args[1] === '--help') {
					print(
						'Type contact to view contact details\n\nOptions:\n--compose: to compose and send me an email'
					);
				} else if (args[1] !== '--compose') {
					print('Error: Invalid Command\nType contact --compose to compose a mail for me');
				} else {
					window.open('mailto:sayand031999@gmail.com', '_blank');
				}
			}
		},
		cd: (args, print, runCommand) => {
			if (args.length === 1) {
				runCommand('cd --help');
			} else if (args.length > 2) {
				print('Error: Too many commands. Type cd --help to get info');
			} else {
				if (args[1] === '--help' || args[1] === '-h') {
					print(
						'Takes you to a particular section of the website\nUsage:cd section_name\n\nOptions:\n--help, -h: Get information about the command\n\nType command "ls" to list all sections of websiete'
					);
				} else if (args[1] === '/resume') {
					print('Use command "download-resume" to download my resume. Thank you 😁');
				} else if (!lsList.includes(args[1])) {
					print(`Section ${args[1]} could not be found.\n\nType cd --help to know more`);
				} else {
					window.location.href = window.location.href + `#${args[1].substring(1)}`;
				}
			}
		},
		exit: () => toggleTerminal()
	};

	const descriptions = {
		hi: false,
		cls: false,
		show: 'show Welcome Message',
		color: 'list and change text color',
		hello: 'greeting',
		ls: 'lists all the sections of the page',
		'download-resume': 'Download My Resume',
		contact: 'show contact info',
		exit: 'exit from terminal'
	};

	const actionHandlers = {
		handleClose: () => {
			toggleTerminal();
		}
	};

	return (
		<div className="terminal-wrapper">
			<div className="terminal-backdrop">
				<Terminal
					commands={commands}
					actionHandlers={actionHandlers}
					descriptions={descriptions}
					color={colors[termColor]}
					prompt={colors[termColor]}
					allowTabs={false}
					promptSymbol="~  "
					msg="Welcome to the Terminal. Type help to list commands"
					barColor="#111"
					style={{ width: '100%', height: '65%', fontSize: '1.35rem' }}
				/>
			</div>
		</div>
	);
};

export default TerminalWindow;
