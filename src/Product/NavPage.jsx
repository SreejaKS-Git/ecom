import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NavPage() {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then((result) => {
        setCategories(result.data);
        // console.log(result.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("currentLogin");

    console.log("logout");
    navigate('/');
  };

    const handleProfile = () => {
   
    console.log("profile");
    navigate('/profile');
  };
  

  return (
   <div className='container-nav'>
  <div>
    <div className='navDiv'>
      <nav className="navbar navbar-expand-md my-custom-navbar">
        <div className="container-fluid">

          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/productListing">All</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>

              <ul className="dropdown-menu">
                {
                  categories.map((category, index) => {
                    return (
                      <li key={index}>
                        <a className="dropdown-item" href={"/categoryList/" + category.slug}>
                          {category.name}
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/productdetails">My Cart</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-flex align-items-center gap-6">
            <li className="nav-item">
              <button className="button-1" type="button" title="Profile" onClick={handleProfile}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </button>
            </li>
            <li className="nav-item">
              <button className="button-1" type='button' onClick={handleLogout}>Logout</button>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  </div>
</div>
  )
}

export default NavPage
