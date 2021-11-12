import { Navbar, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ContactNav, PageNavGroup } from '.';


const NavigationBar = () => {
    const { t } = useTranslation();

    return (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>{t('navbar.name')}</Navbar.Brand>
              <Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <PageNavGroup />
              <ContactNav />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );
}

export default NavigationBar;