import React from 'react'
import Progress from '../Progress/Progress';
import SaveMoney from '../SaveMoney/SaveMoney';
import Save from '../../img/savemoney.png'

function RightExpenses() {
  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <div className='p-16'>
              <div>
                  <h3 className='font-poppins font-semibold text-xl py-4'>Where your money go?</h3>
              </div>

          <div className='flex flex-col gap-16'>


              <div className='flex flex-col gap-4 py-6'>
                <Progress title={"Food and Drinks"} amount={"872.400"} width={"w-24"} />
                <Progress title={"Shopping"} amount={"1.378.200"} width={"w-48"} />
                <Progress title={"Housing"} amount={"928.500"} width={"w-20"} />
                <Progress title={"Transportation"} amount={"420.700"} width={"w-24"} />
                <Progress title={"Vehicle"} amount={"520.000"} width={"w-32"} />
              </div>


              <div>
                <SaveMoney image={Save} title={"Save more money"} desc={"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."} btn={"View Tips"} />
              </div>

              


          </div>
      </div>
    </div>
  )
}

export default RightExpenses;