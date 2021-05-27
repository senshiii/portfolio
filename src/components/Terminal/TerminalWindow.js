import Terminal from "terminal-in-react";

const TerminalWindow = ({ toggleTerminal }) => {
  const commands = {
    greet: (name) => "Hello" + name,
  };

  const actionHandlers = {
    handleClose: () => {
      toggleTerminal()
    }
  };

  return (
    <div className="terminal-wrapper">
      <div className="terminal-backdrop">
        <Terminal
          commands={commands}
					actionHandlers={actionHandlers}
          color="#20C20E"
          allowTabs={false}
          promptSymbol="~  "
          msg="Welcome to the Terminal. Here is a list of useful commands. 1. contact 2. resume 3. goto"
          barColor="#111"
          style={{ width: "100%", height: "65%", fontSize: "1.2em" }}
        />
      </div>
    </div>
  );
};

export default TerminalWindow;
