import React from 'react';

import './styles.css';

const PageWrapper = (props) => {
    return (
        <div className="pageWrapper">
            {props.children}
        </div>
    );
};

export default PageWrapper;