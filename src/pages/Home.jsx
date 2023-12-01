// import React, { useEffect } from 'react'
// import { Col, Row } from 'react-bootstrap'
// import RestCard from '../components/RestCard'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchrestaurant } from '../redux/restaurantSlice'

// function Home() {

// //accessing the state
//   const allrestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
//   console.log(allrestaurant);

//   const dispatch = useDispatch()

// //to update value in state by using thunk api call

//   useEffect(()=>{

//     dispatch(fetchrestaurant())

//   },[])
//   return (

    
//   <Row className='p-3 my-5'>
//             {allrestaurant?.length>0 ?
//             allrestaurant.map ((restaurant)=> (<Col sm={6} md={4} className='px-5 py-3'>
//                 <RestCard restaurant={restaurant}/>
//             </Col >)):<p>nothing to diplay</p>}
            
//         </Row>
    
//   )
// }

// export default Home

import React from 'react'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import {  fetchrestaurant, search } from '../redux/restaurantSlice';


function Home() {
 
  const allrestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
   console.log(allrestaurant);
   const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchrestaurant())

  }, [])
  return (
    <div>
      
<div  style={{background:'url(https://img.freepik.com/premium-photo/italian-food-composition-with-big-space-middle_23-2147686550.jpg?w=1380)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

<div className="d-flex justify-content-center align-items-center flex-column" style={{minHeight:'610px'}}>
<h1 className='text-light ' style={{textAlign:'center',fontFamily:'Poppins',fontWeight:'bold'}}>Making memories with each <br /> flavorful bite. </h1> 




<form class="d-flex me-5 ">
        
          <div class="input-group mb-3">
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" class="form-control" placeholder="Search by Neighborhood" style={{width:"300px"}}/>
    <button  class="btn btn-dark my-2 my-sm-0 text-white ms-2" type="submit">Search</button> 
    </div>
      </form>
           
</div>
</div>
<br></br>

     <div className="row py-2 px-5">

     { allrestaurant?.length>0 ?
  allrestaurant?.map((items)=>(
    <div className="col-lg-3">
<RestCard restaurant={items}/>
    </div>
   )):<p>No Restaurant Avaliable</p>
}

     </div>

     
      </div>
   
  )
}

export default Home