import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/common/header';
import Footer from './components/common/footer';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    { this.props.children }
                </div>
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};
