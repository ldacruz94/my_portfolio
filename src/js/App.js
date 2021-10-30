import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useState } from 'react';
import { ContactMenu }  from './components';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AboutMePage, ProjectsPage, SkillsPage } from './pages';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { 
  Switch, 
  Route,
  BrowserRouter as Router,
  Link,
  Redirect
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
                <Nav.Link as={Link} to="/about">{t('navbar.about')}</Nav.Link>
                <Nav.Link as={Link} to="/skills">{t('navbar.skills')}</Nav.Link>
                <Nav.Link as={Link} to="/projects">{t('navbar.projects')}</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/lucas-da-cruz-992738110/" target="_blank"><AiOutlineLinkedin size={25} /></Nav.Link>
                <Nav.Link href="https://github.com/ldacruz94" target="_blank"><BsGithub size={25} /></Nav.Link>
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
          <Switch>
              <Route exact path="/"><Redirect to="/about"/></Route>
              <Route exact path="/about" component={AboutMePage} />
              <Route exact path="/skills" component={SkillsPage} />
              <Route exact path="/projects" component={ProjectsPage} />
          </Switch>
      </Fragment>
    </Router>
  );
}

export default App;