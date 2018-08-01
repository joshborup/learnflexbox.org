import React from 'react';
import './sidebar.css'

const SideBar = (props) => {
    return (
        <div className='side-bar-container'>
            <label>Child count: {props.flexChildren ? props.flexChildren : 1}</label>
            <div className='range-container'>
                <input type="range" className='flex-children slider' name="flexChildren" min="1" max="12" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} value={props.flexChildren}/>
            </div>
            <div>
                <select name='color' onChange={(e) => props.inputChangeHandler(e.target.name, e.target.value)} value={props.color}>
                    <option value='#F5941C'>light</option>
                    <option value='rgb(121, 121, 121)'>dark</option>
                </select>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default SideBar;