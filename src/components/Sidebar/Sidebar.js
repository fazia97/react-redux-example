import React from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
const Sidebar = () => {
   const {name}=useSelector(state=>state.user)
    return <div className='sidebar'>
             <ul>
                <li><a href='#'>home</a></li> 
                <li><a href='#'>about</a></li> 
                <li><a href='#'>contact</a></li> 
                <li><a href='#'>blog</a></li> 
                <li><a href='#'>hello {name}</a></li> 
             </ul> 
           </div>;
}
export default Sidebar;