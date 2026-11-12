import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from "../assets/big-city.jpg"
import offer1 from "../assets/Offer1.png"
import offer2 from "../assets/Offer2.png"
import offer3 from "../assets/Offer3.png"
import offer4 from "../assets/Offer4.png"
import offer5 from "../assets/Offer5.png"
import offer6 from "../assets/Offer6.png"
import HeadingPage from './HeadingPage';
import NavPage from './NavPage';
import FooterPage from './FooterPage';

function MainPage() {

 const images = [offer1, offer2, offer3, offer4, offer5, offer6];

    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className='container-main'>
            <HeadingPage />
            {/* <NavPage /> */}

            <div className="contentDiv">

                <div className="d-flex justify-content-between align-items-center mb-3">

                    <h5 className="mb-0" style={{fontWeight :"bold", color:"red", justifySelf:'center'}}>Special Offers</h5>

                    <div>
                        <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={prevSlide}>
                            &#10094;
                        </button>

                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={nextSlide}>
                            &#10095;
                        </button>
                    </div>

                </div>

                <div className="carousel-container">

                    {images.slice(startIndex, startIndex + 3).length === 3
                        ? images.slice(startIndex, startIndex + 3).map((img, index) => (
                            <div className="carousel-card" key={index}>
                                <img
                                    src={img}
                                    alt={`Offer ${index + 1}`}
                                />
                            </div>
                        ))
                        : [
                            ...images.slice(startIndex),
                            ...images.slice(0, 3 - images.slice(startIndex).length)
                        ].map((img, index) => (
                            <div className="carousel-card" key={index}>
                                <img
                                    src={img}
                                    alt={`Offer ${index + 1}`}
                                />
                            </div>
                        ))
                    }

                </div>

            </div>
             <FooterPage />
           
        </div>
    )
}

export default MainPage
