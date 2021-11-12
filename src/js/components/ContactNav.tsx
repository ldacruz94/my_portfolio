import { Nav } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

const ContactNav = () => {
    const { t } = useTranslation();

    return (
        <>
          <Nav>
            <Nav.Link href="https://github.com/ldacruz94" target="_blank">
                <BsGithub size={25} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lucas-da-cruz-992738110/" target="_blank">
                <AiOutlineLinkedin size={25} />
            </Nav.Link>
            <Nav.Link href={t('navbar.contact.email')}>
                <AiOutlineMail size={25} />
            </Nav.Link>
          </Nav>
        </>
    );
}

export default ContactNav;