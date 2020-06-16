import {  ADD_PLATE, DELETE_PLATE,  GET_ALL_Plat,
  GET_ALL_CARD,DELETECARTE , GET_DATA_response_CART,UPDATE_PLATE, 
  } from './types';
import Axios from 'axios';
import {URL} from './baseurl'




/* get all Plat */

export const getAllPlat = (payload) => ({
  type: GET_ALL_Plat,
  payload,
});

export function getplatFromApi() {
  return (dispatch) =>
    Axios.get(URL+'plat').then((res) =>
      dispatch(getAllPlat(res.data))
    );
}

 /* get all carte */ 
 export const getAllUsCard= (payload) => ({
  type:GET_ALL_CARD,
  payload,
  });

export function getcarteFromApi() {
  return (dispatch) =>
    Axios.get(URL+'ListeCarte').then((res) =>
      dispatch(getAllUsCard(res.data))
    );
}

/* add new plat */
export function Addnewplat(name,prix,sup){
  return(dispatch)=>{
      return Axios.post(URL+'plat',{
        "name": name,
        "prix": prix,
        "sup": sup,
       
      })
      .then((response)=>{ alert("success")
       
      })
  }
}

/* Add plat to cart*/
export function Addplattocart(el){
  return(dispatch)=>{
      return Axios.post(URL+'ListeCarte',{
        "name": el.name,
        "prix": el.prix,
        "image": el.image,
       
      })
      .then((response)=>{ alert("success")
        dispatch(loadRespence(el))
      })
  }
}
export function loadRespence(el){
  return {
  type: GET_DATA_response_CART,
  payload: el
  }
 }
 /*update user */
 export const updateplattocart = (payload) =>  {
  return {
    type: UPDATE_PLATE,
    payload : payload
  }

 }
/* add  PLAT */
export const addUser = (payload) => ({
  type: ADD_PLATE,
  payload,
});

/*delette PLAT */

export const deleteUser = (payload) => ({
  type: DELETE_PLATE,
  payload,
});

/*delate carde */
export const  delatcartcarte = (id)  => (dispatch) =>{
  return   Axios.delete(URL+`ListeCarte/${id}`)
  .then((res)=>{ dispatch(delatecart(id))})
   
}


export const delatecart =(payload) => ( {
  type: DELETECARTE,
  payload,
})
