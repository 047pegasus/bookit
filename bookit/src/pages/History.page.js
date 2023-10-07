import React from 'react';
import { UserContext } from '../contexts/user.context';
import NavBar from '../components/NavBar';
import { useContext, useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

//getting email from local storage
const email = localStorage.getItem('email');

const History = () => {
    const { user } = useContext(UserContext);
  
    // To prove that the identity of the user, we are attaching
    // an Authorization Header with the request
    const headers = { Authorization: `Bearer ${user._accessToken}` }
  
    const [history, setHistory] = useState([]);
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
      fetch(`http://localhost:5000/api/history?email=${userEmail}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch listings');
          }
          return response.json();
        })
        .then((data) => {
          setHistory(data);
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
  
    return (
      <>
      <NavBar/>
      <div>
        <h2>Your History</h2>
       {// a react-boostrap table of all the listings of the user aloing with the edit and delete buttons
       }
        <Table responsive variant="dark" hover bordered class="table">
          <thead>
            <tr>
              <th scope="col">Book Unique ID</th>
              <th scope="col">Book Title</th>
              <th scope="col">Author</th>
              <th scope="col">Genre</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {history.map((bhistory) => (
              <tr>
                <td>{bhistory._id}</td>
                <td>{bhistory.title}</td>
                <td>{bhistory.author}</td>
                <td>{bhistory.genre}</td>
                <td>{bhistory.price}</td>
                <td>{bhistory.description}</td>
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
  
      </>
    )
}

export default History;
