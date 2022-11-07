import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';

const App = () => {
  return ( 
               <div className='App'>
                  <Header/>
                  <div className='main'>
                     <Sidebar/>
                     <Form/>
                  </div>
               </div>  
          );
}

export default App;