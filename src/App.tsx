import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Index from 'pages';

import styles from "./index.module.scss";

function App() {

    //const [cords, setCords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [onHover, setOnHover] = useState(false);

    useEffect(() => {

        let mousemove = (e: MouseEvent) => {
            //setCords({ x: e.x, y: e.y });

            const target = e.target as HTMLElement;

            (async () => {
                document.querySelectorAll<HTMLDivElement>(".cursor").forEach((el) => {
                    el.style.left = e.x - 30 + "px";
                    el.style.top = e.y - 30 + "px";
                });
                const isHoverNode = target.nodeName === "A"
                                 || target.nodeName === "svg"
                                 || target.nodeName === "path";
                if (isHoverNode) return setOnHover(true);
                const isHoverClass = target.classList.contains("hover");
                if (isHoverClass) return setOnHover(true);
                const isParentHoverClass = (target.parentElement as HTMLDivElement).classList.contains("hover");
                setOnHover(isParentHoverClass);
            })().catch();
        }

        let onScroll = (e: any) => {

            if (window.scrollY <= window.innerHeight / 2) {
                document.getElementsByTagName("body")[0].classList.remove(styles.sectionTwoBg)
            } else if (window.scrollY > window.innerHeight / 2 && window.scrollY < window.innerHeight * 1.5) {
                document.getElementsByTagName("body")[0].classList.add(styles.sectionTwoBg)
            } else if (window.scrollY > window.innerHeight * 1.5 && window.scrollY < window.innerHeight * 2.5) {
                document.getElementsByTagName("body")[0].classList.remove(styles.sectionTwoBg)
            } else if (window.scrollY > window.innerHeight * 2.5 && window.scrollY < window.innerHeight * 3.5) {
                document.getElementsByTagName("body")[0].classList.add(styles.sectionTwoBg)
            }

            // if (window.scrollY >= window.innerHeight + window.innerWidth * 2) {
            //     document.getElementById("projects")!.style.backgroundColor = "white";
            //     document.getElementsByTagName("body")[0].classList.remove(styles.sectionTwoBg)
            // } else if (window.scrollY >= window.innerHeight + window.innerWidth / 2) {
            //     document.getElementById("projects")!.style.backgroundColor = "#151515";
            // } else {
            //     document.getElementById("projects")!.style.backgroundColor = "#222";
            // }

            // if (window.scrollY >= window.innerHeight) {
            //     //console.log(window.scrollY - window.innerHeight);
            //     document.getElementById("horizontalScrollingContainer")!.style.marginLeft = `calc(0% - ${window.scrollY - window.innerHeight}px)`;
            //     //window.scrollTo(0, window.innerHeight);
            //     return false
            // } else {
            //     document.getElementById("horizontalScrollingContainer")!.style.marginLeft = `0`;
            // }
        }

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    // Intersection Observer
    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                
                if (entry.isIntersecting) {
                    Array.from(entry.target.getElementsByClassName("slideUp")).forEach(element => {
                        element.classList.add(styles.slideUpAnimation);
                    });
                    return;
                }

                Array.from(entry.target.getElementsByClassName("slideUp")).forEach(element => {
                    element.classList.remove(styles.slideUpAnimation);
                });

            })
        }, { threshold: 0.25 });

        Array.from(document.getElementsByClassName("slideUpContainer")).forEach((element) => {
            //console.log("HI")
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        }

    }, []);

    return (<>
        <style>{`
            .slideUp {
                opacity: 0;
                transition: .5s opacity;
            }
        `}</style>
        <Switch>
            <Route exact path="/" component={Index} />
        </Switch>
        <div id="cursor1" className={[styles.cursor, onHover ? styles.cursorHover : "", "cursor"].join(" ")} />
        <div id="cursor2" className={[styles.cursor2, onHover ? styles.cursor2Hover : "", "cursor"].join(" ")} />
    </>);
}

export default App;
