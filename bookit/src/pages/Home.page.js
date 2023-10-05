import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import NavBar from '../components/NavBar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
//import css
import '../pages/Home.css';

const Home = () => {
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);

  
  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  const headers = { Authorization: `Bearer ${user._accessToken}` }
  let card = "Card";
  let text="Text";
  let img="https://picsum.photos/200/300";
  

  return(
    <>
    <NavBar />
         
      <div className="hero-container">
    <Row xs={3} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col key={idx}>
          <Card text="success" className='card'>
            <Card.Img variant="top" src={img} height={300} />
            <Card.Body>
              <Card.Title>{card}</Card.Title>
              <Card.Text>
                {text}
              </Card.Text>
              <Button variant="primary">View Listing</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </>
  )
}

export default Home;
