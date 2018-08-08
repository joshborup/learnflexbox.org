import React from 'react';

const AlignItems = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
               
                <details>
                    <summary>Align Items</summary>
                    <p>Defines how flexbox items are aligned according to the cross axis, within a line of a flexbox container.</p>
                </details>
                <div>
                <label>
                    <input type='radio' name='alignItems' defaultChecked value='stretch' />
                    Stretch (Default)</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignItems' value='center' />
                    Center</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignItems' value='flex-start' />
                    Flex-start</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignItems' value='flex-end' />
                    Flex-end</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignItems' value='space-around' />
                   Space-around</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignItems' value='space-between' />
                    Space-between</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignItems' value='space-evenly' />
                    Space-evenly</label>
                </div>
        </div>
    );
};

export default AlignItems;