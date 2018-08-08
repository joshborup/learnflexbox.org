import React from 'react';

const FlexDirection = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
               <details>
                    <summary>Flex Direction</summary>
                    <p>Defines how flexbox items are ordered within a flexbox container.</p>
                </details>
                <div>
                <label>
                    <input type='radio' name='flexDirection' defaultChecked value='row' />
                    Row (Default)</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='flexDirection' value='row-reverse' />
                    Row-reverse</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='flexDirection' value='column' />
                    Column</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='flexDirection' value='column-reverse' />
                    Column-reverse</label>
                </div>
        </div>
    );
};

export default FlexDirection;