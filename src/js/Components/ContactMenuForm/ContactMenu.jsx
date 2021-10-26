import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const ContactMenu = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <Offcanvas show={show} placement='end' onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t('contact_menu.title')}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ContactForm/>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default ContactMenu;