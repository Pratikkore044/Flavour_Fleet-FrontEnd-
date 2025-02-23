import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/Card';



function Homepage() {
  const fooddataurl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('');
  const [FoodCategory, setFoodCategory] = useState([]);
  const [FoodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    console.log("Backend URL:", fooddataurl);
    console.log(fooddataurl);
    let response = await fetch(`${fooddataurl}/api/foodData`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCategory(response[1]);
    // console.log(response[0],response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
      <div>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" id="carousel">
        
        <div className="carousel-caption" style={{ zIndex: "5" }}>
          <div className="d-flex justigy-content-center">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search} onChange={(e)=>{
                setSearch(e.target.value)
              }}
            />
            <button className="btn btn-outline-success text-white my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </div>

        <div className="carousel-item active">
          <img
            src="https://i.pinimg.com/736x/02/0a/a1/020aa191a471a7d5e6c3d393da575ed8.jpg"
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(40%)", objectFit: "contain" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/side-view-pizza-stand-with-tomatoes-olives-bell-peppers_141793-13029.jpg?t=st=1740238655~exp=1740242255~hmac=330979bbad8a21d1b7ec07470d1befc20be1bcfdcb95b5d319059dfd1ca88eb3&w=1380"
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(40%)", objectFit: "fill" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1740238753~exp=1740242353~hmac=1871d872de86a21cbde1794091a8ab4fad1b2faa53c61ff299c01104bd0fc45b&w=1800"
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(40%)", objectFit: "contain" }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      </div>
      <div className="container mt-4">
        {FoodCategory.length > 0 ? (
          FoodCategory.map((data) => (
            <div key={data._id} className="my-4">
            
              <h3 className="text-center text-primary">{data.CategoryName}</h3>
              <hr />

             
              <div className="row g-4 justify-content-center">
                {FoodItem.length > 0 ? (
                  FoodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).length > 0 ? (
                    FoodItem.filter((item) => item.CategoryName === data.CategoryName).map((filteredItem) => (
                      <div key={filteredItem._id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Card foodItem = {filteredItem}
                        options={filteredItem.options[0]}
                         /> {}
                      </div>
                    ))
                  ) : search.length === 0 ? ( 
                    <div className="col-12 text-center text-danger">No such data found</div> 
                  ) : null 
                ) : (
                  <div className="col-12 text-center">Loading food items...</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Loading categories...</div>
        )}
      </div>



      <Footer />
    </div>
  );
}
export default Homepage;