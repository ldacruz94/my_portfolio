import { Row, Col, Fade, Container, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { DiJava, DiPython, DiPhp, DiJavascript, DiHtml5, DiCss3, DiGitBranch, DiBitbucket } from 'react-icons/di';
import { SiGnubash, SiSpring, SiSpringboot, SiFlask, SiBootstrap, SiReact, SiJquery, SiJira, 
    SiApachemaven, SiJenkins, SiIntellijidea, 
    SiPycharm, SiVisualstudiocode, SiSplunk , SiNewrelic
} from "react-icons/si";
import { AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

const SkillsPage = () => {
    const { t } = useTranslation();
    
    return (
        <Fade appear={true} in={true}>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1><u>{t('skills.title')}</u></h1>
                    </Col>
                    <Col md="auto pt-2">
                        <GiSkills size={35}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Col md="auto">
                        <ListGroup variant='flush'>
                            <ListGroup.Item className="text-center" active>
                                {t('skills.languages.title')}
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.java')}
                                <DiJava size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.python')}
                                <DiPython size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.php')}
                                <DiPhp size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.javascript')}
                                <DiJavascript size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.bash')}
                                <SiGnubash size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.html')}
                                <DiHtml5 size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.css')}
                                <DiCss3 size={25}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.languages.sql')}
                                <AiOutlineConsoleSql size={25}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md="auto">
                        <ListGroup variant='flush'>
                            <ListGroup.Item className="text-center" active>
                                {t('skills.frameworks_and_libraries.title')}
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.spring')}
                                <SiSpring size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.spring_boot')}
                                <SiSpringboot size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.struts')}
                                <BiWrench size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.flask')}
                                <SiFlask size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.bootstrap')}
                                <SiBootstrap size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.react')}
                                <SiReact size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.frameworks_and_libraries.jquery')}
                                <SiJquery size={20}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md="auto">
                        <ListGroup variant='flush'>
                            <ListGroup.Item className="text-center" active>
                                {t('skills.tools.title')}
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.jira')}
                                <SiJira size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.git')}
                                <DiGitBranch size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.github')}
                                <AiFillGithub size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.bitbucket')}
                                <DiBitbucket size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.maven')}
                                <SiApachemaven size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.jenkins')}
                                <SiJenkins size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.intellij')}
                                <SiIntellijidea size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.pycharm')}
                                <SiPycharm size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.vsc')}
                                <SiVisualstudiocode size={20}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.splunk')}
                                <SiSplunk size={35}/>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                {t('skills.tools.new_relic')}
                                <SiNewrelic size={20}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}

export default SkillsPage;