import { useEffect, useState } from "react";

const Profile = (props) => {
  const [Count, setCount] = useState(0);
  const [Count2] = useState(0);

  useEffect(() => {
    console.log("Use Effect");
    const intervarl = setInterval(() => {
      console.log("interval");
    }, 1000);

    return () => {
      clearInterval(intervarl);
    };
  });

  return (
    <div>
      <h2>Profile Function Component {props.name}</h2>
      <h2>Count : {Count}</h2>
      <button onClick={() => setCount(Count + 1)}>Count++</button>
    </div>
  );
};

export default Profile;
