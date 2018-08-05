import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import FlexDirection from './components/FlexDirection';
import FlexWrap from './components/FlexWrap';
import JustifyContent from './components/JustifyContent';
import AlignItems from './components/AlignItems';
import AlignContent from './components/AlignContent';
import CssOutput from './components/CssOutput';
import Child from './components/Child';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color:'rgb(128, 163, 252)',
      childrenArray:[],
      flexChildren:0,
      flexDirection:'row',
      flexWrap:'nowrap',
      justifyContent:'flex-start',
      alignItems: 'stretch',
      alignContent:'stretch',
      childFlex: 0,
      toggle: false
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

  myToggle = () => {
    this.setState((prevState)=>{
        return{
          toggle: !prevState.toggle
        }
    })
  }

  formattedChild = (div) => {
  
     return {
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
          marginTop: this.state[`div-${div + 1}-margin-top`] ? this.state[`div-${div + 1}-margin-top`] + 'px' : 0,
          marginRight: this.state[`div-${div + 1}-margin-right`] ? this.state[`div-${div + 1}-margin-right`] + 'px' : 0,
          marginBottom: this.state[`div-${div + 1}-margin-bottom`] ? this.state[`div-${div + 1}-margin-bottom`] + 'px' : 0,
          marginLeft: this.state[`div-${div + 1}-margin-left`] ? this.state[`div-${div + 1}-margin-left`] + 'px' : 0,
          flex: this.state[`div-${div + 1}`]
        }
    
    }
  

  render() {
   
    let styles = {
      parent: {
        border: 'solid 5px #02173E',
        width: '100%',
        height: '545px',
        maxWidth:'700px',
        margin: '0 auto',
        display: 'flex',
        borderRadius:'3px',
        justifyContent: this.state.justifyContent,
        alignItems: this.state.alignItems,
        flexDirection: this.state.flexDirection,
        flexWrap: this.state.flexWrap,
        alignContent: this.state.alignContent
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
          margin: '0px',
          flex: this.state['div-1']
        },
      childSelected: {
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
        margin: '0px',
        
      }
    }

    let divInputs = this.state.childrenArray.map(div => {
         return <div>
                  <h2>child {div + 1}</h2>
                  <div className='child-flex-options'>
                    <p>Flex:</p>
                    <input type='number' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}`} value={this.state[`div-${div + 1}`]}/>
                  </div>

                  <div className='child-flex-options for-margin'>
                    <p>margin:</p>
                    <div className='child-option-margin'>
                      <input type='number' placeholder='Top' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-top`} value={this.state[`div-${div + 1}-margin-top`]}/>
                      <input type='number' placeholder='right' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-right`} value={this.state[`div-${div + 1}-margin-right`]}/>
                      <input type='number' placeholder='bottom' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-bottom`} value={this.state[`div-${div + 1}-margin-bottom`]}/>
                      <input type='number' placeholder='left' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-left`} value={this.state[`div-${div + 1}-margin-left`]}/>
                    </div>
                  </div>
                </div>
   })

    let divArray = this.state.childrenArray.map(div => {
          return <div key={div} style={this.formattedChild(div)}>{div + 1}</div>
    })

    return (
      <div className="Main">
          <Sidebar myToggle={this.myToggle} toggle={this.state.toggle} flexChildren={this.state.flexChildren} changeHandler={this.changeHandler} inputChangeHandler={this.inputChangeHandler}>
            <FlexDirection inputChangeHandler={this.inputChangeHandler}/>
            <FlexWrap inputChangeHandler={this.inputChangeHandler} />
            <JustifyContent inputChangeHandler={this.inputChangeHandler} />
            <AlignItems inputChangeHandler={this.inputChangeHandler}/>
            <AlignContent inputChangeHandler={this.inputChangeHandler}/>
            <Child divInputs={divInputs} inputChangeHandler={this.inputChangeHandler} />
            
          </Sidebar>
          <div>
            <div style={styles.parent}>
              {this.state.flexChildren ? divArray : <div style={styles.child}>1</div>}
            </div>
          </div>
          <CssOutput
          justifyContent={this.state.justifyContent}
          alignItems={this.state.alignItems}
          flexDirection={this.state.flexDirection}
          flexWrap={this.state.flexWrap}
          alignContent={this.state.alignContent}
          toggle={this.state.toggle}
          />
      </div>
    );
  }
}

export default App;
