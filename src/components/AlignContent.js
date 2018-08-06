import React from 'react';

const AlignContent = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <details>
                    <summary>Align Content</summary>
                    <p>Defines how each line is aligned within a flexbox container. It only applies if flex-wrap: wrap is present, and if there are multiple lines of flexbox items.</p>
                </details>
                <div>
                    <input type='radio' name='alignContent' defaultChecked value='stretch' />
                    <label>Stretch (Default)</label>
                </div>
                <div>
                    <input type='radio' name='alignContent' value='center' />
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