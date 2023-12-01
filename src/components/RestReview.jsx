import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function RestReview({reviews}) {
  const [open,setOpen] = useState(false);
  console.log(reviews);
  return (
    <>
    <button onClick={()=>setOpen(!open)} type="button" class="btn btn-outline-info ms-3">Click here to View the Reviews</button>
    
    <Collapse in={open}>
    <div>

{reviews?.map((item)=>(<><hr />
<h5>Name : {item.name} Date:{item.date}</h5>
<p>Rating:{item.rating}</p>
<p>{item.comments} </p></>))}


</div>
      </Collapse>

</>
  )
}

export default RestReview
