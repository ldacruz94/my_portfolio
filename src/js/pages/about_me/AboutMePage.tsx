import { Container, Col, Row, Image } from 'react-bootstrap';
import profile_pic from './profile.jpg';
import { Animated } from "react-animated-css";
import './AboutMePage.scss';
import AboutMeTextBody from '../../components/AboutMeTextBody';
import AboutMeHeader from '../../components/AboutMeHeader';

const AboutMePage = () => {

    return (
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
            <Container className="pt-4">
                <Row className="justify-content-md-center">
                    <AboutMeHeader />
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src={profile_pic} roundedCircle/>
                    </Col>
                    <Col md={5}>
                        <AboutMeTextBody />
                    </Col>
                </Row>
            </Container>
        </Animated>
    );
}

export default AboutMePage;