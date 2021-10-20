import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Index from 'pages';

import styles from "./index.module.scss";

function App() {

  const [cords, setCords] = useState({ x: window.innerWidth/2, y: window.innerHeight/2 });
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {

    let mousemove = (e: any) => {
      //setCords({ x: e.x, y: e.y });


      ["cursor1", "cursor2"].forEach((id) => {
        document.getElementById(id)!.style.left = e.x-30+"px";
        document.getElementById(id)!.style.top = e.y-30+"px";
      })
      setOnHover(["A"].indexOf(e.target.nodeName) >= 0 || Array.from(e.target.classList).indexOf("hover") >= 0);
    }

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    }
  }, []);

  return (<>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
    <div id="cursor1" className={[styles.cursor, onHover ? styles.cursorHover : ""].join(" ")} />
    <div id="cursor2" className={[styles.cursor2, onHover ? styles.cursor2Hover : ""].join(" ")} />
  </>);
}

export default App;
