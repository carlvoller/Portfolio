import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "styles/index.module.scss";
import Intro from "./MainPage/intro";
import Experience from "./MainPage/experience";
import Projects from "./MainPage/projects";

function Index() {

    return (<div className={styles.pageHolder}>
        <div className={[styles.section, "slideUpContainer"].join(" ")}>
            <div className={[styles.bgBigText, styles.fixed].join(" ")}>
                <div className={styles.texts}>
                    <div>
                        <h1 className="slideUp">Hello!</h1>
                    </div>
                    <div>
                        <h1 className="slideUp">I am</h1>
                    </div>
                    <div>
                        <h1 className="slideUp">Carl Voller</h1>
                    </div>
                    <div>
                        <h3 className="slideUp">I make pretty cool apps and websites</h3>
                    </div>
                    <a href="https://instagram.com/carl_voller"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                    <a href="https://www.linkedin.com/in/carl-ian-voller/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                    <a href="mailto:carlvoller@codecollab.io"><FontAwesomeIcon icon={["far", "envelope"]} /></a>
                    <div>
                        <h3 onClick={() => window.open("/Carl Voller CV.pdf", "blank")} className="slideUp hover" style={{ fontSize: "20%", letterSpacing: 1.5, textDecoration: "underline" }}>Download my Resume</h3>
                    </div>
                </div>
                <div className={[styles.img].join(" ")} style={{ backgroundImage: "url(/assets/me.png)" }}>
                    <div className={["hover", styles.hoverZone].join(" ")}></div>
                </div>
            </div>
        </div>
        <Intro />
        <Experience />
        <Projects />
        {/*<div id="projects" className={[styles.section, styles.sectionTwo].join(" ")} style={{ backgroundColor: '#222', height: "530vw" }}>
            <div className={styles.fixed}>
                <div id="horizontalScrollingContainer" className={styles.scrollingContainer}>
                    <div style={{ display: 'flex' }}>
                        <div className={[styles.projectContainer, "slideUpContainer"].join(" ")}>
                            <div className={styles.texts}>
                                <a href="#projects">
                                    <div className="hover">
                                        <h1 className="slideUp">Some of</h1>
                                    </div>
                                    <div className="hover">
                                        <h1 className="slideUp">my</h1>
                                    </div>
                                    <div className="hover">
                                        <h1 className="slideUp">work</h1>
                                    </div>
                                </a>
                                <div>
                                    <h3 className="slideUp">Projects I work on professionally</h3>
                                </div>
                            </div>
                        </div>
                        <div id="codecollab" className={[styles.projectContainer, styles.codecollab, "slideUpContainer"].join(" ")} style={{ backgroundImage: `url(/assets/codecollab-stripe.svg)`}}>
                            <div className={styles.texts}>
                                <a href="https://codecollab.io" target="_blank" rel="noreferrer">
                                    <div className="hover">
                                        <h1 className="slideUp">Code<br />Collab</h1>
                                    </div>
                                </a>
                                <div className="slideUp">
                                    <h3>Role: Co-Founder, CEO, Product Manager, Designer</h3>
                                    <br />
                                    <h3>A collaborative code editor and compiler for the web. Allows users to test and run code in over 17 different programming languages in a real-time collaborative environment. Users can also test and host websites.</h3>
                                    <br />
                                    <h3>I founded this company back in 2017 with my partner. Today, CodeCollab has grown to over 36 thousand registered users, partnering with others in the industry like <a style={{ textDecoration: 'underline' }} rel="noreferrer" href="https://openlearning.com" target="_blank">Open Learning</a> and <a style={{ textDecoration: 'underline' }} rel="noreferrer" href="https://tk.sg" target="_blank">Tinkercademy</a></h3>
                                    <br />
                                    <h3>Tech: MongoDB, RedisDB, GoLang, C++/CPython, ExpressJS, ShareDB, Docker, NextJS, Socket.IO</h3>
                                </div>
                            </div>
                            <div className={styles.demoImage} style={{ backgroundImage: `url(/assets/codecollab-computer.svg)` }}>
                            
                            </div>
                        </div>
                        <div id="swiftinsg" className={[styles.projectContainer, styles.swiftinsg, "slideUpContainer"].join(" ")} style={{ backgroundImage: `url(/assets/swift-background.svg)`}}>
                            <div className={styles.texts}>
                                <a href="https://swiftinsg.org" target="_blank" rel="noreferrer">
                                    <div className="hover">
                                        <h1 className="slideUp">SwiftInSG<br />Website</h1>
                                    </div>
                                </a>
                                <div className="slideUp">
                                    <h3>Role: Project Lead, Web Admin</h3>
                                    <br />
                                    <h3>Created the website for the annual Swift Innovators' Summit held by Apple Singapore and IMDA. I was rushed by Apple to deliver the site in less than one month, so this isn't my best work but its still pretty good.</h3>
                                    <br />
                                    <h3>Tech: ReactJS, Gatsby</h3>
                                </div>
                            </div>
                        </div>
                        <div id="drawingboard" className={[styles.projectContainer, styles.drawingboard, "slideUpContainer"].join(" ")} style={{ backgroundImage: `url(/assets/drawingboard-background.png)`}}>
                            <div className={styles.texts}>
                                <a href="https://drawingboard.carlvoller.is" target="_blank" rel="noreferrer">
                                    <div className="hover">
                                        <h1 className="slideUp">Drawing Board</h1>
                                    </div>
                                </a>
                                <div className="slideUp">
                                    <h3>Role: Designer, Developer</h3>
                                    <br />
                                    <h3>Created a collaborative drawing board that allows artists<br />to share multiple canvases and draw together.</h3>
                                    <br />
                                    <h3>Tech: ReactJS, Socket.IO, NodeJS, ShareDB</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
    </div>);
}



export default Index;