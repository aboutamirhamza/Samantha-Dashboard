import React from 'react'
import GroupProfile from '../../img/groupprofile.png'
import Graph from '../../img/graph.png'
import Header from '../Header/Header'
import TopText from '../TopText/TopText';
import { MdOutlineShoppingCart } from "react-icons/md";
import ExpensesItem from '../ExpensesItem/ExpensesItem';
import { FaTrainSubway } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaBowlFood } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";

function LeftExpenses() {
  return (
    <div className='px-16 py-20 extrasmall:px-6 lg:px-16'>
        <div className='flex flex-col gap-4'>
            <div><Header title={"Expenses"} datetime={"01 - 25 March, 2020"} groupprofile={GroupProfile} graph={Graph} /></div>
            <div><TopText title={"Today"} /></div>
            <div className='flex flex-col px-16 extrasmall:px-4 lg:px-16'>
              <ExpensesItem icon={<MdOutlineShoppingCart className='w-6 h-6' />} color={'bg-cyan-500'} title={"Grocery"} timeshorttext={"5:12 pm  •  Belanja di pasar"} amount={"-326.800"} />
              <ExpensesItem icon={<FaTrainSubway className='w-6 h-6' />} color={'bg-purple-700'} title={"Transportation"} timeshorttext={"5:12 pm  •  Naik bus umum"} amount={"-256.800"} />
              <ExpensesItem icon={<IoMdHome className='w-6 h-6' />} color={'bg-orange-700'} title={"Housing"} timeshorttext={"5:12 pm  •  Bayar Listrik"}  amount={"-326.800000"} />
            </div>
            <div><TopText title={"Monday, 23 Mar. 2020"} /></div>
            <div className='flex flex-col px-12 extrasmall:px-4 lg:px-12'>
              <ExpensesItem icon={<FaBowlFood className='w-6 h-6' />} color={'bg-red-700'} title={"Food and Drink"} timeshorttext={"5:12 pm  •  Makan Steak"} amount={"-156.000"} />
              <ExpensesItem icon={<FaCirclePlay className='w-6 h-6' />} color={'bg-green-600'} title={"Entertainment"} timeshorttext={"5:12 pm  •  Nonton Bioskop"} amount={"-35.20"} />
            </div>
        </div>
    </div>
  )
}

export default LeftExpenses