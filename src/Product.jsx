import React, {useState} from 'react'
import NavBar from './NavBar'
import BS from './components/BS'
import BS2 from './components/BS2'
import { BS1 } from './components/BS1'

//fetch product data from database
//imagine this object array comes from database

    const DataFromDatabase = [
      {id: 1,
        name: "Product 1",
        price: 1000
      },
      {id: 2,
        name: "Product 2",
        price: 2000
      },
      {id: 3,
        name: "Product 3",
        price: 3000
      },
      {id: 4,
        name: "Product 4",
        price: 4000
      },
      {id: 5,
        name: "Product 5",
        price: 5000
      },
    ]

const Product = () => {
  const [count, setCount] = useState(0);
  return (

    <div className=''>
      <NavBar setter = {setCount} />
      <div>
        deals carousel
      </div>
      <div>
            <div className='grid grid-cols-2 gap-4 p-4'>
              {
                DataFromDatabase.map(data => 
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
            <BS product={DataFromDatabase} />
            <BS1 product={DataFromDatabase} />
            <BS2 product={DataFromDatabase} />
      </div>
      <div className='text-center text-3xl'>
        count is {count}
      </div>
    </div>
  )
}

export default Product