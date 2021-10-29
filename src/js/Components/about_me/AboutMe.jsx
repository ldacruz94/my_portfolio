import { Fade, Container, Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './AboutMe.scss';
import profile_pic from './profile.jpg';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <Fade appear={true} in={true}>
            <Container>
                <Row className="justify-content-md-center">  
                    <Col md="auto">
                        <h1 id='intro'>{t('about.intro')}</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src={profile_pic} roundedCircle/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <p>{t('about.body_pt1')}</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <p>
                            {t('about.body_pt2')}
                            <a href="https://www.constantcontact.com/" target="_blank" rel="noreferrer">
                                {t('about.ctct')}
                            </a>
                            {t('about.body_pt3')}
                        </p>
                        <p>{t('about.body_pt4')}</p>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}

export default AboutMe;