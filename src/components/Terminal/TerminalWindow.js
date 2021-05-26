import Winbox from 'winbox-react';
import Terminal from 'terminal-in-react';

const TerminalWindow = () => {
	return (
		<Winbox title="Terminal" background="rgba(0,0,0,.8)" color="#20C20E" x="center" y="center" modal={false}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh'
				}}
			>
				<Terminal
					color="green"
          hideTopBar
					backgroundColor="black"
					barColor="black"
          commands={{ greet: () => "Hello World" }}
					style={{ fontWeight: 'bold', fontSize: '1em'}}
					msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
				/>
			</div>
		</Winbox>
	);
};

export default TerminalWindow;
