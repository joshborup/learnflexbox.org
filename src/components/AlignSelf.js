import React from 'react';

const AlignSelf = (props) => {
    console.log(props)
    return (
        <div className='flex-direction' onChange={(e)=>props.changeHandler(e.target.name, e.target.value)} value={props.alignSelf}>
            <h3>Align Self</h3>
                <div>
                <label>
                    <input type='radio' name={props.propName} checked={props.alignSelf === 'stretch' ? true : false} value='stretch' />
                    Stretch (Default)</label>
                </div>
                <div>
                <label>
                    <input type='radio' name={props.propName} checked={props.alignSelf === 'center' ? true : false}  value='center' />
                    Center</label>
                </div>
                <div>
                <label>
                    <input type='radio' name={props.propName} checked={props.alignSelf === 'flex-start' ? true : false}  value='flex-start' />
                    Flex-start</label>
                </div>
                <div>
                <label>
                    <input type='radio' name={props.propName} checked={props.alignSelf === 'flex-end' ? true : false}  value='flex-end' />
                    Flex-end</label>
                </div>
        </div>
    );
};

export default AlignSelf;