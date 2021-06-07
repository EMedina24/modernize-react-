import React from 'react';
import PropTypes from "prop-types";
import Hero from "./hero"
import NavCard from "./navCard"
import HiwCard from "./Hiw"




// Dynamically import or require sections inside the section folder
const components = {
    Hero,
    NavCard,
    HiwCard,
    
};

const Section = ({ contentModuleId, type }) => {
    console.log("test")
    console.log(type)
    const component = type.split('Layout')[1];
   
    if (typeof components[component] === 'undefined') {
        return '';
    }

    return React.createElement(components[component],{
        contentModuleId
    });
}

Section.prototype = {
    contentModuleId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Section;
