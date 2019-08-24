import React,{Component} from 'react';
import './container.css';
import AddChapter from './AddChapter';
import { Route } from "react-router-dom";



class Container extends Component{

    render(){


        return(
            <div id='container' style={{'width':this.props.State.width}}>
                

            <Route path='/AddChapter' component={AddChapter}></Route>
            
            </div>
        )
    }
}

export default Container;