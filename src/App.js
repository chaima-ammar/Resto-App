import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//components
import PlatContainer from './components/card-map';
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Mycard from './components/listeOfcarde/basket'
import AddPlat from './components/addplat/add'
import ModifierPlat from './components/Modifierpalt/modifie'
import Footer from './components/footer/footer'
import './App.css'
import Slideshow  from './components/carousel'

function App() {
  return (
   
<div className='body'>

    <Provider store={store}>
<Slideshow/>
    <br/>
      <Router>
     
   <Switch>
   
     <Route exact path='/'><PlatContainer/></Route>
    <Route exact path='/card'><Mycard/>  </Route>
     <Route exact path='/login' component={Login}/>
   <Route exact path="/cards"><AddPlat/></Route>  
     <Route exact path="/signup"><Signup/></Route>
     <Route exact path="/modifier"><ModifierPlat/></Route>
   
   </Switch>

 </Router>
<Footer/>
    </Provider>
  
    </div>
  );
}

export default App;
