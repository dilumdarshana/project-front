import React, { Component } from 'react';
import LoadingImg from '../../assets/images/loading-icon.gif';

export default class LoadingComponent extends Component {
  
    render() {
        const { isLoading, inComponent, loadingText } = this.props;
        return (
            isLoading ?
                <div>
                    <div className={`loading-overlay ${inComponent ? 'in-component' : ''}`}>
                    </div>
                    <div className={`loading-icon-container ${inComponent ? 'in-component' : ''}`}>
                        <img src={LoadingImg} alt="" />
                        {
                            loadingText &&
                            <div className="loading-text-wrapper">
                                <p className="loading-text">{loadingText}</p>
                            </div>
                        }
                    </div>
                </div> :
                null
        );
    }
}
