import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = (item) => {
  const { name, description, cloudinaryImageId, price } = item;
  const dispatch = useDispatch();

  const removeThisItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="w-56 m-2 p-1 shadow-md bg-slate-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Ruppes - {price / 100}</h4>
      <button onClick={() => removeThisItem(item)}>Remove</button>
    </div>
  );
};

export default FoodItem;
