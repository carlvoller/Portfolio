import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Index from 'pages';

import styles from "./index.module.scss";

function App() {

  const [cords, setCords] = useState({ x: window.innerWidth/2, y: window.innerHeight/2 });
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e: any) => {
      setCords({ x: e.x, y: e.y });
      setOnHover(e.target.nodeName === "A");
    });
  }, []);

  return (<>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
    <div className={[styles.cursor, onHover ? styles.cursorHover : ""].join(" ")} style={{ left: cords.x - 30, top: cords.y - 30 }} />
    <div className={[styles.cursor2, onHover ? styles.cursor2Hover : ""].join(" ")} style={{ left: cords.x - 30, top: cords.y - 30 }} />
  </>);
}

export default App;
