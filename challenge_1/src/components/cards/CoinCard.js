import React from 'react';
import '../styles/coinCard.scss';

class CoinCard extends React.Component {

    render() {
        const { coin } = this.props;
       
        return (
            <div className="post card">
                <div className="card-body">
                    {((coin.urlProject) && (coin.urlProject != "")) ? <a href={coin.urlProject} target="_blank"><i className="waves-effect waves-light btn button-style">See Project</i></a> : null}
                    {((coin.urlGithub) && (coin.urlGithub != "")) ? <a href={coin.urlGithub} target="_blank"><i className="waves-effect waves-light btn button-style">Github</i></a> : null}
                    {((coin.urlFile) && (coin.urlFile != "")) ? <a href={coin.urlFile} target="_blank"><i className="waves-effect waves-light btn button-style">Documentation</i></a> : null}
                    {((coin.urlExecutable) && (coin.urlExecutable != "")) ? <a href={coin.urlExecutable} target="_blank"><i className="waves-effect waves-light btn button-style">Executable(APK)</i></a> : null}
                </div>
            </div>
        )
    }
}

export default CoinCard;