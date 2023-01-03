import React from "react";
import styles from "../../styles/index.module.scss";

export default function Intro() {

    return (<>
        <div
            className={`slideUpContainer ${styles.section}`}
            style={{
                backgroundColor: "#222",
                height: "100%",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                color: "white"
            }}>
            <div
                style={{
                    width: "60%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className={styles.fixed}>
                <div
                    className="hover"
                    style={{
                        width: "100%",
                        height: "30%",
                        backgroundImage: `url("/assets/realme.png")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderRadius: 20,
                        boxShadow: "0px 5px 5px #666",
                        marginBottom: 15
                    }} />
                <h1 className={styles.bgBigText}>
                    <span className="slideUp">Nice to meet you!</span>
                </h1>
                <h3 style={{ textAlign: 'center' }}>
                    <span className="slideUp" style={{ letterSpacing: 1, fontWeight: "normal", textAlign: "center" }}>
                        I'm a iOS/Web Developer and Designer currently based in Singapore. I currently develop apps for <b>Tinkertanker</b>, focusing primarily on iPadOS and iOS apps. I also teach introductory computer science concepts to local primary, secondary and junior college students, focusing primarily on Python, introductory to intermediate web development, and mobile development with React Native and Swift.
                    </span>
                </h3>
                <h3 style={{ textAlign: 'center' }}>
                    <span className="slideUp" style={{ letterSpacing: 1, fontWeight: "normal", textAlign: "center" }}>
                        I first began my career with a start-up I founded called <b>CodeCollab</b>. I was the lead developer of organisation, with responsibilities ranging from the front-end platforms, backend APIs and scaling our infrastructure using Cloud Services and DevOps pipelines.
                    </span>
                </h3>

            </div>

        </div>
    </>);

}