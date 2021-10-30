import { DiGitBranch, DiBitbucket } from 'react-icons/di';
import { 
    SiJira, 
    SiApachemaven, 
    SiJenkins, 
    SiIntellijidea, 
    SiPycharm, 
    SiVisualstudiocode, 
    SiSplunk, 
    SiNewrelic,
    SiGrafana
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './SkillGroups.scss';

const Tools = () => {
    const { t } = useTranslation(); 

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item className="text-center skill_header" active>
                {t('skills.tools.title')}
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.jira')}
                <SiJira size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.git')}
                <DiGitBranch size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.github')}
                <AiFillGithub size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.bitbucket')}
                <DiBitbucket size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.maven')}
                <SiApachemaven size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.jenkins')}
                <SiJenkins size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.intellij')}
                <SiIntellijidea size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.pycharm')}
                <SiPycharm size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.vsc')}
                <SiVisualstudiocode size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.splunk')}
                <SiSplunk size={35}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.new_relic')}
                <SiNewrelic size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.tools.grafana')}
                <SiGrafana size={20}/>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Tools;