import { Fragment, useState } from 'react';
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './ContactForm.scss';

const ContactForm = () => {
    const { t } = useTranslation();
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        setShowAlert(true);
        e.preventDefault();
    }

    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    return (
        <Fragment>
            <Alert 
              show={showAlert} 
              variant={'success'} 
              onClose={handleCloseAlert}
              dismissible
              >{t('contact_menu.alert_msg')}
            </Alert>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label={t('contact_menu.form.email')} 
                    className="mb-3"
                >
                    <Form.Control size="sm" type="email" />
                </FloatingLabel>
                <FloatingLabel label={t('contact_menu.form.body')} className="mb-3">
                    <Form.Control
                        as="textarea"
                        style={{ height: '200px' }}
                    />
                </FloatingLabel>
                <Button
                    id="submit_btn"
                    type="submit">{t('contact_menu.form.submit')}
                </Button>
            </Form>
        </Fragment>
    );
}

export default ContactForm;