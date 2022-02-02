import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./General.module.css";

import React, { useEffect, useState } from "react";

import { Container, Card, Col } from "react-bootstrap";

function General() {

 const [data, setData] = useState([]);

 useEffect(() => {

  const url = `https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=22b43392db4544eaab972e7575d0942d`;

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

  <Container className={classes.business}>

   <h2>General</h2>

  </Container>

  {data.map((dt) => (

   <Container >

  <Card className={classes.card} key={dt}>

  <Card.Body>
   <Card.Img variant="top" src={dt.urlToImage} className={classes.img}></Card.Img>

    <Card.Link className={classes.link} href={dt.url}>

   <Card.Title>{dt.title}</Card.Title>

    </Card.Link>
    <Card.Text>
      {dt.description}
    </Card.Text>

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



export default General;