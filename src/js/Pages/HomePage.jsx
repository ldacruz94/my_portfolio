import React, { Fragment } from 'react';
import { NavbarWrapper, AboutMe, ContactMenu }  from '../Components';
import { useState } from 'react'; 

const HomePage = () => {
    const [showContactMenu, setShowContactMenu] = useState(false);

    const handleContactMenuRender = (render) => {
        setShowContactMenu(render);
    };

    return (
        <Fragment>
            <NavbarWrapper showContactMenu={handleContactMenuRender} />
            <ContactMenu show={showContactMenu} showContactMenu={handleContactMenuRender} />
            <br/><br/><br/>
            <AboutMe />
        </Fragment>
    );
}

export default HomePage;