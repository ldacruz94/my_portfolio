import { Container, Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import profile_pic from './profile.jpg';
import { IoFish } from 'react-icons/io5';
import { Animated } from "react-animated-css";
import './AboutMePage.scss';

const AboutMePage = () => {
    const { t } = useTranslation();

    return (
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
            <Container className="pt-4">
                <Row className="justify-content-md-center mt-4">  
                    <Col md="auto">
                        <h1 id='intro'>{t('about.intro')}</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <p>{t('about.body_pt1')}</p>
                    </Col>
                    <Col md="auto p-0">
                        <IoFish className="icon" size={30} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src={profile_pic} roundedCircle/>
                    </Col>
                    <Col md={5}>
                        <p>{t('about.body_pt2')}
                            <a href="https://www.constantcontact.com/" 
                                target="_blank" 
                                rel="noreferrer">
                                {t('about.ctct')}
                            </a>
                        </p>
                        <p>{t('about.body_pt3')}</p>
                        <p>{t('about.body_pt4')}</p>
                        <p>{t('about.body_pt5')}</p>
                    </Col>
                </Row>
            </Container>
        </Animated>
    );
}

export default AboutMePage;