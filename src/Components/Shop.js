import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../state/index';
import { useSelector } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney} =bindActionCreators(actionCreaters,dispatch);
  const amount = useSelector(state=>state.amount);
  return (
    <div className='text-center my-1'>
        <h1>Deposit / withdrow Money</h1>
         {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.withdrawMoney(500))}}>-</button>
        <b>Update money</b>
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.depositMoney(500))}}>+</button> */}
         <button disabled={amount<=0} className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(500)}}>-</button>
        <b>Update money from {amount} by 500 ₹</b>
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(500) }}>+</button>
    </div>
  )
}

export default Shop