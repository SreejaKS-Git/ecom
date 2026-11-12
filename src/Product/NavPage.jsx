import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfilePage from './ProfilePage'

function NavPage() {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [showProfile, setShowProfile] = useState(false);

  const handleOpenProfile = () => setShowProfile(true);
  const handleCloseProfile = () => setShowProfile(false);

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
    <div className='container-nav w-100 mw-100'>
      <div>
        <div className='navDiv w-100'>
          <nav className="navbar navbar-expand-md my-custom-navbar w-100">
            <div className="container-fluid px-3">

              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" title="Home" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" title="All Products" aria-current="page" href="/productListing">All</a>
                </li>

                <li className="nav-item dropdown" title="Categories">
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
                  <a className="nav-link active" aria-current="page" title="My Cart" href="/productdetails">My Cart</a>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
                <li className="nav-item m-0 p-0">
                  <form className="hstack gap-2" role="search">
                    <input className="form-control my-nav-search" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn-solid btn-icon theme-secondary my-nav-search" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        <use href="#search" /></svg>

                    </button>
                  </form>
                </li>
                <li className="nav-item m-0 p-0">
                  {/* Update onClick to open the popup */}
                  <button
                    className="button-1 m-0"
                    type="button"
                    title="Profile"
                    onClick={handleOpenProfile}
                  >
                    <svg
                      xmlns="http://w3.org"
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
                <li className="nav-item m-0 p-0">
                  <button className="button-1 m-0" type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Profile Popup Modal */}
      {showProfile && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={handleCloseProfile} // Closes popup when clicking outside
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Account Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseProfile}
                ></button>
              </div>
              <div className="modal-body">
                {/* Render your existing ProfilePage component right inside */}
                <ProfilePage />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavPage
