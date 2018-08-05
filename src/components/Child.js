import React from 'react';

const ChildFlex = (props) => {
    console.log(props.divInputs)
    return (
        <div className='flex-direction'>
                <label>Child Options</label>
                <div className='child-input-container'>
                    
                    {props.divInputs.length
                        ? 
                        props.divInputs
                        : 
                        <div>
                            <h2>child 1</h2>
                            <div className='child-flex-options'>
                                <p>Flex:</p>
                                <input type='number' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)} name={`div-${1}`}/>
                            </div>
                        </div>}
                </div>
        </div>
    );
};

export default ChildFlex;