import React from 'react';

const AlignContent = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <label>Align Content</label>
                <div>
                    <input type='radio' name='alignContent' defaultChecked value='stretch' />
                    <label>Stretch (Default)</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='Center' />
                    <label>Center</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='flex-start' />
                    <label>Flex-start</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='flex-end' />
                    <label>Flex-end</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='space-around' />
                    <label>Space-around</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='space-between' />
                    <label>Space-between</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='space-evenly' />
                    <label>Space-evenly</label>
                </div>
        </div>
    );
};

export default AlignContent;