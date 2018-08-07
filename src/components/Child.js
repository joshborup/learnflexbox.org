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
                        <div className='child-container'>
                            <h2>child 1</h2>
                            <div className='child-flex-options'>
                                <p>Flex:</p>
                                <input type='number' placeholder='example: 1' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)} name={`div-1`}/>
                            </div>
                            <div className='child-flex-options for-margin'>
                                <label>margin:</label>
                                <div className='child-option-margin'>
                                    <div>
                                        <label>Top: </label>
                                        <input type='number' placeholder='Top' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}  name={`div-1-margin-top`} value={props[`div-1-margin-top`]}/>
                                    </div>

                                    <div>
                                        <label>Right: </label>
                                        <input type='number' placeholder='right' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}  name={`div-1-margin-right`} value={props[`div-1-margin-right`]}/>
                                    </div>

                                    <div>
                                        <label>Bottom: </label>
                                        <input type='number' placeholder='bottom' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}  name={`div-1-margin-bottom`} value={props[`div-1-margin-bottom`]}/>
                                    </div>

                                    <div>
                                        <label>Left: </label>
                                        <input type='number' placeholder='left' onChange={(e)=>props.inputChangeHandler(e.target.name, e.target.value)}  name={`div-1-margin-left`} value={props[`div-1-margin-left`]}/>
                                    </div>
                                </div>
                            </div>

                        </div>}
                </div>
        </div>
    );
};

export default ChildFlex;