import React from 'react';
import './sidebar.css'

const SideBar = (props) => {
    return (
        <div className='side-bar-container'>
            <label>Child count: {props.flexChildren ? props.flexChildren : 1}</label>
            <input type="range" className='flex-children' name="flexChildren" min="1" max="8" onChange={(e) => props.changeHandler(e.target.name, e.target.value)} value={props.flexChildren}/>
            <select name='color' onChange={(e) => props.inputChangeHandler(e.target.name, e.target.value)} value={props.color}>
                <option value='#ff6a5c'>light</option>
                <option value='rgb(121, 121, 121)'>dark</option>
            </select>
            {props.children}
        </div>
    );
};

export default SideBar;