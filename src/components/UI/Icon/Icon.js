import React from 'react'
import styles from './Icon.module.css';
import PropTypes from 'prop-types';

const icon = (props) => {
    const reqSvgs = require.context ( './icons', true, /\.svg$/ )
    
    const svgs = reqSvgs
        .keys ()
        .reduce ( ( images, path ) => {
            images[path] = reqSvgs ( path )
            return images
        }, {} );

    const iconName = svgs['./'+props.iconName+'.svg'];
    let iconNewSize = '';

    if(props.iconSize) {
        iconNewSize = props.iconSize;
    }

    let iconNewSide = '';

    if(props.iconSide){
        iconNewSide = styles[props.iconSide];
    } 

    return (
        <div className={[styles.Icon, styles[iconNewSize], iconNewSide].join(' ')}>
            <img src={iconName} alt='icon'/>
        </div>
    )
};

icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
    iconSide: PropTypes.string
}

icon.defaultProps = {
    iconName: '',
    iconSize: '',
    iconSide: ''
};

export default icon;
