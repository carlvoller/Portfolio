import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "styles/index.module.scss";

function Index() {

    return (<div className={styles.pageHolder}>
        <div className={styles.bgBigText}>
            <div className={styles.texts}>
                <div>
                    <h1>Hello!</h1>
                </div>
                <div>
                    <h1>I am</h1>
                </div>
                <div>
                    <h1>Carl Voller</h1>
                </div>
                <h3>I make pretty cool websites</h3>
                <FontAwesomeIcon className="hover" icon={["fab", "instagram"]} />
                <FontAwesomeIcon className="hover" icon={["fab", "linkedin"]} />
                <FontAwesomeIcon className="hover" icon={["far", "envelope"]} />
            </div>
            <div className={[styles.img].join(" ")} style={{ backgroundImage: "url(/assets/me.png)" }}>
                <div className={["hover", styles.hoverZone].join(" ")}></div>
            </div>
        </div>
    </div>);
}



export default Index;