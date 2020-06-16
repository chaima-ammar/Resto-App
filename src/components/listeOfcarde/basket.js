import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getcarteFromApi } from '../../actions/Plataction';
import axios from 'axios'
import Cardchild from './card-basket';
import Navbar from '../navbar/Nav'
import { URL } from '../../actions/baseurl'



let somme = ""
let nombreaticle = ""
export class Mycard extends Component {
  form = React.createRef()
  btn = React.createRef()
  alert = React.createRef()
  unmount = React.createRef()


  componentDidMount() {

    this.props.getcarteFromApi()
    console.log(this.btn.current.style = 'visibility: hidden;')
    setTimeout(() => 
    { this.somme()
   
    }, 200); 
  }
 
  somme() {
    let a = []
   
    nombreaticle = this.props.card.cardt.length;
    a = this.props.card.cardt.map(el =>  (Number(el.prix) * Number(el.quantiter )))
    somme = a.reduce((a, b) => +a + (+b))
    console.log(a)
    this.form.current.innerHTML = `
   



    <div class="ui vertical steps">
    <div class="completed step">
      <i class="truck icon"></i>
      <div class="content">
        <div class="title">
        <ul class="list">
         <li> La somme de votre panier est ${somme} DT </li>
       <li>Number of item : ${nombreaticle} </li>
       </ul></div>
       
    </div>
    
    





    `
    this.form.current.style.color = "red"
    this.form.current.style.width = "1200px"
    console.log(this.btn.current.style = 'visibility: visible;')

  }
  componentWillUnmount = () => {
    this.unmount.current.innerHTML = "<h1>Hey thanks for your order!</h1>"

  }
  delateallcarte = () => {
    let tabid = [];
    tabid = this.props.card.cardt.map(el => el.id)
    for (let i = 0; i < nombreaticle; i++) {
      axios.delete(URL + `ListeCarte/${tabid[i]}`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

  }
  orderbutton() {
    let date = Date(Date.now()).toString().substring(0, 25)
    axios.post(URL + 'Order', ({
      "somme": somme,
      "nombrearticle": nombreaticle,
      "date": date
    }))
      .then((res) => alert(res), this.delateallcarte(), this.componentWillUnmount())

      .catch((error) => alert(error))


  }
  render() {
    const { card } = this.props;
    return (
      <div>


        <Navbar></Navbar>
        
       
        <p className="centre-item" ref={this.btn}>

        <button class="ui inverted green button" onClick={() => this.orderbutton()}>to order</button></p>

        
        <div ref={this.unmount}>
          <br />
           <div ref={this.form} className="positionleft">
          </div>{/*<button className="Positionright ui inverted green button" onClick={() => this.somme()}>Calculate sum</button>  */}

          <br /><br/><br/>
          <div className="flexcart">
            {card.cardt.map((el, i) => (
              <Cardchild key={i} cardData={el} />
            ))}
          
          </div>
         

          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({
  getcarteFromApi: () => dispatch(getcarteFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mycard);
