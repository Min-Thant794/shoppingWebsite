import React from 'react'
import { products } from '../constants'

const BS2 = ({product}) => {
  return (
    <div>Best seller item 2
        <div className='grid grid-cols-2 gap-4 p-4'>
              {
                product?.map(data => 
                  <div key={data.name}
                  value={data.id}
                  className='bg-red-600'
                  >
                    <div>Product Items</div>
                    <div>{data.name}</div>
                    <div>{data.price}</div>
                  </div>
                )
              }
            </div>
    </div>
  )
}

export default BS2