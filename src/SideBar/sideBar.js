import  React,{Component} from 'react';
import './sidebar.css';
import List from './Lists/List';
import SideBarSide from './SideBarSide';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class SideBar extends Component{//gets the style and content from App.js

    state={toggle:true}
    pointed=0;
//content={'Chapter':['SubTopic',..],'Chapter':['SubTopic',..],'Chapter':['SubTopic',..]}

    renderList=()=>{ //render the list of the Side Bar topics
        // console.log('in renderlist')
        let arr=[]
        for (var key in (this.props.content)) {
            // console.log(this.props.content[key])
            arr.push(<List giveHoverList={this.getHoverList} key={key} datakey={key} name={key}/>)
            }
            return(arr)
          }

    getHoverList=(e)=>{//gets the value from the onmouse hover event in List component
        // console.log(e)
        
        this.setState((prevstate)=>{
            let t=prevstate.toggle;
            t=!t;
            return({toggle:t})
        })
        // ,()=>{console.log(this.state)})
        
        let temp=this.props.content[e]
        this.pointed=temp;

    }
          
    

   
    

    render(){
        // console.log(this.props.content)


        return(<div id="sidebar" style={{'width':this.props.State.width}}>
            <ul id='sidebar-ul'>
                {this.renderList()}


            </ul>
            <Link to='/AddChapter'>
            <div id='sidebar-addlist'>
                <div id='add'>
                    {/* <img alt='add image'
                    height='20px' width='auto'
                    src='https://p7.hiclipart.com/preview/27/906/465/symbol-cross-line-font-add.jpg'/> */}
                    Add
                </div>
            </div>
            </Link>
            <SideBarSide topic={this.pointed}/>
            




        </div>)
    }
}
export default SideBar;

//content reached the class sidebar