import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCake from './redux/cake/CakeActions';
import { buyIceCream } from './redux/iceCream/iceCreamActions';

function CakeCounter() {
    const {numOfCakes} = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
    const {numOfIceCream} = useSelector(state => state.numOfIceCream);
    const iceCremaDispatcher = useDispatch();
  return (
    <div>

        <h1>Number Of Cakes - {numOfCakes}</h1>
        <button  onClick={()=> dispatch(buyCake())}>Buy Cake</button>
        <h1>Number Of iceCream - {numOfIceCream}</h1>
        <button  onClick={()=> iceCremaDispatcher(buyIceCream())}>Buy iceCream</button>
    </div>
  )
}

export default CakeCounter