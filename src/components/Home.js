import React from 'react'

export default function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.iDVurdWMV4YcAhqCEaT1bQHaHa&pid=Api&P=0&h=180'></img>
        </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.sqVuQRKJAuYkUPEsH6TlAwHaMs&pid=Api&P=0&h=180'></img>
        </div>
        <div className='text-wrapper item'>
            <span>
                I Phone 
            </span>
            <span>
                Price:  $1000.00
            </span>
        </div>
        <div className='btn-wrapper item'>
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
