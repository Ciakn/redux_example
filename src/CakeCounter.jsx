import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "./redux/cake/CakeActions";
import { buyIceCream } from "./redux/iceCream/iceCreamActions";
import { fetchUsers } from "./redux/userData/UserAcitons";

function CakeCounter() {
  const { numOfCakes } = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  const { numOfIceCream } = useSelector((state) => state.numOfIceCream);
  const iceCremaDispatcher = useDispatch();
  const { loading, user, error } = useSelector((state) => state.userData);
  console.log(user);
  const userDispatcher = useDispatch();
  useEffect(() => {
    userDispatcher(fetchUsers());
  }, []);
  return (
    <div>
      <h1>Number Of Cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <h1>Number Of iceCream - {numOfIceCream}</h1>
      <button onClick={() => iceCremaDispatcher(buyIceCream())}>
        Buy iceCream
      </button>

      <>
        <h2>List of names</h2>
        <div>
          {loading && <p>loading...</p>}
          {error && <p>{error}</p>}
          {user.length &&
            user.map((u) => {
              return <p  key={u.id}>{u.name}</p>;
            })}
        </div>
      </>
    </div>
  );
}

export default CakeCounter;
