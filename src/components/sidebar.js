import React from 'react';
import './sidebar.css'

const SideBar = (props) => {
    console.log(props.color)
    return (
        <div className='side-bar-container'>
            <label>Child count: {props.flexChildren ? props.flexChildren : 1}</label>
            <div className='range-container'>
                <input type="range" className='flex-children slider' name="flexChildren" min="1" max="12" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} value={props.flexChildren}/>
            </div>
            <div className='output-button'>
                <div>
                    {props.toggle ? <button className='hide' onClick={props.myToggle}>hide code output</button> : <button onClick={props.myToggle}>get code output</button>}
                </div>
                <div>
                    <button onClick={props.reset}>Reset</button>
                </div>
            </div>
            <div className='color-container'>
                <label>Color: </label> 
                <input className='color' type='color' name='color' onChange={(e) => props.inputChangeHandler(e.target.name, e.target.value)} value={props.color} />    
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default SideBar;