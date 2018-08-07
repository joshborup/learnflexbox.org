import React from 'react';

const CssOutput = (props) => {
    let divArray = props.count ? props.count.map(div => {
        return `      <div>Child ${div + 1}</div> 
        `}).join('') : '';
    
    let toggledClass = props.toggle ? 'css-output-container slide-in' : 'css-output-container slide-out';
    return (
        <div >

            <pre className={toggledClass + ' css'}><h1>CSS</h1>{
                `
        .Parent {
            display: flex;
            flex-direction: ${props.flexDirection};
            flex-wrap: ${props.flexWrap};
            justify-content: ${props.justifyContent};
            align-items: ${props.alignItems};
            align-content: ${props.alignContent};
        }
                `
            }</pre>

        
        <pre className={toggledClass}><h1>HTML</h1>{
                `
        <div class='Parent'>
        ${divArray}</div>
                `
            }</pre>
        </div>
    );
};

export default CssOutput;