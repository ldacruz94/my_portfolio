import { Offcanvas } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const ContactMenu = (props) => {
    const { t } = useTranslation();
    const { show } = props;

    const handleHide = () => {
        props.showContactMenu(false);
    };

    return (
        <Offcanvas show={show} placement='end' onHide={handleHide}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t('contact_menu.title')}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ContactForm />
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default ContactMenu;