import { useEffect, useState } from "react";
import MyFriend from "./MyFriend";

export default function () {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h4>My Friends List: {friend.length} </h4>
      {
        friend.map(friend => <MyFriend friend = {friend}></MyFriend>)
      }
    </div>
  );
}
