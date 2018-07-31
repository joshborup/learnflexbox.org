import React from 'react';

const FlexWrap = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <label>Flex Wrap</label>
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