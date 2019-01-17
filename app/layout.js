import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/common/header';
import Footer from './components/common/footer';

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            <div>
                { children }
            </div>
            <Footer />
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};
