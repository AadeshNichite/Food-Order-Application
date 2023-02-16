import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestourantMenu = () => {
  const { id } = useParams();

  const restourant = useRestaurant(id);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restourant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restourant id:{id}</h1>
        <h2>{restourant?.name}</h2>
        <img src={IMG_CDN_URL + restourant?.cloudinaryImageId} />
        <h3>{restourant?.area}</h3>
        <h3>{restourant?.city}</h3>
        <h3>{restourant?.avgRating} stars</h3>
        <h3>{restourant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5 m-2">
        <h1>Menus</h1>
        <ul>
          {Object.values(restourant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="m-2 p-3 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestourantMenu;
