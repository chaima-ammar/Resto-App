import React, { Component,useState } from 'react';
import { connect } from 'react-redux';
import { delatcartcarte } from '../../actions/Plataction'
import Axios from 'axios';






let quantiter=[];

export const usersItem = ({ cardData, delet }) => {

 function handelChange(event){
    quantiter[0]=event.target.value }


 function setquantiteData(cardData){
   Axios.put(`http://localhost:3004/ListeCarte/${cardData.id}`,{
"name" : cardData.name,
"image":cardData.image,
"prix":cardData.prix,
"quantiter":quantiter[0],

   })
   .then(res=> {
    console.log(res)
    window.location.reload()
   
  })

   .catch(error => {
    console.log(error)
    
  })
   

 }









  
 
  return (
 
<div className='cards'>
<div className="card" style={{width:"18rem"}} >

<img src={cardData.image}   className="card-img-top image"  alt="..."></img> 

<div class="card-body">
<h5 class="card-title  "> Plat:  {cardData.name}</h5>
<p class="card-text">Prix  : {cardData.prix} DT</p>

<div className ='button'>
<a href="#"  className="btn btn-danger "  onClick={() => delet(cardData.id)}>  <i class="fas fa-trash-alt"></i></a>
<button onClick={()=>setquantiteData(cardData)} className='ajouter-font'><i class="fas fa-cart-plus"></i></button>
<input type='number'  className='input-quantité' onChange = {(event) => handelChange(event)}/>
</div>
</div>

</div>
</div>





  );
};


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
              delet: (userId) => dispatch(delatcartcarte(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(usersItem);




