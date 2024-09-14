import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';
import image from './image/image.jpg'
import logo from './image/logo.png'
import users from './image/users.png'
import sendmessage from './image/sendmessage.png'
import ChatHistory from './ChatHistory'; // Import the ChatHistory component


const Sidetop = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchBotMessage('Hello!');
  }, [])

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // const newMessage = { text: input, type: 'user', index: messages.length + 1 };
    // setMessages([...messages, newMessage]);
    // setInput('');
    const userMessage = { text: input, type: 'user', index: messages.length + 1 };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', { message: input });
      // const { user_message, bot_response } = response.data.response;
      // const botMessage = { text: response.data.response, type: 'bot', index: messages.length + 2 };
      // setMessages([...messages, botMessage]);
      //   const userMessage = { text: `User: ${input}`, type: 'user', index: messages.length + 1 };
      //   setMessages([...messages, userMessage]);

      const botMessage = { logo: logo, text: response.data.response, type: 'bot', index: messages.length + 2 };
      // const botMessage = { text: `Bot: ${response.data.response}`, type: 'bot', index: messages.length + 2 };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  const fetchBotMessage = async (initialMessage) => {
    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', { message: initialMessage });
      setMessages([...messages, { text: response.data.response, type: 'bot' }]);
    } catch (error) {
      console.error('Error fetching initial message:', error.message);
    }
  };

  return (
    <>
      {/* <!--Main Navigation--> */}

      <nav className="navbar navbar-expand-md navbar-light">

        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="/myNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <div className="container-fluid">
            <div className="row">

              <div className="col-xl-2 col-md-4 bg-dark sidebar fixed-top bg-dark">
                <a href="/" className="navbar navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">
                  <i className='bx bx-child h1'></i>
                  <span className='h1'>Kidsbot</span>
                </a>

                <div className="bottom-border pb-3 d-flex align-items-center">
                  <img src={image} width="50" className="rounded-circle mr-3" alt="" />
                  &nbsp;<a href="/" className="text-white">User</a>
                </div>

                <ul className="navbar-nav flex-column mt-4 accordion">

                  <li className='nav-item'>
                    <a href="/" className="nav-link text-white p-3 sidebar-link current d-flex justify-content-between align-items-center"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseEVS" aria-expanded="false" aria-controls="collapseEVS">
                      <span>EVS</span>
                      <i className='bx bxs-down-arrow' style={{ color: "#f8f5f5" }} ></i>
                    </a>
                    <div className="collapse scroll-container" id="collapseEVS" style={{ overflowY: 'auto', maxHeight: '200px' }}>
                      <div className='card card-body bg-dark'>
                        {messages.map((response, index) => (
                          <React.Fragment key={index}>
                            <div className='text-white'>{response.text}</div>
                            <hr className='text-light' />
                          </React.Fragment>
                        ))}
                      </div>
                      <ChatHistory messages={messages} />
                    </div>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link text-white p-3 mb-2 sidebar-link current d-flex justify-content-between align-items-center"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuestions" aria-expanded="false" aria-controls="collapseQuestions">
                      <span className="text-white">You can Ask Question?</span>
                      <i className='bx bxs-down-arrow' style={{ color: "#f8f5f5" }} ></i>
                    </a>
                    <div className="collapse scroll-container" id="collapseQuestions" style={{ overflowY: 'auto', maxHeight: '200px' }}>
                      <div className='card card-body bg-dark'>
                        <ul className='text-white'>
                          <li>Hello!</li><br/>
                          <li>What is the outer covering of our body called?</li><br/>
                          <li>What holds our body together?</li><br/>
                          <li>What helps us to move our body?</li><br/>
                          <li>What does out heart do?</li><br/>
                          <li>Where does the food we eat go?</li><br/>
                          <li>How many bones are there in our body?</li><br/>
                          <li>What is a skeleton</li><br/>
                          <li>What are internal organ?</li><br/>
                          <li>Which organ helps us to think</li><br/>
                          <li>which organs helps us to breathe?</li><br/>
                          <li>Name any two internal organs of our body</li><br/>
                          <li>How do our Lungs helps us?</li><br/>
                          {/* Add more questions/answers as needed */}
                        </ul>
                      </div>
                    </div>
                  </li>



                  {/* <li className="nav-item">
                    <a href="/" className="nav-link text-white p-3 mb-2 sidebar-link current">
                      <i className="fas fa-chart-bar text-light fa-lg mr-3"></i>
                        Charts
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link text-white p-3 mb-2 sidebar-link current">
                      <i className="fas fa-table text-light fa-lg mr-3"></i>
                        Tables
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link text-white p-3 mb-2 sidebar-link current">
                      <i className="fas fa-wrench text-light fa-lg mr-3"></i> 
                        settings
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/" className="nav-link text-white p-3 mb-2 sidebar-link current">
                      <i className="fas fa-file-alt text-light fa-lg mr-3"></i> 
                        Documentation
                    </a>
                </li> */}
                </ul>
              </div>

              {/* <!-- end of sidebar -->

            <!-- top-nav --> */}

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark clearfix fixed-top py-3 top-navbar" id='myNavbar'>
                <div className="row align-items-center">

                  {/* <div className="col-md-4">
                                <h4 className="text-light text-uppercase mb-0 float-md-end">Dashboard</h4>
                            </div> */}

                  <div className="col-md-9">
                    <form>
                      <div className="input-group">
                        <input type="text" className="form-control search-input" value={input} placeholder="Enter Your Query..." onChange={(e) => setInput(e.target.value)} />
                        <button type="button" onClick={sendMessage} className="btn btn-white search-button" style={{ width: '5%' }}>
                          {/* <i className="fas fa-search"></i> */}<img src={sendmessage} style={{ width: '30px', borderRadius: '50%' }} />
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-3">
                    <ul className="navbar-nav">
                      <li className="nav-item icon-parent">
                        <a href="/" className="nav-link icon-bullet">
                          <i className="fas fa-comments text-light fa-lg"></i>
                        </a>
                      </li>

                      <li className="nav-item icon-parent">
                        <a href="/" className="nav-link icon-bullet">
                          <i className="fas fa-bell text-light fa-lg"></i>
                        </a>
                      </li>

                      <li className="nav-item ml-md-auto">
                        <a href="/" className="nav-link" data-toggle="modal" data-target="#sign-out">
                          <span className='sign'>Sign Out</span> <i className="fas fa-sign-out-alt fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* end of top nav */}
      {/* message box */}
      <div className='container' style={{
        height: '650px',
        marginLeft: '16.7%', width: '83%', marginTop: '5%'
      }} >
        <div className='row' style={{}}>
          <div className="col-12" style={{ overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              // <div key={index} className={msg.type}>
              //   {msg.text}
              // </div>
              <div key={index} className={msg.type} style={{ display: 'flex', alignItems: 'center' }}>
                {msg.type === 'user' ? (
                  <p style={{ width: '100%', backgroundColor: '#f3f6f4', padding: '1%' }}>
                    <img src={users} alt="user Logo" className="bot-logo p-0" style={{ borderRadius: '50%', width: '2.5%', height: '30px', background: 'white' }} />
                    &nbsp;<span>{msg.text}</span>

                  </p>
                ) : (
                  <p style={{ width: '100%', backgroundColor: '#eeeeee', padding: '1%' }} >
                    {msg.text === '\n' ? (
                      <br />
                    ) : (
                      <>
                        <img src={logo} alt="Bot Logo" className="bot-logo p-0" style={{ borderRadius: '50%', width: '2.5%', height: '30px', background: 'white' }} />
                        &nbsp;<span>{msg.text}</span>
                      </>
                    )}
                  </p>
                )}
                <br />
              </div>
            ))}

          </div><br />
        </div>
      </div>
    </>
  )
}
export default Sidetop;
