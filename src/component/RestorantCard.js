import { IMG_CDN_URL } from "../config";

// import UserContext from "../utils/userContext";
// import { useContext } from "react";

const RestorantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  // const { user } = useContext(UserContext);

  return (
    <div className="w-56 m-2 p-1 shadow-md bg-slate-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      {/* <h5 className="font-bold">{user.name}</h5>
      <h5 className="font-bold">{user.email}</h5> */}
    </div>
  );
};

export default RestorantCard;
