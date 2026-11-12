import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import treeimg from "../assets/tree.jpg"
import LoginHeading from './LoginHeading';
import NavPage from './NavPage';
import LogoutHeadingPage from './LogoutHeadingPage';
import FooterPage from './FooterPage';

function ProductListingPage() {

  let loginToken = localStorage.getItem("currentLogin");

  const [data, setData] = useState([])

  const fetchProducts = () => {
    axios.get("https://dummyjson.com/products")
      .then((result) => {
        setData(result.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

//   useEffect(() => {
//  fetchProducts();
//   }, [])

useEffect(() => {
 
  if (loginToken) {
   
    fetchProducts();
  } else {
    
    navigate("/login");
  }
}, []); 


  return (
    <div>
       <LoginHeading />
      <div className='container-nav'>
            <NavPage />
      </div>
  
      <form >

        <div className="row g-4">
          {
            data.map((product, index) => {
              return (
                <div key={index} className="col-12 col-sm-6 col-md-3">
                  <section className="card h-100 my-card" style={{ maxWidth: "320px", margin: "0 auto" }}>
                    <img src={product.images} className="card-img-top my-image" alt="Card" />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h4 className="card-title">{product.title}</h4>
                        <p className="card-text"> {product.price}</p>
                      </div>
                      <a href={"/productdetails/" + product.id} className="btn-solid theme-primary mt-3">View Details</a>
                    </div>
                  </section>
                </div>
              )
            })
          }
        </div>
        <FooterPage />
      </form>
    </div>
  )
}

export default ProductListingPage
