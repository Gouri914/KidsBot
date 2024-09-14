import React, { useEffect } from 'react';
import './Contentpage.css'; // Import CSS if needed
import { useNavigate } from 'react-router-dom'

function openCity(cityName) {
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        if (tablinks[i].id === cityName + "-link") {
            tablinks[i].classList.add("active");
            tablinks[i].style.display = "block";
        } else {
            tablinks[i].classList.remove("active");
            tablinks[i].style.display = "none";
        }
    }

    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id === cityName) {
            tabcontent[i].style.display = "block";
        } else {
            tabcontent[i].style.display = "none";
        }
    }
}


export default function Course() {

    const navigate = useNavigate();

    useEffect(() => {
        openCity("standard3");
    }, []); // Run once on component mount

    const chatbot = () => {
        navigate("/Sidetop")
    }

    return (
        <div className='contentpage'>
            <div className="tab d-flex-col justify-content-between">
                <div className=''>
                    <div className='choose'>SELECTED STANDARD</div>
                    <button className="tablinks" onClick={() => openCity("standard1")} id="standard1-link">Standard 1</button>
                    <button className="tablinks" onClick={() => openCity("standard2")} id="standard2-link">Standard 2</button>
                    <button className="tablinks" onClick={() => openCity("standard3")} id="standard3-link">Standard 3</button>
                </div>
                <div className=''>
                    <button onClick={chatbot}
                        style={{ fontSize: '25px', color: 'whitesmoke', fontWeight: 'bold' }}
                    >
                        Kidsbot
                    </button>
                </div>
            </div>

            {/* <div id="content" className="contenttab">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div> */}

            {/* <div id="standard2" className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div> */}

            <div id="standard3" className="tabcontent">
                <div className='container box1 mt-5'>
                    <h5>CONTENT</h5>
                </div>
                <div className="row d-flex justify-content-around m-3 p-5" style={{ overflow: 'hidden' }}>
                    <div className='col-12 box '>
                        <a href="https://drive.google.com/file/d/1fi67Nplu-fV05_Yu-FzJKL0AxjH2lSK6/view?usp=sharing" target="_blank" rel='noopener noreferrer'>1. Our Environment</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1Havm9lXgOg2JIH06N3gVSq4etQqzELBO/view?usp=sharing' target="_blank" rel='noopener noreferrer'>2. So many kinds of animals !</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1gT7RUUFI_RSaFdzoj6ZgLUsgQ1yOYKbw/view?usp=sharing' target="_blank" rel='noopener noreferrer'>3. Animal Shelters</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1U9k99_Zy3Sm17RstH3KrZH8UPbV2krEZ/view?usp=sharing' target="_blank" rel='noopener noreferrer'>4. Directions and Maps</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1QMFqVraTc4DQu9cbw1FkvDpx6xilQN5p/view?usp=sharing' target="_blank" rel='noopener noreferrer'>5. Understanding Time</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1TIlAhMj5V9WDw9pnzek9l1jZBSeFhkDp/view?usp=sharing' target="_blank" rel='noopener noreferrer'>6. Getting to Know the Place we Live in</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/13oseWbdZuBMSUROIHCZYmYu4Pq6tu-lY/view?usp=sharing' target="_blank" rel='noopener noreferrer'>7. Our Village, Our City</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1rhn787qfoA4qYue_yC43z0R6QBsbKvt1/view?usp=sharing' target="_blank" rel='noopener noreferrer'>8. Our Need for Water</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/10uPLkOlTwZegTO-RJ9NCMyg_evEz6XdX/view?usp=sharing' target="_blank" rel='noopener noreferrer'>9. Where does water come from ?</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1_l6PrchgXWTAhNRIVztKMpWkYClSeP2Z/view?usp=sharing' target="_blank" rel='noopener noreferrer'>10. More about Water</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1MS8EwFrfMS4k1RhpdQFH7c25BlqscB_g/view?usp=sharing' target="_blank" rel='noopener noreferrer'>11. Our Need for Air</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/112Z5jWhMf8RHQORpRoNpTfeg0KDpL48h/view?usp=sharing' target="_blank" rel='noopener noreferrer'>12. Our Need for Food</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1rrnq5hmblRPbC0L1JcZDcoVZeD1MwzO4/view?usp=sharing' target="_blank" rel='noopener noreferrer'>13. Our Diet</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1aMPCWBkml3fXlv_iE6b0r6hRnr-DRJy3/view?usp=sharing' target="_blank" rel='noopener noreferrer'>14. Inside the Kitchen</a>
                    </div>
                    <div className='col-12 box'>
                        <a href='https://drive.google.com/file/d/1IbRKu4RJiZS1TSiSkCpRa84EFImId_01/view?usp=sharing' target="_blank" rel='noopener noreferrer'>15. Our Body</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

