import { useState, useEffect } from "react";
import { FETCH_ALL_RESTORANT } from "../config";

const useAllRestorant = () => {
  const [allRestourants, setAllRestourants] = useState(null);
  const [filteredRestourants, setFilteredRestourants] = useState(null);

  useEffect(() => {
    getRestourant();
  }, []);

  async function getRestourant() {
    const data = await fetch(FETCH_ALL_RESTORANT);
    const json = await data.json();
    setAllRestourants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestourants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [
    allRestourants,
    filteredRestourants,
    setAllRestourants,
    setFilteredRestourants,
  ];
};

export default useAllRestorant;
