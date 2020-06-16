import React, { Component ,useState,useEffect} from 'react';
import { connect } from 'react-redux';
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import { deleteUser,Addplattocart,updateplattocart } from '../actions/Plataction';
import Fade from 'react-reveal/Fade';
import 'materialize-css';



let name ="" ; let Lastname =""




export const PlatItem = ({ el, delet,add,update }) => {
  const [login, setlogin] = useState(false)
  useEffect(() => {
    name = localStorage.getItem("name")
    Lastname = localStorage.getItem("lastname")
    if (name!=="" && Lastname !==""  && name !== null && Lastname !==null)
    { console.log(name) 
      setlogin(true)
    }
  })
 
 
  function popup() {
    console.log(name,Lastname)
    alert("you do not have access to add to the basket")
  }
  return (

    <Fade left>
<div className='users-item'>
<div className='ui flex'>

     <div className="flex">
       </div>
<div className='cards'>
<div className="carte" style={{width:"18rem"}} >

<img src={el.image}   className="card-img-top "  alt="..."></img> 

<div class="card-body">
<h5 class="card-title  "> Plat:  {el.name}</h5>
<p class="card-text">Prix  : {el.prix} DT</p>


<div className="flexcart">
      {login ? <button className="ui inverted yellow  button" onClick={() => add (el)}><i class="fas fa-cart-plus icon"></i></button> :<button onClick={popup}><i class="fas fa-cart-plus"></i></button>}
   {name == "Boss"  && Lastname == "Boss"?   <button className="ui inverted red  button" onClick={() => delet (el.id)}><i class="trash icon"></i> </button> :""  }
{name == "Boss"  && Lastname == "Boss"?  <button className="ui inverted green button" onClick={() =>update(el.id)}>  <Link to="modifier"> <i class="fas fa-user-edit "></i></Link> </button> :"" }
      

</div>
</div>
</div>

</div>
</div>

</div>
    
     </Fade>       














//     <Fade left>
//     <div className="users-item">
 
//   <div class="ui card">
//     <div className="flex">
     
//     </div>
//     <div class="image" height="20px">
//       <img  className='image'   src={el.image} />
//     </div>
//     <div class="content">
//       <div class="name">
//         <h5> <em className="colorgray">Plat :</em> {el.name}</h5>
//       </div>
//       <div class="prix">
//         <h5><em className="colorgray">Price :</em>{el.prix} DT</h5>
//       </div>
      
 
   
    
//       <div className="flexcart">
//       {login ? <button className="ui inverted yellow  button" onClick={() => add (el)}><i class="shopping basket icon"></i></button> :<button onClick={popup}> <i class="shopping basket icon"></i></button>}
//   {name == "admin"  && Lastname == "admin"?   <button className="ui inverted red  button" onClick={() => delet (el.id)}><i class="trash icon"></i> </button> :""  }
// {name == "admin"  && Lastname == "admin"?  <button className="ui inverted red  button" onClick={() =>update(el.id)}>  <Link to="modifier"> 🛠</Link> </button> :"" }
//       </div>
//     </div>
//   </div>
// </div>
// </Fade>








  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  delet: (cardid) => dispatch(deleteUser(cardid)),
  add : (card) => dispatch(Addplattocart(card)),
  update : (card) => dispatch(updateplattocart(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlatItem);
