import "bootstrap/dist/css/bootstrap.min.css";

import classes from './Home.module.css';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,Carousel, Card,
} from 'react-bootstrap';
import modi from "../../assests/modi.webp";
import ipl from "../../assests/IPL.webp";
import mars from "../../assests/Mars_life (1).webp";
import movie from "../../assests/movie.webp";
import Breaking from './Breaking';

console.log("home");

function Home(){


    return(<>

   
    <Container className={classes.container}>
<Row>
  
  <Col lg={4} sm={12}>
    <h5 className={classes.tag}>Breaking news</h5>
    <marquee class="marquee" width="100%" direction="up" height="300px" onmouseover="this.stop();" onmouseout="this.start();">
  
  {/* <div class="whole_content" id="newsAccordion" style="display: grid;">
  </div> */}
  <Breaking></Breaking>
</marquee>
</Col>






{/* <div class="col-lg-8 col-sm-12 "> */}
<Col lg={8} sm={12}>
<Carousel >
  <Carousel.Item >
    <img
      className="d-block w-100 "
      src={modi}
      alt="First slide"
    />
    <Carousel.Caption>
    <h5> PM Modi</h5>
    <p>PM Modi to attend G20 Extraordinary Leaders’ Summit on Afghanistan tomorrow</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ipl}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h5>IPL</h5>
          <p>Kohli says RCB focused on winning, 'Qualifiers, Eliminator just terms to create pressure'</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={mars}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h5>Mission to Mars near Mitzpe Ramon.</h5>
          <p> Scientists participate in a demonstration of an experiment led by Austrian and Israeli agencies</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Col>
</Row>
</Container>





<Container>

<div class="sub_heading"><h3>Movie</h3></div>
<Row>
 
  <Col lg={4}>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie} />
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Text>
    Vicky Kaushal, Shoojit Sircar speak about Sardar Udham at India Today Conclave 2021.
    </Card.Text>
   
  </Card.Body>
</Card>
    </Col>



  {/* <div class="col-lg-8"  style="display: grid;  grid-template-columns: 1fr 1fr 1fr ; gap:1px; "> */}
    
    
      <Col lg={8} className={classes.column}>
        
         
          <Card style={{ width: '14rem' }} className={classes.card}>
            <Card.Img variant="top" src={movie}/>
            <Card.Body>
              <Card.Title>news abt tesla</Card.Title>
              </Card.Body>
              </Card>
        
        
          
          <Card style={{ width: '14rem' }} className={classes.card}>
            <Card.Img variant="top" src={modi}/>
            <Card.Body>
              <Card.Title>Tiger Shroff wraps up</Card.Title>
              </Card.Body>
              </Card>
       
        
          
          <Card style={{ width: '14rem' }} className={classes.card}>
            <Card.Img variant="top" src={ipl}/>
            <Card.Body>
              <Card.Title>Tiger Shroff wraps up</Card.Title>
              </Card.Body>
              </Card>
        
        
      
    
        
          
          <Card style={{ width: '14rem' }} className={classes.card}>
            <Card.Img variant="top" src={mars} />
            <Card.Body>
              <Card.Title>I&B Ministry  </Card.Title>
              </Card.Body>
              </Card>
          
        
        
         
          <Card style={{ width: '14rem' }} className={classes.card}>
            <Card.Img variant="top" src={modi}/>
            <Card.Body>
              <Card.Title>Aishwariya rai </Card.Title>
              </Card.Body>
              </Card>
       
        
     
      
        
        <Card style={{ width: '14rem' }} className={classes.card}>
            <Card.Img variant="top" src={mars} />
            <Card.Body>
              <Card.Title>Nushrratt Bharuccha </Card.Title>
              </Card.Body>
              </Card>
      
      
    
        </Col>

    </Row>
</Container>

  







  
          
          
       
        
            
  
  
<Container fluid className={classes.footer}>
{/* <div class="container-fluid" id="footer"> */}
    <h1 > The Public Mirror</h1>
    



  <Card style={{ width: '13rem' }} className={classes.card}>
  <Card.Body>
    <Card.Title className={classes.link}>Publications</Card.Title>
    
    
    <Card.Link href="#" className={classes.link}>Business mirror</Card.Link>
    <Card.Link href="#" className={classes.link}>Reader's digest</Card.Link>
    <Card.Link href="#" className={classes.link}>Business mirror</Card.Link>
    <Card.Link href="#" className={classes.link}>Reader's digest</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '13rem' }} className={classes.card}>
  <Card.Body>
    <Card.Title>Publications</Card.Title>
    
    
    <Card.Link href="#" className={classes.link}>Business mirror</Card.Link>
    <Card.Link href="#" className={classes.link}>Reader's digest</Card.Link>
    <Card.Link href="#" className={classes.link}>Business mirror</Card.Link>
    <Card.Link href="#" className={classes.link}>Reader's digest</Card.Link>
  </Card.Body>
</Card>



<Card style={{ width: '13rem' }} className={classes.card}>
  <Card.Body>
    <Card.Title>Publications</Card.Title>
   
    
    <Card.Link href="#" className={classes.link}>Business mirror</Card.Link>
    <Card.Link href="#" className={classes.link}>Reader's digest</Card.Link>
    <Card.Link href="#" className={classes.link}>Business mirror</Card.Link>
    <Card.Link href="#"className={classes.link}>Reader's digest</Card.Link>
  </Card.Body>
</Card>


  
  </Container>
    
    
    </>);
}

export default Home;