import React, { Component } from 'react';
import ScrollNavItem from './ScrollNavItem'
const nestedLinks =[
    {name: 'entepreneur'},
    {name: 'students'},
    {name: 'hobbyist'}]
// class NavItem extends Component {
//     render() {
//         this. props.items.map((el,index)
//         return (
//             <div>
            
//             <a href= {this.props.item.to} >{this.props.item.name}</a>  
//             </div>
//         );
//     }
// }

// export default NavItem;
class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {items}=this.props
        return ( <div>
            {items.map((el,index)=><a href={el.to} style= {{color : el.name ==='services' ? 'red' :'black'}}>{el.name}</a>)}
        </div> );
    }
}
 
export default NavItem;
