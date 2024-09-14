import React, { useEffect } from 'react';
import './Course.css'; // Import CSS if needed
import EVS from './image/EVS.webp';
import maths from './image/maths.jpg';
import { useNavigate } from 'react-router-dom';

function openCity(cityName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(cityName).style.display = "block";
  document.getElementById(cityName + "-link").classList.add("active");
}

export default function Course() {
  const navigate = useNavigate();

  useEffect(() => {
    openCity("standard3");
  }, []); // Run once on component mount

  const openIndexPage = () => {
    navigate("/Contentpage");
  }

  return (
    <div>
      <div className="tab">
        <div className='choose'>SELECT STANDARD</div>
        <button className="tablinks" onClick={() => openCity("standard1")} id="standard1-link">Standard 1</button>
        <button className="tablinks" onClick={() => openCity("standard2")} id="standard2-link">Standard 2</button>
        <button className="tablinks" onClick={() => openCity("standard3")} id="standard3-link">Standard 3</button>
      </div>

      <div id="standard1" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="standard2" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="standard3" className="tabcontent">
        <div className="row content">
          <div className="col-12 col-sm-6">
            <div className="card">
              <img className="card-img-top" src={EVS} alt=''/>
              <div className="card-body">
                <h1 className="card-title">E.V.S</h1>
                <p className="card-text">Environmental Studies that interact with nature.</p>
                <button className="btn btn-primary" onClick={openIndexPage}>Open</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="card">
            <img className="card-img-top" src={maths} alt=''/>
              <div className="card-body">
                <h1 className="card-title">Maths</h1>
                <p className="card-text">Mathematics interact with operational activity.</p>
                <button className="btn btn-primary">Open</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
