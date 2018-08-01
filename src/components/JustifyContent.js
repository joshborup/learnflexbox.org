import React from 'react';

const JustifyContent = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <label>Justify Content</label>
                <div>
                    <input type='radio' name='justifyContent' defaultChecked value='flex-start' />
                    <label>Flex-start (Default)</label>
                </div>
                <div>
                    <input type='radio' name='justifyContent' value='flex-end' />
                    <label>Flex-end</label>
                </div>
                <div>
                    <input type='radio' name='justifyContent' value='Center' />
                    <label>Center</label>
                </div>
                <div>
                    <input type='radio' name='justifyContent' value='space-around' />
                    <label>Space-around</label>
                </div>
                <div>
                    <input type='radio' name='justifyContent' value='space-between' />
                    <label>Space-between</label>
                </div>
                <div>
                    <input type='radio' name='justifyContent' value='space-evenly' />
                    <label>Space-evenly</label>
                </div>
        </div>
    );
};

export default JustifyContent;