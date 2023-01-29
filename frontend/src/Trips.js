import React, { useEffect, useState } from "react";

export default function Trips() {
  const [trips, setTrips] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/trips/")
      .then((response) => response.json())
      .then((data) => {
        setTrips(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Trip date</th>
          </tr>
        </thead>
        <tbody>
          {trips &&
            trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.driver.username}</td>
                <td> {trip.origin.name}</td>
                <td> {trip.destination.name}</td>
                <td>{trip.trip_date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
