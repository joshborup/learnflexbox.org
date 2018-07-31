import React from 'react';

const AlignItems = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <label>Flex Direction</label>
                <div>
                    <input type='radio' name='alignItems' defaultChecked value='stretch' />
                    <label>Stretch (Default)</label>
                </div>
                <div>
                    <input type='radio' name='alignItems' value='center' />
                    <label>Center</label>
                </div>
                <div>
                    <input type='radio' name='alignItems' value='flex-start' />
                    <label>Flex-start</label>
                </div>
                <div>
                    <input type='radio' name='alignItems' value='flex-end' />
                    <label>Flex-end</label>
                </div>
                <div>
                    <input type='radio' name='alignItems' value='space-around' />
                    <label>Space-around</label>
                </div>
                <div>
                    <input type='radio' name='alignItems' value='space-between' />
                    <label>Space-between</label>
                </div>
                <div>
                    <input type='radio' name='alignItems' value='space-evenly' />
                    <label>Space-evenly</label>
                </div>
        </div>
    );
};

export default AlignItems;