import React from 'react';
import '../styles/coinCard.scss';

class CoinCard extends React.Component {

    render() {
        const { project } = this.props;
       
        return (
            <div className="post card">
                <div className="card-body">
                    {((project.urlProject) && (project.urlProject != "")) ? <a href={project.urlProject} target="_blank"><i className="waves-effect waves-light btn button-style">See Project</i></a> : null}
                    {((project.urlGithub) && (project.urlGithub != "")) ? <a href={project.urlGithub} target="_blank"><i className="waves-effect waves-light btn button-style">Github</i></a> : null}
                    {((project.urlFile) && (project.urlFile != "")) ? <a href={project.urlFile} target="_blank"><i className="waves-effect waves-light btn button-style">Documentation</i></a> : null}
                    {((project.urlExecutable) && (project.urlExecutable != "")) ? <a href={project.urlExecutable} target="_blank"><i className="waves-effect waves-light btn button-style">Executable(APK)</i></a> : null}
                </div>
            </div>
        )
    }
}

export default CoinCard;