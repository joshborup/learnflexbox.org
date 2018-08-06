import React from 'react';

const FlexDirection = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
               <details>
                    <summary>Flex Direction</summary>
                    <p>Defines how flexbox items are ordered within a flexbox container.</p>
                </details>
                <div>
                    <input type='radio' name='flexDirection' defaultChecked value='row' />
                    <label>Row (Default)</label>
                </div>
                <div>
                    <input type='radio' name='flexDirection' value='row-reverse' />
                    <label>Row-reverse</label>
                </div>
                <div>
                    <input type='radio' name='flexDirection' value='column' />
                    <label>Column</label>
                </div>
                <div>
                    <input type='radio' name='flexDirection' value='column-reverse' />
                    <label>Column-reverse</label>
                </div>
        </div>
    );
};

export default FlexDirection;