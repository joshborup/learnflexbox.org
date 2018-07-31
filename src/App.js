import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import FlexDirection from './components/FlexDirection';
import FlexWrap from './components/FlexWrap';
import JustifyContent from './components/JustifyContent';
import AlignItems from './components/AlignItems'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color:'#ff6a5c',
      childrenArray:[],
      flexChildren:0,
      flexDirection:'row',
      flexWrap:'nowrap',
      justifyContent:'flex-start',
      alignItems: 'stretch'
    }
  }


  changeHandler = (name, value) => {
    let childArray = [];
    for(let i = 0; i < value; i++){
        childArray.push(i)
    }
    this.setState({
      childrenArray:childArray,
      [name]: value
    })
  }

  inputChangeHandler = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let styles = {
      parent: {
        background: 'red',
        width: '100%',
        height: '545px',
        maxWidth:'545px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: this.state.justifyContent,
        alignItems: this.state.alignItems,
        flexDirection: this.state.flexDirection,
        flexWrap: this.state.flexWrap
      },
      child: {
        background: this.state.color,
        minWidth:'100px',
        minHeight:"100px",
        boxShadow: '1px 3px 10px rgba(21, 21, 21, .7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '80px',
        color: 'white',
        textShadow: '1.5px 1.5px 3px rgb(70,70,50)',
        borderRadius: '2px',
        margin: '10px'
      }
    }

    let divArray = this.state.childrenArray.map(div => {
      return <div style={styles.child}>{div + 1}</div>
    })

    console.log(this.state.flexDirection)
    return (
      <div className="Main">
          <Sidebar flexChildren={this.state.flexChildren} changeHandler={this.changeHandler} inputChangeHandler={this.inputChangeHandler}>
            <FlexDirection inputChangeHandler={this.inputChangeHandler}/>
            <FlexWrap inputChangeHandler={this.inputChangeHandler} />
            <JustifyContent inputChangeHandler={this.inputChangeHandler} />
            <AlignItems inputChangeHandler={this.inputChangeHandler}/>
          </Sidebar>
          <div>
            <div style={styles.parent}>
              {this.state.flexChildren ? divArray : <div style={styles.child}>1</div>}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
