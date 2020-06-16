import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../navbar/Nav'
import Axios from 'axios'

export class ModifierPlat extends Component {
        id  = React.createRef()
        form = React.createRef()
       state = {
        disabled : false
       } 
    componentDidMount(){
          console.log(this.props.card.plat)
          var x = this.props.card.plat
          var id = this.props.card.idupdateplat
          if ( id !== undefined && x.length > 0)
          {
            console.log(id , x)
          let add= id - 1;
          this.id.current.value=add
         let name =  x[add].name;
         let prix =  x[add].prix;
         let sup =   x[add].sup;
         let image = x[add].image;
         this.nom.value= name
         this.prix.value = prix
         this.image.value = image}
          
          else {
          console.log(this.form.current)  
          this.form.current.innerHTML='<h1>your data is changed</h1>'
          }
        }
      
   senddat() {
       let id = this.id.current.value +1
       console.log(id)
  Axios.put(`http://localhost:3004/plat/${id}` , {
   "name": this.nom.value,
   "prix": this.prix.value,
   "image":this.image.value
   })
   .then (res => alert("succes"),
           window.location.reload())
         
   .catch( error => alert(error))

   }

    render() {
        return (


<div>

<div>
<Nav></Nav> 
            <div className="border">
            <h1 className='title'>MODIFIER CARD</h1>
 <form  ref = {this.form} className="ui inveted segment" >
 <p><span ref={this.id}></span></p> 


 <div className='filed'>

<div class="ui labeled input">
  <div class="ui label bare">
    plat
  </div>
  <input  ref = {(input) => this.nom =input} type="text" placeholder="PLAT"  name="name"  />
</div>
</div>

<div className='filed'>
<div class="ui labeled input">
  <div class="ui label bare">
    prix
  </div>
  <input  ref = {(input) => this.prix =input}  type="text" placeholder="PRIX"    />
</div>
</div>

<div className='filed'>
<div class="ui labeled input">
  <div class="ui label">
    IMAGE
  </div>
  <input  ref = {(input) => this.image =input} type="text" placeholder="IMAGE"  />
</div>
</div>




  



  
  <div class="filed">
    <br></br>
   <div class="ui buttons">
  <button class="ui button" type="submit">Cancel</button>
  <div class="or"></div>
  <button class="ui positive button active"  onClick = {() =>this.senddat()}   type="submit">Save</button>
</div>
</div>
 </form>
</div>
</div>





</div>
























        )
    }
}

const mapStateToProps = (state) => ({
  
    card: state.card,

});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifierPlat)



{/*//             <div>
//                   <div>
//       <Nav></Nav>
//       <div className="contenaire">
//       <div className="ui inverted segment">


// <form  ref = {this.form} class="ui success form inverted">
//     <p><span ref={this.id}></span></p> 
//     <h4 class="ui dividing header" style={{color:"white"}}>Modifier palt</h4>
//     <div class="field">
//    <label>Nom</label>
//     <input ref = {(input) => this.nom =input}   type="text" name="name" placeholder="name" />
//    </div>
//    <div class="field">
//   <label>prix</label>
//    <input ref = {(input) => this.prix =input}   type="text" name="prix" placeholder="prix" />
//   </div>
  
//         <div class="field">
//      <label>image</label>
//     <input ref = {(input) => this.image =input}   type="text" name="image" placeholder="prix" disabled />
//       </div>
//         <div  class="ui submit button" onClick = {() =>this.senddat()}  >Submit</div>
//     </form>
//   </div>
//   </div>
//   </div>
//             </div>*/}