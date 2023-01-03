import React from "react";
import Project from "./project";
import styles from "../../styles/index.module.scss";

export default function Projects() {

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
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className={styles.fixed}>
                <h1 className={styles.bgBigText} style={{ marginBottom: 0 }}>
                    <span className="slideUp">Projects</span>
                </h1>
                <h3 style={{ textAlign: 'center' }}>
                    <span className="slideUp" style={{ letterSpacing: 1, fontWeight: "normal", textAlign: "center" }}>
                        Here are some of my projects that I've worked on throughout my career.<br />Click on each to learn more.
                    </span>
                </h3>

                <div style={{
                    display: "flex",
                    width: "100%",
                    letterSpacing: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: 20,
                    gap: 25
                }}>
                    <Project
                        link="https://codecollab.io"
                        roles="Co-Founder, Lead Developer, Designer"
                        tech="MongoDB, ExpressJS, ReactJS, Nginx, Socket.IO, ShareDB, Docker, Google Cloud Platform, Golang"
                        description="A collaborative code editor and compiler for the web. Allows its users to test and run code in over 17 different programming languages in a real-time collaborative environment. Users can also test and host websites. In fact, this very website is hosted on CodeCollab.\nAt the moment, CodeCollab is utilised in SST and Dunman High School for their O and A levels syllabus. CodeCollab also has over 19000 registered users with over  2500 of them being monthly active users."
                        img="/assets/codecollab.jpg" title="CodeCollab" />
                    <Project
                        link="https://swiftinsg.org"
                        roles="Project Manager, Designer, Developer"
                        tech="GatsbyJS, TypeScript"
                        openSourced="https://github.com/swiftinsg/swiftinsg.github.io/"
                        description="Used Webflow to design a new landing page and connected website content to their internal CMS databases."
                        img="/assets/swiftinsg.png" title="Swift Innovators Summit" />
                    <Project
                        roles="Developer"
                        openSourced="https://github.com/Portatolova/WWDC2022-Wholesome"
                        tech="SwiftUI, UIKit, PencilKit, CoreML, NaturalLanguage, Vision"
                        description="In 2022, I submitted an App where users have to write down compliments on a drawing board, then the app will detect the words written and generate a sentiment score based on the compliment. If the sentiment score is high enough, it is added to a list of compliments. Afterwards, the user has to bring their iPad up to people and when the app detects that a person is in view or frame, the user can click on a compliment they've previously written and the app will voice out the compliment and increment a score value.\nThe idea for the app was to leverage the various Apple Development Kits to create a wholesome app that encourages people to go around and give people compliments."
                        img="/assets/wholesome.jpeg" title="Wholesome" />
                    {/* <Project img="/assets/swiftinsg.png" title="Swift Innovators Summit" />
                    <Project img="/assets/swiftinsg.png" title="Swift Innovators Summit" /> */}


                    {/*                     
                    <div className="hover" style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        alignItems: "center",
                        flex: 1,
                        margin: "0 2%",
                        minWidth: "40%",
                        maxWidth: "40%",
                        aspectRatio: "16/9",
                        color: "black",
                        border: "2px solid white",
                    }}>
                        <div style={{
                            width: "100%",
                            backgroundImage: "url(/assets/codecollab.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "16/9"
                        }} />
                        <span style={{ margin: 10, fontSize: "150%" }}>CodeCollab</span>
                    </div> */}
                    {/* <div className="hover" style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        alignItems: "center",
                        flex: 1,
                        margin: "0 2%",
                        minWidth: "40%",
                        maxWidth: "40%",
                        aspectRatio: "16/9",
                        color: "black",
                        border: "2px solid white"
                    }}>
                        <div style={{
                            width: "100%",
                            backgroundImage: "url(/assets/swiftinsg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "16/9"
                        }} />
                        <span style={{ margin: 10, fontSize: "150%" }}>Swift Innovators Summit</span>
                    </div> */}
                    {/* <div className="hover" style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        alignItems: "center",
                        flex: 1,
                        margin: "20px 2%",
                        minWidth: "40%",
                        maxWidth: "40%",
                        aspectRatio: "16/9",
                        color: "black",
                        border: "2px solid white",
                    }}>
                        <div style={{
                            width: "100%",
                            backgroundImage: "url(/assets/swiftinsg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "16/9"
                        }} />
                        <span style={{ margin: 10, fontSize: "150%" }}>Swift Innovators Summit</span>
                    </div> */}
                </div>

            </div>

        </div>
    </>);

}