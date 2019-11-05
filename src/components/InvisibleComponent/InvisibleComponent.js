import React from 'react';
import PropTypes from 'prop-types';

const InvisibleComponent = (props) => {
    const styles = {
        open: {
            opacity: "1",
            visibility: "visible",
            transform: `translateY(0)`,
            transition: "opacity .15s, transform .15s, visibility .15s"
        },
        closed: {
            opacity: "0",
            pointerEvents: "none",
            visibility: "hidden",
            transform: `translateY(-10px)`,
            transition: "opacity .15s, transform .15s, visibility .15s"
        }
    };

    return (
        <div style={props.show ? styles.open: styles.closed}>
            {props.children}
        </div>
    )
};

InvisibleComponent.propTypes = {
    show: PropTypes.bool
};

export default InvisibleComponent;