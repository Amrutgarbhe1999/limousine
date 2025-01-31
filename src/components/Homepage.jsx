import React from 'react'
import Homeimage from './Homeimage'
import { Link } from 'react-router-dom'
import BookingForm from './BookingForm'
// import Navbar from './Navbar'
import Carcards from './Carcards'
import MiddleContent from './MiddleContent'
import Rightvehicle from './Rightvehicle'
import Limoservice from './Limoservice'
import Whychoose from './Whychoose'
import SecondService from './SecondService'
import BeforeBooking from './BeforeBooking'
import Footer from './Footer'
import Faq from './Faq'

function Homepage() {
  const homebtnStyle={
    width:'25%',
    backgroundColor:'rgb(143, 106, 38)',
    color:'#fff',
  }
  const sectionStyle = {
    width: '80%',
    height: '70vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with opacity
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
  };

  return (
    <>
    {/* <Navbar/> */}
    <Homeimage/>
    <BookingForm/>
    <Carcards/>
    <MiddleContent/>
    <Rightvehicle/>
    <br />
    <br />
    <Limoservice/>
    <br />
    <br />
    <Whychoose/>
    <br />
    <br />
    <SecondService/>
    <br />
    <BeforeBooking/>
    <br />
    <section style={sectionStyle} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 style={headingStyle}>Unmatch Customer</h1>
          <h1 style={headingStyle}>Satisfaction</h1>
          {/* <p style={paragraphStyle}>Additional details or description can go here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde recusandae ad quasi illo labore nihil, mollitia odit laborum eligendi magnam doloribus, corrupti minima iure repellendus. Esse illum laborum reprehenderit atque totam ea provident! Excepturi, doloremque quas, illum iure mollitia officiis eius voluptates, id ea odit ullam eveniet possimus.</p> */}
          <Link to="booknow" className="btn mt-3 homebookbtn" style={homebtnStyle}>
                            Book Now
                        </Link>
        </div>
      </div>
    </section>
    <br />
    <Faq/>
    <br />
    
    </>
  )
}

export default Homepage