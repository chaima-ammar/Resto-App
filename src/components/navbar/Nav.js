import { connect } from "react-redux";
import React, { useEffect ,useState} from 'react'
import logo from '../../image/logo.jpg'
import { NavLink} from 'react-router-dom';
import Flip from 'react-reveal/Flip';



 function Nav({card}) {
  const [login ,setlogin] = useState(true)
 useEffect(() => {

   setTimeout( () => {   
   let  name = localStorage.getItem("name")
    let  Lastname = localStorage.getItem("lastname")
  if (name==="" && Lastname ===""  || name === null && Lastname ===null)
  { console.log("name " , name) 
    setlogin(false)
 }
},50)
})

  function clearlocalsotreg(){
    window.location.reload()
    alert("good bye")
    localStorage.clear()
   
  }
  
    return (
     
      <Flip className='ui green'>
  
      <Flip left>  
      <div  ><img  className="logo"src={logo} width="150px"></img></div>  
      </Flip>
      <div className="">
        <p className="">
        <em><h4></h4></em>     </p>

   <div className='item-menu'>
 <div className ='nav-item'>
     <div class=""><NavLink exact ="" to="/">Home</NavLink></div>
   
     </div>
     <div className ='nav-item'>
   {localStorage.getItem("name") == "Boss"  && localStorage.getItem("lastname") == "Boss"?    <em class=""><NavLink exact to="/cards">Add Menu</NavLink></em> :""}
</div>

<div className='nav-item'>
   <em class=""><NavLink exact  to="/card"><i class="fas fa-cart-plus"></i> {card.cardt.length}</NavLink></em>
   </div>
       <form className='nav-item'>
         
       {! login ?  <em class=""><NavLink exact  to="/login">login</NavLink></em> : "" }  


     { login ? <p className=""  >  <span > Hello {localStorage.getItem("name") + " " + localStorage.getItem("lastname")} </span> <div className="btn aqua-gradient" onClick={clearlocalsotreg}>Log out</div></p> : ""}
    </form>
    </div>


  </div>

    </Flip>   
    
    
        )
    }
 






    

const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
     
    





{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
    <em  ><img  className="navbar-brand"src={logo} width="100px"></img></em> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  {/*<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <em class="nav-link"><NavLink exact activeClassName="active" to="/">Home</NavLink></em>
      </li>
      <li class="nav-item">
  
   {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?    <em class="item"><NavLink exact activeClassName="active" to="/cards">Add Menu</NavLink></em> :""}
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
    <div class="nav-item">
    {! login ?  <em class="item"><NavLink exact activeClassName="active" to="/login">login</NavLink></em> : "" }  
  {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?    <em class="item"><NavLink exact activeClassName="active" to="/cards">Add Menu</NavLink></em> :""}
      </div>
      { login ? <p className="item  flex-bettwen pading"  >  <span > Hello {localStorage.getItem("name") + " " + localStorage.getItem("lastname")} </span> <div className="ui submit  violet button" onClick={clearlocalsotreg}>Log out</div></p> : ""}
    </form>
  </div>
</nav>
 */}






{/*// <div className="ui  segment">
 //   <div className="ui inverted secondary pointing menu">
      
 //   <em  ><img  className="imagleft"src={logo} width="100px"></img></em>  
 //   <div className=" padding-left flex">
     
 //     <em class="item"><NavLink exact activeClassName="active" to="/">Home</NavLink></em>
   
 //    {! login ?  <em class="item"><NavLink exact activeClassName="active" to="/login">login</NavLink></em> : "" }  
 //  {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?    <em class="item"><NavLink exact activeClassName="active" to="/cards">Add Menu</NavLink></em> :""}
   
 //   <em class="item"><NavLink exact activeClassName="active" to="/card"><i class="fas fa-cart-plus"></i> {card.cardt.length}</NavLink></em> 
 //    </div>
    
 //    </div>   
 //     { login ? <p className="item  flex-bettwen pading"  >  <span > Hello {localStorage.getItem("name") + " " + localStorage.getItem("lastname")} </span> <div className="ui submit  violet button" onClick={clearlocalsotreg}>Log out</div></p> : ""}
       
//          <br/> </div>*/}
 