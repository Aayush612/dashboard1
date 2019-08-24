import React , {Component} from 'react';
import './list.css'

class List extends Component{

    render(){
        // console.log(this.props.name)
        // console.log('s')

        return(<li id='sidebar-ul-li' onMouseOver={(e)=>this.props.giveHoverList(this.props.datakey)}>
            <div id='sidebar-ul-li-highlighter'></div>
            {this.props.name}

        </li>)
    }
    console=(x)=>{
        console.log(this.props.datakey);
    }


}

export default List;