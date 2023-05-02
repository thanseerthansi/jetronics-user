import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Simplecontext } from './Simplecontext'

export default function Products() {
  let { state } = useLocation()
    const {productdata,searchvalue} =useContext(Simplecontext)
    const  urlparam  = useParams()
    let urlcategory =urlparam.category
    // console.log("value",value)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    // console.log("state0",state)
  return (
    <div>
        <div className="page-wrapper">
    
    <main className="main">
     
      <div className="mb-0" />{/* End .mb-4 */}
      {/* End .container */}
      {/* <div className="mb-2" />
      <div className="container new-arrivals">
        <h2 className="title text-center mb-0 ">{urlcategory.toUpperCase()}</h2>
      </div>
      {/* End .heading-left */}
      
      
      <div className="mb-0" /> 
    </main></div>
  <div className="mb-5" />{/* End .mb-5 */}
  <div className="container for-you">
    <div className="heading heading-flex mb-3">
      
      {/* <div className="heading-right">
        <a href="/" className="title-link">View All Recommendadion <i className="icon-long-arrow-right" /></a>
      </div>End .heading-right */}
    </div>{/* End .heading */}
    <div className="products">
      <div className="row justify-content-start">
        {/* product start */}
        {productdata.filter(urlcategory==="deals" ?  t=>t.category[0].category_type.toLowerCase().includes("deal"):t=>t.title.toLowerCase().includes(searchvalue.toLowerCase())).length?null:<p>No Data Found</p>}
        {productdata.length?productdata.filter(urlcategory==="deals" ?  t=>t.category[0].category_type.toLowerCase().includes("deal"):t=>t.title.toLowerCase().includes(searchvalue.toLowerCase())).map((pitm,pk)=>(
        
          <div key={pk} className="col-6 col-md-4 col-lg-3">
            
          <div className="product product-2 text-left shadow-sm">
            <figure className="product-media ">
              <span className="product-label label-circle label-top d-flex">{parseInt((parseInt(pitm.old_price - pitm.price)/parseInt(pitm.old_price))*100)}% OFF</span>
              <Link to={`/detail/${pitm.id}`}>
                <img src={pitm.images[0].image} alt="Productimage"  className="product-image" />
              </Link>
              {/* <div className="product-action-vertical">
                <a href="/" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
              </div> */}
              {/* End .product-action */}
              <div className="product-action">
              <Link to={`/detail/${pitm.id}`}className="btn-product btn-cart" title="Buy Now"><span>Buy Now</span></Link>
                {/* <Link to={`/detail/${pitm.id}`} className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link> */}
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to={`/detail/${pitm.id}`}>{pitm.brand?pitm.brand: <p style={{height:"18px"}}></p>}</Link>
              </div>{/* End .product-cat */}
              <h3 className="product-title"><Link to={`/detail/${pitm.id}`}>{pitm.title}</Link></h3>{/* End .product-title */}
              <div className="product-price ">
                <span className="new-price">AED {pitm.price} </span>
                <span className="old-price">Was AED {pitm.old_price}</span>
              </div>{/* End .product-price */}
              <div>
                      {pitm.vat ? 
                <p>AED {parseInt( pitm.price+(0.05*pitm.price))} -VAT Included</p>
                :<p style={{height:"26px"}}></p>}
              </div> 
              <div className="ratings-container pt-1">
                {pitm.delivery_charge===0?
                <p className="delivery">Free Delivery</p>
                 : <p style={{height:"18px"}}></p>}
                
              </div>
            </div>{/* End .product-body */}
          </div>{/* End .product */}
        </div>
        )):null}
        {/* End .col-sm-6 col-md-4 col-lg-3 */}
        
      </div>{/* End .row */}
    </div>{/* End .products */}
  </div>{/* End .container */}
  <div className="mb-4" />{/* End .mb-4 */}
  <div className="container">
    <hr className="mb-0" />
  </div>{/* End .container */}
  <div className="icon-boxes-container bg-transparent">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark">
              <i className="icon-rocket" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title */}
              <p>Orders $50 or more</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark">
              <i className="icon-rotate-left" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title */}
              <p>Within 30 days</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark">
              <i className="icon-info-circle" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* End .icon-box-title */}
              <p>when you sign up</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-sm-6 col-lg-3 */}
        <div className="col-sm-6 col-lg-3">
          <div className="icon-box icon-box-side">
            <span className="icon-box-icon text-dark">
              <i className="icon-life-ring" />
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title */}
              <p>24/7 amazing services</p>
            </div>{/* End .icon-box-content */}
          </div>{/* End .icon-box */}
        </div>{/* End .col-sm-6 col-lg-3 */}
      </div>{/* End .row */}
    </div>{/* End .container */}
  </div>{/* End .icon-boxes-container */}
  {/* End .main */}
    </div>
  )
}
