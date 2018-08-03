import React from 'react';

const CssOutput = (props) => {
    let toggledClass = props.toggle ? 'css-output-container slide-in' : 'css-output-container slide-out';
    return (
        <div className={toggledClass}>
            <pre>{
                `
        {
            display: flex;
            flex-direction: ${props.flexDirection};
            flex-wrap: ${props.flexWrap};
            justify-content: ${props.justifyContent};
            align-items: ${props.alignItems};
            align-content: ${props.alignContent};
        }
                `
            }</pre>
        </div>
    );
};

export default CssOutput;