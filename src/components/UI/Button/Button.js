import React from 'react';
import styles from './Button.module.css';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

const button = (props) => {
    let iconLeft = '';
    let iconRight = '';

    if(props.iconLeft){
        const iconSize = props.iconSize ? props.iconSize : 'IconMostSmallest';
        iconLeft = <Icon iconName={props.iconLeft} iconSize={iconSize} iconSide={'IconLeft'}/>;
    }

    if(props.iconRight){
        const iconSize = props.iconSize ? props.iconSize : 'IconMostSmallest';
        iconRight = <Icon iconName={props.iconRight} iconSize={iconSize} iconSide={'IconRight'}/>; 
    }

    return (
        <button
            className={[styles.Button, styles[props.btnType]].join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}
            type={props.type}>        
            {iconLeft}{props.children}{iconRight}</button>
    )
};

button.propTypes ={
    btnType: PropTypes.string,
    clicked: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    iconSize: PropTypes.string,
}

button.defaultProps = {
    btnType: '',
    clicked: '',
    disabled: false,
    type: "submit",
    iconLeft: "",
    iconRight: "",
    iconSize: "IconMostSmallest",
};

export default button;