import { Fragment, useState } from "react";
import TerminalMenu from "./TerminalMenu";
import TerminalWindow from "./TerminalWindow";

const Terminal = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <Fragment>
      <TerminalMenu
        toggleTerminal={() => setTerminalOpen((prevState) => !prevState)}
      />
      {terminalOpen && (
        <TerminalWindow
          toggleTerminal={() => setTerminalOpen((prevState) => !prevState)}
        />
      )}
    </Fragment>
  );
};

export default Terminal;
