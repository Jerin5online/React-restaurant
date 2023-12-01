import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <>
    
    <Link style={{textDecoration:"none"}} to={`/restaurantview/${restaurant.id}`}>
    <Card style={{ width: '80%', marginTop:"20px" }}>
      <Card.Img height={"280px"} variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title className='text-center'>{restaurant.name}</Card.Title>
        <hr/>
        <Card.Text className='d-flex justify-content-between'>
          <p  style={{fontWeight:"bolder"}} >{restaurant.neighborhood}</p>
          <p style={{fontWeight:"bolder"}}>{restaurant.cuisine_type}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    
    
    </Link>
    </>
  )
}

export default RestCard
