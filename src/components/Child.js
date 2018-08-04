import React from 'react';

const ChildFlex = (props) => {
    console.log(props.divInputs)
    return (
        <div className='flex-direction'>
                <label>Child Options</label>
                <div>

                    {props.divInputs.length ? props.divInputs : <div> 1: <input onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)} name={`div-${1}`}/> </div>}
                    {/* <label>Stretch (Default)</label>
                    <input onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)} type='number' name='childFlex' /> */}
                </div>
        </div>
    );
};

export default ChildFlex;