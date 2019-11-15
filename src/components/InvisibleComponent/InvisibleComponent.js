import React from 'react';
import PropTypes from 'prop-types';

const InvisibleComponent = (props) => {
    const styles = {
        open: {
            opacity: "1",
            visibility: "visible",
            transform: `translateY(0)`,
            transition: "opacity .25s, transform .25s, visibility .25s"
        },
        closed: {
            opacity: "0",
            pointerEvents: "none",
            visibility: "hidden",
            transform: `translateY(-10px)`,
            transition: "opacity .25s, transform .25s, visibility .25s"
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