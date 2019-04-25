import React, {Component} from 'react'
import Person from './Person/Person'
import './App.css';

class App extends Component {
    /*
    state用于定义某些属性并改变这些属性
    props用于属性传值
     */
    state={
        persons:[
            {name:"zzx",age:"22"},
            {name:"yj",age:"19"},
            {name:"dd",age:"18"}
        ]
    };
    switchnamehandler= () =>{
       this.setState({
           persons:[
               {name:"张兆翔",age:"22"},
               {name:"游佳",age:"19"},
               {name:"dd",age:"18"}
           ]
       })
    };
    render() {
        return (
            <div className="App">
                <h1>Hello Word</h1>
                <button onClick={this.switchnamehandler}>更改状态值</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>你好，React！</Person>
            </div>
        )
    };
}

export default App;
