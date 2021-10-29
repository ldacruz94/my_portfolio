import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { AboutMe, ContactMenu, SkillsSection, Space }  from './components';
import { useState } from 'react'; 
import { Fade, Nav, Navbar, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { 
    Switch, 
    Route,
    BrowserRouter as Router,
    Link 
} from "react-router-dom"; 

const App = () => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const { t } = useTranslation();
  
  const handleContactMenuRender = (render) => {
      setShowContactMenu(render);
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand>{t('navbar.name')}</Navbar.Brand>
              <Navbar.Collapse>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Nav className="me-auto">
                      <Nav.Link>
                          <Link to="/about">{t('navbar.about')}</Link>
                      </Nav.Link>
                      <Nav.Link>
                          <Link to="/skills">{t('navbar.skills')}</Link>
                      </Nav.Link>
                      <Nav.Link>
                          <Link to="/projects">{t('navbar.projects')}</Link>
                      </Nav.Link>
                  </Nav>
                  <Nav className="d-flex">
                      <Nav.Link>{t('navbar.resume')}</Nav.Link>
                      <Button variant="outline-primary" onClick={handleContactMenuRender}>{t('navbar.contact.text')}</Button>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      <Fragment>
          <ContactMenu show={showContactMenu} showContactMenu={handleContactMenuRender} />
          <Space size={1} />
          <Switch>
              <Route path="/about">
                  <Fade appear={true} in={true}>
                      <AboutMe />
                  </Fade>
              </Route>
              <Route path="/skills">
                  <Fade appear={true} in={true}>
                      <SkillsSection />
                  </Fade>
              </Route>
          </Switch>
      </Fragment>
    </Router>
  );
}

export default App;