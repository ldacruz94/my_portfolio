import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { 
    SiSpring, 
    SiSpringboot, 
    SiFlask, 
    SiBootstrap, 
    SiReact, 
    SiJquery,
    SiJira, 
    SiApachemaven, 
    SiJenkins, 
    SiIntellijidea, 
    SiPycharm, 
    SiVisualstudiocode, 
    SiSplunk, 
    SiNewrelic,
    SiGrafana,
    SiGnubash,
    SiTypescript
} from 'react-icons/si';
import { 
    DiJava, 
    DiPython, 
    DiPhp, 
    DiJavascript, 
    DiHtml5, 
    DiCss3, 
    DiGitBranch, 
    DiBitbucket
} from 'react-icons/di';
import { AiOutlineConsoleSql, AiFillGithub } from "react-icons/ai";
import { BiWrench } from 'react-icons/bi';

export interface IconItem {
    name:string,
    icon:JSX.Element
};

export const FrameworksAndLibraries = () =>  {
    const { t } = useTranslation();

    const skills = [
        {"name": t('skills.frameworks_and_libraries.spring'), "icon": <SiSpring size={20} /> },
        {"name": t('skills.frameworks_and_libraries.spring_boot'), "icon": <SiSpringboot size={20} /> },
        {"name": t('skills.frameworks_and_libraries.struts'), "icon": <BiWrench size={20} /> },
        {"name": t('skills.frameworks_and_libraries.flask'), "icon": <SiFlask size={20} /> },
        {"name": t('skills.frameworks_and_libraries.bootstrap'), "icon": <SiBootstrap size={20} /> },
        {"name": t('skills.frameworks_and_libraries.react'), "icon": <SiReact size={20} /> },
        {"name": t('skills.frameworks_and_libraries.jquery'), "icon": <SiJquery size={20} /> }
    ];

    return (
        <>
           <ListGroup variant='flush'>
                <ListGroup.Item className="text-center skill_header" active>
                    {t('skills.frameworks_and_libraries.title')}
                </ListGroup.Item>
                {skills.map(icon => {
                    return <ListGroup.Item key={icon.name} className="text-center skill_item">
                                {icon.name}
                                {icon.icon}
                            </ListGroup.Item>;
                })}
            </ListGroup>
        </>
    );
}

export const Languages = () => {
    const { t } = useTranslation();

    const skills = [
        {"name": t('skills.languages.java'), "icon": <DiJava size={25} /> },
        {"name": t('skills.languages.python'), "icon": <DiPython size={25} /> },
        {"name": t('skills.languages.php'), "icon": <DiPhp size={25} /> },
        {"name": t('skills.languages.javascript'), "icon": <DiJavascript size={25} /> },
        {"name": t('skills.languages.bash'), "icon": <SiGnubash size={25} /> },
        {"name": t('skills.languages.html'), "icon": <DiHtml5 size={25} /> },
        {"name": t('skills.languages.css'), "icon": <DiCss3 size={25} /> },
        {"name": t('skills.languages.sql'), "icon": <AiOutlineConsoleSql size={25} /> },
        {"name": t('skills.languages.typescript'), "icon": <SiTypescript size={15} /> },
    ];

    return (
        <>
           <ListGroup variant='flush'>
                <ListGroup.Item className="text-center skill_header" active>
                        {t('skills.languages.title')}
                </ListGroup.Item>
                {skills.map(icon => {
                    return <ListGroup.Item key={icon.name} className="text-center skill_item">
                                {icon.name}
                                {icon.icon}
                            </ListGroup.Item>;
                })}
            </ListGroup>
        </>
    );
}

export const Tools = () => {
    const { t } = useTranslation();

    const skills = [
        {"name": t('skills.tools.jira'), "icon": <SiJira size={20} /> },
        {"name": t('skills.tools.git'), "icon": <DiGitBranch size={20} /> },
        {"name": t('skills.tools.github'), "icon": <AiFillGithub size={20} /> },
        {"name": t('skills.tools.bitbucket'), "icon": <DiBitbucket size={20} /> },
        {"name": t('skills.tools.maven'), "icon": <SiApachemaven size={20} /> },
        {"name": t('skills.tools.jenkins'), "icon": <SiJenkins size={20} /> },
        {"name": t('skills.tools.intellij'), "icon": <SiIntellijidea size={20} /> },
        {"name": t('skills.tools.pycharm'), "icon": <SiPycharm size={20} /> },
        {"name": t('skills.tools.vsc'), "icon": <SiVisualstudiocode size={20} /> },
        {"name": t('skills.tools.splunk'), "icon": <SiSplunk size={45} /> },
        {"name": t('skills.tools.new_relic'), "icon": <SiNewrelic size={20} /> },
        {"name": t('skills.tools.grafana'), "icon": <SiGrafana size={20} /> }
    ];

    return (
        <>
            <ListGroup variant='flush'>
              <ListGroup.Item className="text-center skill_header" active>
                 {t('skills.tools.title')}
              </ListGroup.Item>
              {skills.map(icon => {
                return <ListGroup.Item key={icon.name} className="text-center skill_item">
                          {icon.name}
                          {icon.icon}
                       </ListGroup.Item>;
                })}
            </ListGroup>
        </>
    );
}
