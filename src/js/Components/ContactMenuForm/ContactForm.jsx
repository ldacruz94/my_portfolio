import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './ContactForm.scss';

const ContactForm = () => {
    const { t } = useTranslation();

    return (
        <Form>
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
    );
}

export default ContactForm;