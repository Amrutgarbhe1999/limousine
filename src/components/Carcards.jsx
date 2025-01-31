import React, { useEffect, useState } from "react";

function Carcards() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://demo.nerdtech.in/limousine/backend/get_cars.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data); // Set data only if it's an array
        } else {
          console.error("Expected an array but got:", data);
          setCars([]); // Fallback to an empty array
        }
      })
      .catch((error) => console.error("Error fetching cars data:", error));
  }, []);

  return (
    <div className="carContainer">
      <div className="row container carbox">
        {cars.map((car, index) => (
          <div key={index} className="col-md-2 carscontent" data-aos="fade-up" data-aos-duration="2000">
            <img
              className="carimage"
              src={`https://demo.nerdtech.in/limousine/${car.car_img}`}
              alt={car.id || "Car image"}
            />
            <h5>{car.content || "Car content"}</h5>
            <p>{car.passenger || "Car passenger"} Passengers</p> {/* Updated to use car.passenger */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carcards;
