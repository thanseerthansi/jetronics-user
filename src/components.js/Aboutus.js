import React, { useEffect } from 'react'

export default function Aboutus() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>
        <div style={{textAlign:'start'}}>
            <div className='p-5'>
                <h1>About us</h1>
                <p className='p-4'>
                    Finding the bargain of a lifetime while shopping online is quite commonplace with whole sellers and 3d party retailers selling products without any aussurance of source or authenticity.

                    giftnation.ae brings the value of outlet shopping to the convenience of e-commerce, while ensuring that every product you purchase is genuine and directly from sellers that manufacture them.
                </p>
            </div>

        </div>
    </div>
  )
}
