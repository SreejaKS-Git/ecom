import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import treeimg from "../assets/tree.jpg"
import FooterPage from './FooterPage'
import NavPage from './NavPage'

function ProductDetails() {

    const [data, setData] = useState([])

    const { id } = useParams()
    

    useEffect(() => {
        axios.get("https://dummyjson.com/products/" + id).then((result) => {
            setData(result.data);
            //console.log(result.data);
        })
    }, [])

    const handleCart = () => {
            
   let selectedItem = id;   
    console.log("added to cart - " +selectedItem);

  
  };


    return (
        <div className='container-2'>
            <div className='headingDiv'>
                <h1>Product details - {data.title} </h1>
            </div>
            <NavPage />

            <form className='detailsDiv'>
                <div className='productDiv'>
                    <div className='imgDiv'>
                        <img src={data.images} className="card-img-top my-image" alt="Card" />
                    </div>

                    <div className='myTable'>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td> <b>Description</b></td>
                                    <td> - </td>
                                    <td>{data.description}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Category</td>
                                    <td> - </td>
                                    <td>{data.category}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Price</td>
                                    <td> - </td>
                                    <td>{data.price}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Rating</td>
                                    <td> - </td>
                                    <td>{data.rating}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Stock</td>
                                    <td> - </td>
                                    <td>{data.stock}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Brand</td>
                                    <td> - </td>
                                    <td>{data.brand}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>Status</td>
                                    <td> - </td>
                                    <td>{data.availabilityStatus}</td>
                                </tr>

                                 <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <td></td>
                                    <td><button className='button-1' type='button' onClick={handleCart}>Add to Cart</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </form>
            <div className=' footerDiv'>
                <FooterPage />
            </div>
          
        </div>

    )
}

export default ProductDetails
