import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./Breaking.module.css";

import React, { useEffect, useState } from "react";

import { Container, Card, Col } from "react-bootstrap";

function Breaking() {

 const [data, setData] = useState([]);

 useEffect(() => {
    let source = 'the-times-of-india';
    let apiKey = '759d795b61d9454abd4159d57acd4eae'

  const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

  fetch(url)

 .then((res) => {

  return res.json();

 })

 .then((data) => {

 setData(data.articles);

});

}, []);

 if (data) {

  return (

 <>
 

 

  {data.map((dt) => (

   <Container >

  <Card className={classes.card} key={dt}>


  <Card.Body>
   <Card.Img variant="top" src={dt.urlToImage} className={classes.img}></Card.Img>

    <Card.Link className={classes.link} href={dt.url}>

   <Card.Title><h6>{dt.title}</h6></Card.Title>

    </Card.Link>
    

   </Card.Body>

  </Card>

  {/* 

  <div key={dt}>{dt.title}</div> */}

   </Container>

  ))}

 </>

  );

 } else {

  <>

 <div>

  <h1>Sorry no data received</h1>

 </div>

  </>;

 }

}



export default Breaking;