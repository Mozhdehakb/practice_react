import React, { useState, useEffect } from "react";
import {
  actionsState,
  optionsState,
  penColorState,
  penSizeState,
} from "./initialStates/initialStates";

import Header from "./components/header/header";
import useMousePosition from "./components/footer/footer";

function App() {
  const [actions, setActions] = useState(actionsState);
  const [penColor, setPenColor] = useState(penColorState);
  const [options, setOptions] = useState(optionsState);
  const { posX, posY } = useMousePosition();
  useEffect(() => { });

  const changeActiveHandler = (id) => {
    const cloneActions = [...actions];
    cloneActions.forEach((item) => (item.action = false));

    cloneActions.forEach((item) => {
      if (item.id == id) item.action = true;
    });

    setActions(cloneActions);
  };

  const changeColorHandler = () => { };

  return (
    <>
      <Header
        actions={actions}
        options={options}
        changeColor={changeColorHandler}
        changeActiveHandler={changeActiveHandler}
      />
      <footer className="Footer">
        <h2 className=" h2">{`X : ${posX}`}</h2>
        <h2 className=" h2">{`Y : ${posY}`}</h2>
      </footer>
    </>
  );
}

export default App;
