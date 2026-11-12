import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import treeimg from "../assets/tree.jpg"
import FooterPage from './FooterPage'

function CategoryList() {

  const [data, setData] = useState([])

  const { category } = useParams()

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category/" + category).then((result) => {
      setData(result.data.products);
      console.log(result.data.products);
    })
  }, [])

  return (
    <div>
      <form action="">
        <div className='headingDiv'>
          <h1 className="heading">Category selected : {category}</h1>
        </div>
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
      </form>
       <div className=' footerDiv'>
                <FooterPage />
            </div>
    </div>
  )
}

export default CategoryList
