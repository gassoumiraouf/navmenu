import React from 'react';
import NavItem from './NavItem'
const links = [
    {name: 'home', to:'#'},
    {name: 'services', to :'#'},
    {name: 'contact', to :'#'}]
  
  

const Navmenu =()=> {
return <div className="container">

    <ul>
        <li><NavItem items={links}/> </li>
    </ul>
</div>
}

export default Navmenu