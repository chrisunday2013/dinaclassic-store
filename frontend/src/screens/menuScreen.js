import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { menu} from '../actions/menuAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function MenuScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const menuRequest = useSelector((state) => state.menuRequest);
  const { menuInfo, loading, error } = menuRequest;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(menu(name, email, subject, message));
     alert('Your request was sent successfully.');
     props.history.push('/');

  };
 
  return (
    <div>
      <h3 className="write">Go ahead and write us a message, say what you want and how you want it and be rest assured to get exactly what you ordered at the stipulated time. 
      You can equally give us a call or send us am email at anytime of the day.</h3>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="request">Message Us</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
          
            type="text"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter Subject"
            required
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </div>
        <div>
           <label htmlFor="comment">Message</label>
              <textarea
                type="text"
                id="comment"
                placeholder="Enter Message"
                required
        
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Send
          </button>
        </div>
        <div>
          <label />

        </div>
      </form>

      <div className="contactUs">
        <h3 className="">Contact Us</h3>
        <br/>
        <p>Our contact  information is below.</p>
        <br/>
        -----------------------------------------------------------------------------<br/>
        <strong>Address</strong>: <p>2 Biggin Court, North York, ON M4A1M4</p>
        <br/>
        -----------------------------------------------------------------------------<br/>
        <strong>Phone</strong>: <p>647 909 8681 </p>
        <br/>
        -----------------------------------------------------------------------------<br/>
        <strong>Email</strong>: <p>madinat.abass26@gmail.com</p>

      </div>
    </div>
  );
}
