import React from "react";
import styles from "../../styles/index.module.scss";

export default function Experience() {

    return (<>
        <div
            className={`slideUpContainer ${styles.section}`}
            style={{
                backgroundColor: "#FDF8ED",
                height: "100%",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                color: "black"
            }}>
            <div
                style={{
                    width: "80%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className={styles.fixed}>
                <h1 className={styles.bgBigText}>
                    <span className="slideUp">Experience</span>
                </h1>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: "-webkit-fill-available", padding: "80px 0 " }}>
                        <div style={{ background: "black", borderRadius: "100%", width: 20, height: 20 }} />
                        <div style={{ border: "2px dotted black", width: 0, flex: 1, height: "100%" }} />
                        <div style={{ background: "black", borderRadius: "100%", width: 20, height: 20 }} />
                        <div style={{ border: "2px dotted black", width: 0, flex: 1, height: "100%" }} />
                        <div style={{ background: "black", borderRadius: "100%", width: 20, height: 20 }} />
                        {/* <div style={{ border: "2px dotted black", width: 0, flex: 1, height: "100%" }} /> */}
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        letterSpacing: 1,
                        marginLeft: 40
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "20px 0"
                        }}>
                            <h1 style={{ fontSize: "150%" }}>Co-Founder and Head Developer, CodeCollab</h1>
                            <span>September 2017 - Present</span>
                            <span style={{ margin: "10px 0" }}>Created CodeCollab (<a href="https://codecollab.io">https://codecollab.io</a>), a collaborative code editor and compiler that allows users to test and run code in an online real-time environment. Think of it like a Google Docs but for code. In charge of leading the development team, developing the main product, designing most of the User Interface and handling Marketing Presentations.</span>
                            <span><u>Tech Skills:</u> NextJS, Docker, Golang, NodeJS, Google Cloud Platform</span>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "20px 0"
                        }}>
                            <h1 style={{ fontSize: "150%" }}>Programming Instructor, Tinkercademy</h1>
                            <span>June 2021 - Present</span>
                            <span style={{ marginTop: 10 }}>Instructor for Primary, Secondary and Junior College schools in the following topics:</span>
                            <ul style={{ margin: "10px 0" }}>
                                <li>Web Development with HTML, CSS and JS</li>
                                <li>Unity Game Development</li>
                                <li>iOS Development with Swift</li>
                                <li>Cross-Platform Development with React Native</li>
                                <li>Micro Controllers with Micro-bits and M5GOs</li>
                            </ul>
                            <span><u>Tech Skills:</u> HTML, CSS, JavaScript, Unity (Bolt), Swift, React Native</span>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "20px 0"
                        }}>
                            <h1 style={{ fontSize: "150%" }}>Technical Officer, Ministry of Education, Singapore</h1>
                            <span>March 2022 - June 2022</span>
                            <span style={{ margin: "10px 0" }}>Web Developer under the Flexi-Relief Technical Officer (HQ) scheme.</span>
                            <span>Developed web-based tools to help MOE Teachers build dynamic simulations of science experiments for the Student Learning Space (SLS) without needing any prior programming knowledge.</span>
                            <span style={{ marginTop: 10 }}><u>Tech Skills:</u> NextJS, Typescript</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>);

}