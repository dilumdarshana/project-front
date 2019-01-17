import React, { Component } from 'react';

export default class LoadingComponent extends Component {
  
    render() {
        const { isLoading, error, inComponent, loadingText } = this.props;
        return (
            isLoading ?
                <div>
                    <div className={`loading-overlay ${inComponent ? 'in-component' : ''}`}>
                    </div>
                    <div className={`loading-icon-container ${inComponent ? 'in-component' : ''}`}>
                        <img src={require("../../assets/images/loading-icon.gif")} alt="" />
                        {
                            loadingText &&
                            <div className="loading-text-wrapper">
                                <p className="loading-text">please wait...</p>
                            </div>
                        }
                    </div>
                </div> :
                null
        );
    }
}
