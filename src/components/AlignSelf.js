import React from 'react';

const AlignSelf = (props) => {
    console.log(props)
    return (
        <div className='flex-direction' onChange={(e)=>props.changeHandler(props.propName, e.target.value)} value={props.alignSelf}>
            <h3>Align Self</h3>
                <div>
                <label>
                    <input type='radio' name='alignSelf' defaultChecked value='stretch' />
                    Stretch (Default)</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignSelf' value='center' />
                    Center</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignSelf' value='flex-start' />
                    Flex-start</label>
                </div>
                <div>
                <label>
                    <input type='radio' name='alignSelf' value='flex-end' />
                    Flex-end</label>
                </div>
        </div>
    );
};

export default AlignSelf;