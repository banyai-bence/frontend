import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPlaces() {
      try {
        const response = await fetch("http://localhost:3000/places");

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        const responseData = await response.json();
        setAvailablePlaces(responseData.places);
      } catch (err) {
        setError({
          message: err.message || "Could not fetch, please try again later"
        });
      }
    }
    getPlaces();
  }, []);
  if(error){
    return <Error title="An error occured!" message={error.message}/>
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
