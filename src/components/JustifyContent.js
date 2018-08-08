import React from 'react';

const JustifyContent = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <details>
                    <summary>Justify Content</summary>
                    <p>Defines how flexbox items are aligned according to the main axis, within a flexbox container.</p>
                </details>
                <div>
                <label>
                    <input type='radio' name='justifyContent' defaultChecked value='flex-start' />
                    Flex-start (Default)</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='justifyContent' value='flex-end' />
                    Flex-end</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='justifyContent' value='center' />
                    Center</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='justifyContent' value='space-around' />
                    Space-around</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='justifyContent' value='space-between' />
                    Space-between</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='justifyContent' value='space-evenly' />
                   Space-evenly</label>
                </div>
        </div>
    );
};

export default JustifyContent;