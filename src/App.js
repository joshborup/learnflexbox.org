import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import FlexDirection from './components/FlexDirection';
import FlexWrap from './components/FlexWrap';
import JustifyContent from './components/JustifyContent';
import AlignItems from './components/AlignItems';
import AlignContent from './components/AlignContent';
import CssOutput from './components/CssOutput';
import Child from './components/Child';
import AlignSelf from './components/AlignSelf'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color:'#89a5f0',
      childrenArray:[0],
      flexChildren:0,
      flexDirection:'row',
      flexWrap:'nowrap',
      justifyContent:'flex-start',
      alignItems: 'stretch',
      alignContent:'stretch',
      childFlex: 0,
      toggle: false,
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

  reset = () => {
    window.location.href = '/'
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
          padding:'30px',
          boxShadow: '1px 3px 10px rgba(21, 21, 21, .7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '80px',
          position:'relative',
          zIndex:'2',
          color: 'white',
          textShadow: '1.5px 1.5px 3px rgb(70,70,50)',
          borderRadius: '2px',
          order: this.state[`div-${div + 1}-order`],
          marginTop: this.state[`div-${div + 1}-margin-top`] ? this.state[`div-${div + 1}-margin-top`] + 'px' : 0,
          marginRight: this.state[`div-${div + 1}-margin-right`] ? this.state[`div-${div + 1}-margin-right`] + 'px' : 0,
          marginBottom: this.state[`div-${div + 1}-margin-bottom`] ? this.state[`div-${div + 1}-margin-bottom`] + 'px' : 0,
          marginLeft: this.state[`div-${div + 1}-margin-left`] ? this.state[`div-${div + 1}-margin-left`] + 'px' : 0,
          flex: this.state[`div-${div + 1}`],
          alignSelf: this.state[`div-${div + 1}-align-self`]
        }
    
    }
  

  render() {
   
    let styles = {
      parent: {
        border: 'solid 5px #02173E',
        width: '100%',
        height: '500px',
        maxWidth:'700px',
        minWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        borderRadius:'3px',
        position:'relative',
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
          order: this.state['div-1-order'],
          flex: this.state['div-1'],
          alignSelf: this.state[`div-1-align-self`],
          marginTop: this.state[`div-1-margin-top`] ? this.state[`div-1-margin-top`] + 'px' : 0,
          marginRight: this.state[`div-1-margin-right`] ? this.state[`div-1-margin-right`] + 'px' : 0,
          marginBottom: this.state[`div-1-margin-bottom`] ? this.state[`div-1-margin-bottom`] + 'px' : 0,
          marginLeft: this.state[`div-1-margin-left`] ? this.state[`div-1-margin-left`] + 'px' : 0,
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
         return <div key={div} className='child-container'>
                  <h2>Child {div + 1}</h2>
                  <div className='child-flex-options'>
                    <h3>Flex:</h3>
                    <div>Flex: <input type='number' placeholder='example: 1' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}`} value={this.state[`div-${div + 1}`]}/></div>
                  </div>

                  <div className='child-flex-options'>
                    <h3>Order:</h3>
                    <div>Order: <input type='number' placeholder='example: 1' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-order`} value={this.state[`div-${div + 1}-order`]}/></div>
                  </div>

                  <div className='child-flex-options'>
                    <AlignSelf changeHandler={this.inputChangeHandler} alignSelf={this.state[`div-${div + 1}-align-self`]} propName={`div-${div + 1}-align-self`} />
                  </div>

                  <div className='child-flex-options for-margin'>
                    <h3>margin:</h3>
                    <div className='child-option-margin'>
                      <div>
                        <label>Top: </label>
                        <input type='number' placeholder='Top' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-top`} value={this.state[`div-${div + 1}-margin-top`]}/>
                      </div>
                      <div>
                        <label>Right: </label>
                      <input type='number' placeholder='right' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-right`} value={this.state[`div-${div + 1}-margin-right`]}/>
                      </div>
                      <div>
                        <label>Bottom: </label>
                        <input type='number' placeholder='bottom' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-bottom`} value={this.state[`div-${div + 1}-margin-bottom`]}/>
                      </div>
                      <div>
                        <label>Left: </label>
                      <input type='number' placeholder='left' onChange={(e)=>this.inputChangeHandler(e.target.name, e.target.value)} key={div + 1} name={`div-${div + 1}-margin-left`} value={this.state[`div-${div + 1}-margin-left`]}/>
                      </div>
                    </div>
                  </div>
                </div>
   })

    let divArray = this.state.childrenArray.map(div => {
          return <div key={div} className='generated-div' style={this.formattedChild(div)}>
          <div className='child-title'>child</div>
          {div + 1}
          </div>
    })

    return (
      <div className="Main">
         
          <Sidebar color={this.state.color} reset={this.reset} myToggle={this.myToggle} toggle={this.state.toggle} flexChildren={this.state.flexChildren} changeHandler={this.changeHandler} inputChangeHandler={this.inputChangeHandler}>
            <FlexDirection inputChangeHandler={this.inputChangeHandler}/>
            <FlexWrap inputChangeHandler={this.inputChangeHandler} />
            <JustifyContent inputChangeHandler={this.inputChangeHandler} />
            <AlignItems inputChangeHandler={this.inputChangeHandler}/>
            <AlignContent inputChangeHandler={this.inputChangeHandler}/>
            <Child div1={this.state['div-1']} divInputs={divInputs} inputChangeHandler={this.inputChangeHandler} />
            
          </Sidebar>
          <div>
            <div style={styles.parent}>
            <h2 className='parent-classname'>Parent</h2>
              {this.state.flexChildren ? divArray : <div className='generated-div' style={styles.child}><div className='child-title'>child</div>1</div>}
            </div>
          </div>
          <CssOutput
          count={this.state.childrenArray}
          justifyContent={this.state.justifyContent}
          alignItems={this.state.alignItems}
          flexDirection={this.state.flexDirection}
          flexWrap={this.state.flexWrap}
          alignContent={this.state.alignContent}
          toggle={this.state.toggle}
          />

          <div className='attribution'>
          <div>
            <h3> Made with </h3>
           <h3 className='made-with'>
           <div>&lt;</div><div>3</div></h3>
          <h3>by</h3>
          <h3>&nbsp;<a href='https://www.joshborup.com'>Josh&nbsp;Borup</a> </h3>
          </div>
        </div>
        <h1>Learn Flexbox</h1>
      </div>
    );
  }
}

export default App;
