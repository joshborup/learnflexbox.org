import React from 'react';

const FlexWrap = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <details>
                    <summary>Flex Wrap</summary>
                    <p>Defines if flexbox items appear on a single line or on multiple lines within a flexbox container</p>
                </details>
                <div>
                    <input type='radio' name='flexWrap' defaultChecked value='nowrap' />
                    <label>No Wrap (Default)</label>
                </div>
                <div>
                    <input type='radio' name='flexWrap' value='wrap' />
                    <label>Wrap</label>
                </div>
                <div>
                    <input type='radio' name='flexWrap' value='wrap-reverse' />
                    <label>Wrap-reverse</label>
                </div>
        </div>
    );
};

export default FlexWrap;