import React ,{ Component}from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar/sideBar';
import MastHead from './masthead';
import Container from './Container/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component{
  state={sideBarStyle:{width:'15%'},containerStyle:{width:'85%'},
  content:{Closure:{Definition:'',Theory:'',Example:'',Related:''},
  Arrow:{Define:'',Theory:'',Eg:'',Related:''},
  Function:{Definition:'',Theory:'',Example:'',Related:''},
  ES6:{Definition:'',Theory:'',Example:'',Related:''}}};

  vconciseContent={}
  vconciseNames={}


  conciseContent=()=>{
    let temp={}
    for (var key in this.state.content) {
      let arr=[]
      for(var key2 in this.state.content[key]){
        arr.push([key2])
        
      }
      temp[key]=arr;
      for (var key in this.state.content) {
        let name=this.state.content[key]
      }

      
  }
  this.vconciseContent=temp;
  console.log(temp)
  }

  render(){
    this.conciseContent()
  return (
    <div className="App">
      <Router>
      <MastHead/>
      <SideBar State={this.state.sideBarStyle} content={this.vconciseContent}/>
      <Container State={this.state.containerStyle}/>
      </Router>
    </div>
  );
}
}


export default App;
