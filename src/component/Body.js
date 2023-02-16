import RestorantCard from "./RestorantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useAllRestorant from "../utils/useAllRestorant";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  const [
    allRestourants,
    filteredRestourants,
    setAllRestourants,
    setFilteredRestourants,
  ] = useAllRestorant();

  const isOffline = useOnline();

  if (!isOffline) {
    return <h1>🛑🛑🛑🛑 Please check internet connection!!!🛑🛑🛑🛑</h1>;
  }

  return !allRestourants ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 mt-3 bg-slate-50">
        <input
          type="text"
          className="h-10 p-5  text-sm border-black focus:bg-green-50"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-3 p-2 bg-gray-500 hover:bg-red-600 text-white rounded-md"
          onClick={() => {
            //need to filter data
            //update restourants variable of state
            const data = filterData(searchText, allRestourants);
            setFilteredRestourants(data);
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap bg-pink-50">
        {filteredRestourants?.length === 0 ? (
          <h1>No filter matches</h1>
        ) : (
          filteredRestourants?.map((restorant) => {
            return (
              <Link
                to={"/layout/restaurant/" + restorant.data.id}
                key={restorant.data.id}
              >
                <RestorantCard {...restorant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
