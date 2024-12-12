import React from 'react';
import '../styles/projectCard.scss';
import { connect } from "react-redux";
import { SPANISH_LANGUAGE, ENGLISH_LANGUAGE } from '../../constants/types';

class ProjectCard extends React.Component {

    render() {
        const { project } = this.props;
        // console.log(project);
        let language = this.props.language;
        let title;
        let text;
        switch (language) {
            case SPANISH_LANGUAGE:
                title = project.titleSpanish;
                text = project.textSpanish;
                break;
            case ENGLISH_LANGUAGE:
                title = project.titleEnglish;
                text = project.textEnglish;
                break;
            default:
                title = project.titleEnglish;
                text = project.textEnglish;
                break;
        }
        // console.log('title and text');
        // console.log(title);
        // console.log(text);
        return (
            <div className="post card">
                <div className="img-container">
                    <a href={project.urlProject} target="_blank">
                        <img src={project.imageUrl}></img> </a>
                </div>
                <div className="card-body">
                    <h2>{title}</h2>
                    <p >{text}</p>
                    {((project.urlProject) && (project.urlProject != "")) ? <a href={project.urlProject} target="_blank"><i className="waves-effect waves-light btn button-style">See Project</i></a> : null}
                    {((project.urlGithub) && (project.urlGithub != "")) ? <a href={project.urlGithub} target="_blank"><i className="waves-effect waves-light btn button-style">Github</i></a> : null}
                    {((project.urlFile) && (project.urlFile != "")) ? <a href={project.urlFile} target="_blank"><i className="waves-effect waves-light btn button-style">Documentation</i></a> : null}
                    {((project.urlExecutable) && (project.urlExecutable != "")) ? <a href={project.urlExecutable} target="_blank"><i className="waves-effect waves-light btn button-style">Executable(APK)</i></a> : null}
                </div>
            </div>
        )
    }
}
const mapStateToPropsProjectCard = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        language: state.constantReducer.language
    };
};

export default connect(mapStateToPropsProjectCard, null)(ProjectCard);