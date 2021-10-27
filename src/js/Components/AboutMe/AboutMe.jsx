import { Container, Col, Row, Fade } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './AboutMe.scss';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Row className="justify-content-md-center">  
                <Col xs={5} md="auto">
                    <Fade appear={true} in={true}>
                        <h2 id='intro'>{t('about.intro')}</h2>
                    </Fade>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={10} md="auto">
                    <p>IMAGE PLACEHOLDER</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;