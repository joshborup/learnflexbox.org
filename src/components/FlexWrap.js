import React from 'react';

const FlexWrap = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <details>
                    <summary>Flex Wrap</summary>
                    <p>Defines if flexbox items appear on a single line or on multiple lines within a flexbox container</p>
                </details>
                <div>
                <label>
                    <input type='radio' name='flexWrap' defaultChecked value='nowrap' />
                    No Wrap (Default)</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='flexWrap' value='wrap' />
                    Wrap</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='flexWrap' value='wrap-reverse' />
                    Wrap-reverse</label>
                </div>
        </div>
    );
};

export default FlexWrap;