import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Addnewplat} from '../../actions/Plataction'
import Navbar from '../navbar/Nav'
import axios from 'axios'
import Fade from 'react-reveal/Fade';





export class AddPlat extends Component {
  
  postdate(e) {


  
  
    
        
        axios.post('http://localhost:3004/plat',{
          "name": this.name.value,
          "prix": this.salary.value,
         
          "image": this.image.value
        })
            .then(response => {
              console.log(response)
              alert('succes')
              window.location.reload(); 
            })
            .catch(error => {
              console.log(error)
              alert(error)
            })
      

  e.preventDefault();
   }
   render() {
    return (
      <Fade left>
         
            <div>
            <Navbar/>
            <div className="border">
            <h1 className='title'>Add new menu</h1>
 <form className="ui inveted segment" onSubmit={(e) => this.postdate(e)}>



 <div className='filed'>

<div class="ui labeled input">
  <div class="ui label">
    plat
  </div>
  <input type="text" placeholder="PLAT" ref={(input) => this.name = input}  name="name" required  />
</div>
</div>

<div className='filed'>
<div class="ui labeled input">
  <div class="ui label">
    prix
  </div>
  <input type="text" placeholder="PRIX" ref={(input) => this.salary = input}   required  />
</div>
</div>

<div className='filed'>
<div class="ui labeled input">
  <div class="ui label">
    IMAGE
  </div>
  <input type="text" placeholder="IMAGE" ref={(input) => this.image = input}  />
</div>
</div>




  



  
  <div class="filed">
    <br></br>
   <div class="ui buttons">
  <button class="ui button" type="submit">Cancel</button>
  <div class="or"></div>
  <button class="ui positive button active"  type="submit">Save</button>
</div>
</div>
 </form>
</div>
</div>
    </Fade>    
    )
} }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) =>({
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlat)
