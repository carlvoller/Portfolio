import React, { useState } from 'react';

interface Props {
    img: string;
    title: string;
    roles: string;
    openSourced?: string;
    tech: string;
    description: string;
    link?: string;
}

const Project = ({ img, title, roles, openSourced, tech, description, link }: Props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (<>
        <div className="hover" onClick={toggleModal} style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            alignItems: "center",
            flex: 1,
            minWidth: "35%",
            maxWidth: "35%",
            color: "black",
            border: "2px solid white",
        }}>
            <div style={{
                width: "100%",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16/9"
            }} />
            <span style={{ margin: 10, fontSize: "150%" }}>{title}</span>
        </div>
        <div style={{
            display: modalVisible ? 'flex' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: 500,
                display: 'flex',
                background: "#DDD",
                color: "black",
                flexDirection: "column",
                padding: 40,
                gap: 20,
                position: "absolute"
            }}>
                <h1 style={{ margin: 0, fontSize: "200%" }}>{title}</h1>
                {link && <span>Link: <a href={link}>{link}</a></span>}
                <span>Roles: {roles}</span>
                <span>Open Sourced: {openSourced ? "Yes" : "No"}</span>
                {openSourced && <>
                    <span>GitHub <a href={openSourced}>{openSourced}</a></span>
                </>}
                <span>Tech: {tech}</span>
                {description.split("\n").map((x) => <span>{x}</span>)}
                <i className='hover' style={{ position: "absolute", top: 20, right: 20 }} onClick={toggleModal}>X</i>
            </div>
        </div>
    </>);
}

export default Project;
