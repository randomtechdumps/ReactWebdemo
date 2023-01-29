import React, { useEffect, useState } from "react";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Register Number</th>
          </tr>
        </thead>
        <tbody>
          {vehicles &&
            vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td> {vehicle.model}</td>
                <td> {vehicle.reg_number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
