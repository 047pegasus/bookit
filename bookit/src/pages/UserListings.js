import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import {Table} from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import "./styles/Listings.style.css"
import illustration2 from "../assets/illustration2.svg"

const UserListings = () => {
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);
  
  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  const headers = { Authorization: `Bearer ${user._accessToken}` }


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve the user email from local storage or wherever it is stored in your frontend
    const userEmail = localStorage.getItem('email');

    // Check if the email is available
    if (!userEmail) {
      setError('User email is not available');
      setLoading(false);
      return;
    }

    // Make a request to the backend API
    fetch(`http://localhost:5000/api/listings?email=${userEmail}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        return response.json();
      })
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // This useEffect runs only once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const userEmail = localStorage.getItem('email');
  console.log(listings);

  const handleDelete = (listtitle,listid) => {
    // Make a request to the backend API using delete method
    fetch(`http://localhost:5000/api/listingsDelete?email=${userEmail}&title=${listtitle}&id=${listid}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete listing');
      }
      return response.json();
    })
    .then((data) => {
      setListings(data);
      setLoading(false);
      window.location.reload();
    })
  };


  return (
    <>
    <NavBar/>
    <div className='container-listings'>
      <h1>Your Book Listings</h1>
     {// a react-boostrap table of all the listings of the user aloing with the edit and delete buttons
     }
     <div className='listcontainer'>
      <Table responsive variant="dark" hover bordered className="table">
        <thead>
          <tr>
            <th scope="col">Book Unique ID</th>
            <th scope="col">Book Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Book Cover</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr>
              <td>{listing._id}</td>
              <td>{listing.title}</td>
              <td>{listing.author}</td>
              <td>{listing.genre}</td>
              <td>{listing.price}</td>
              <td>{listing.description}</td>
              <td>
                <img src={`data:image/jpeg;base64,${listing.cover.data.data}`} alt="Book Cover" width="100" height="100"/>      
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(listing.title , listing._id)}>Delete Listing</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <img src={illustration2} alt="" width="400" height="200" className='imgil'></img>
    </div>

    </>
  );
}

export default UserListings;

