import React ,{Component} from 'react';
import './sidebarside.css';

class SideBarSide extends Component{
    //gets the array of the topics as props 

    renderList=()=>{
        console.log(this.props.topic)
        let arr=[];
        for ( var i in this.props.topic){
            arr.push(<li key={i} datakey={i} className='sidebar-sidebar-li1' onClick={(e)=>{this.getDetails(e)}}>
                <div >{this.props.topic[i]}</div> </li>)
        }
        return(arr)

    }
    getDetails=(e)=>{// ********* can also send attribute key if indexing number is not required
        console.log(e.target.parentElement.getAttribute('datakey'))

    }

    render(){
        console.log(this.props.topic) // get the topic of the list
        //  hovered so as to give info of the page to be rendered in the display when clicked



        return(<div id='sidebar-sidebar-cont'>
        <div id='sidebar-sidebar'>
            <ul>
                {this.renderList()}
            
            </ul>


        </div>
    </div>)
    }
}

    export default SideBarSide;