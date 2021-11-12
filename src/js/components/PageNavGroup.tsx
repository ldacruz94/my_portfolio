import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const PageNavGroup = () => {
    const { t } = useTranslation();

    return (
        <>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">{t('navbar.about')}</Nav.Link>
            <Nav.Link as={Link} to="/skills">{t('navbar.skills')}</Nav.Link>
            <Nav.Link as={Link} to="/biblio-biography">{t('navbar.biblio_biography')}</Nav.Link>
            <Nav.Link as={Link} to="/projects">{t('navbar.projects')}</Nav.Link>
          </Nav>
        </>
    );
}

export default PageNavGroup;