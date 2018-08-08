import React from 'react';

const AlignContent = (props) => {
    return (
        <div className='flex-direction' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}>
                <details>
                    <summary>Align Content</summary>
                    <p>Defines how each line is aligned within a flexbox container. It only applies if flex-wrap: wrap is present, and if there are multiple lines of flexbox items.</p>
                </details>
                <div>
                    
                    <label>
                        <input type='radio' name='alignContent' defaultChecked value='stretch' />
                        Stretch (Default)
                    </label>
                </div>
                <div>
                    <label>
                        <input type='radio' name='alignContent' value='center' />
                        Center
                    </label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignContent' value='flex-start' />
                    Flex-start</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignContent' value='flex-end' />
                    Flex-end</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignContent' value='space-around' />
                    Space-around</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignContent' value='space-between' />
                    Space-between</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignContent' value='space-evenly' />
                    Space-evenly</label>
                </div>
        </div>
    );
};

export default AlignContent;