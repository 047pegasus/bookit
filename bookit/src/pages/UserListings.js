import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/user.context';
import NavBar from '../components/NavBar';
import {Table} from 'react-bootstrap';

const UserListings = () => {
  // Fetching user details from UserContext
  const { user } = useContext(UserContext);
  
  // To prove that the identity of the user, we are attaching
  // an Authorization Header with the request
  //const headers = { Authorization: `Bearer ${user._accessToken}` }


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
  
  const handleDelete = (btitle, bid) => {
    // Make a request to the backend API
    fetch(`http://localhost:5000/api/listingsDelete?email=${userEmail}&title=${btitle}&id=${bid}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete listing');
      }
      return response.json();
    })
    .then((data) => {
      setListings(data);
      setLoading(false);
    })
  };

  return (
    <>
    <NavBar/>
    <div>
      <h2>Your Book Listings</h2>
     {// a react-boostrap table of all the listings of the user aloing with the edit and delete buttons
     }
      <Table responsive variant="dark" hover bordered class="table">
        <thead>
          <tr>
            <th scope="col">Book Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr>
              <td>{listing.title}</td>
              <td>{listing.author}</td>
              <td>{listing.genre}</td>
              <td>{listing.price}</td>
              <td>{listing.description}</td>
              <td>
                <button className="btn btn-danger" onClick={handleDelete.bind(listing.title,listing._id)}>Delete Listing</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    </>
  );
}

export default UserListings;

