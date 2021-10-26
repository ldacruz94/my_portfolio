import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavbarWrapper = () => {
    const { t } = useTranslation();

    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{t('navbar.name')}</Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href="#about">{t('navbar.about')}</Nav.Link>
                        <Nav.Link href="#skills">{t('navbar.skills')}</Nav.Link>
                        <Nav.Link href="#projects">{t('navbar.projects')}</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="#resume">{t('navbar.resume')}</Nav.Link>
                        <Button variant="outline-primary">{t('navbar.contact.text')}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarWrapper;