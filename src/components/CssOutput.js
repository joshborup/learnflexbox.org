import React from 'react';

const CssOutput = (props) => {
    let divArray = props.count ? props.count.map(div => {
        return `      <div>Child ${div + 1}</div> 
        `}).join('') : '';
   
    let childCss = props.count ? props.count.map(div => {
        return `.child-${div+1} {
            flex: ${+props['div-' + (+ div + 1)] || 0};
            order: ${+props['div-' + (+ div + 1) + '-order'] || 0};
            align-self: ${props['div-' + (+ div + 1) + '-align-self'] || 'stretch'};
        }
        `}).join('') : '';
    
    let toggledClass = props.toggle ? 'css-output-container slide-in' : 'css-output-container slide-out';
    console.log(props)
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

       ${childCss}
                `
            }
            </pre>

        
      
        </div>
    );
};

export default CssOutput;