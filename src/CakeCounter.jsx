import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCake from './redux/cake/CakeActions';

function CakeCounter() {
    const counter = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>

        <h1>Number Of Cakes - {counter}</h1>
        <button  onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeCounter