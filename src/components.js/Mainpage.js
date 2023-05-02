import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { BaseURL } from './Baseurl';
// import Callaxios from './Callaxios';
import { Simplecontext } from './Simplecontext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Scripts from './Scripts';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: ' #f0f0f0' ,padding:"1px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: " #f0f0f0",padding:"1px" }}
      onClick={onClick}
    />
  );
}
export default function Mainpage() {
    // const [productdata,setproductdata]=useState([]);
    // const {searchvalue,setsearchvalue} =useContext(Simplecontext)
    const {productdata} =useContext(Simplecontext)
    // console.log("data,",productdata)
    useEffect(() => {
       Scripts() 
       window.scrollTo(0, 0);
    }, [])
    const slide ={
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay:true, 
      mobileFirst:true,
      arrows:false,
      
    }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      accessibility: true, // enable accessibility support
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // arrows:false,
      slidesToShow: 5,
      className: "slickMain",
      slidesToScroll: 1,
      // style:color: "#827f7f",fontSize:"31px",
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    
  return (
    <div>
        <div className="page-wrapper">
    
    <main className="main">
      <div className="intro-slider-container mb-5">
        {/* <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options="{
                  &quot;dots&quot;: true,
                  &quot;nav&quot;: false, 
                  &quot;responsive&quot;: {
                      &quot;1200&quot;: {
                          &quot;nav&quot;: true,
                          &quot;dots&quot;: false
                      }
                  }
              }"> */}
              <div>
              <Slider {...slide} className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light">
                
                <div>
          <div className="intro-slide" style={{backgroundImage: 'url(/assets/images/demos/demo-4/slider/slide-1.png)'}}>
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-third">Deals and Promotions</h3>{/* End .h3 intro-subtitle */}
                  <h1 className="intro-title">Beats by</h1>
                  <h1 className="intro-title">Dre Studio 3</h1>{/* End .intro-title */}
                  <div className="intro-price">
                    
                  </div>{/* End .intro-price */}
                  <Link to="/product/all products" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>{/* End .col-lg-11 offset-lg-1 */}
              </div>{/* End .row */}
            </div>{/* End .intro-content */}
          </div>{/* End .intro-slide */}
          </div>
          <div>
          <div className="intro-slide" style={{backgroundImage: 'url(/assets/images/demos/demo-4/slider/slide-2.png)'}}>
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-primary">New Arrival</h3>{/* End .h3 intro-subtitle */}
                  <h1 className="intro-title">Apple iPad Pro <br />12.9 Inch, 64GB </h1>{/* End .intro-title */}
                  <div className="intro-price">
                  
                    
                  </div>{/* End .intro-price */}
                  <Link to="/product/all products" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>{/* End .col-md-6 offset-md-6 */}
              </div>{/* End .row */}
            </div>{/* End .intro-content */}
          </div>{/* End .intro-slide */}
          </div>
        
          </Slider>
          </div>
        {/* </div> */}
        {/* End .intro-slider owl-carousel owl-simple */}
        {/* <span className="slider-loader" /> */}
        {/* End .slider-loader */}
      </div>{/* End .intro-slider-container */}
      <div className="mb-4" />{/* End .mb-4 */}
      {/* End .container */}
      <div className="mb-3" />{/* End .mb-5 */}
      <div className="container new-arrivals">
        <h2 className="title text-center mb-4">Explore Popular Products</h2>{/* End .title text-center */}
      </div>{/* End .heading-left */}
      <div className="container">
        <div className="tab-content tab-content-carousel just-action-icons-sm">
          <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
            {/* <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                          &quot;nav&quot;: true, 
                          &quot;dots&quot;: true,
                          &quot;margin&quot;: 20,
                          &quot;loop&quot;: false,
                          &quot;responsive&quot;: {
                              &quot;0&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;480&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;768&quot;: {
                                  &quot;items&quot;:3
                              },
                              &quot;992&quot;: {
                                  &quot;items&quot;:4
                              },
                              &quot;1200&quot;: {
                                  &quot;items&quot;:5
                              }
                          }
                      }"> */}
              <Slider {...settings} className="owl-carousel owl-full carousel-equal-height carousel-with-shadow " >
                {productdata.length?productdata.filter((item,index)=>index < 8).map((pitm,pk)=>(
                  <div key={pk} className='px-3' style={{width:"102%"}}>
                  <div  className="product product-2 text-left ">
                  <figure className="product-media">
                    <span className="product-label label-circle label-top">{parseInt((parseInt(pitm.old_price - pitm.price)/parseInt(pitm.old_price))*100)}% OFF</span>
                    <Link to={`/detail/${pitm.id}`}>
                      <img src={pitm.images[0].image} alt="Productimage"  className="product-image" />
                    </Link>
                    
                    <div className="product-action">
                    <Link to={`/detail/${pitm.id}`} className="btn-product btn-cart" title="Buy Now"><span>Buy Now</span></Link>
                      {/* <Link to={`/detail/${pitm.id}`} className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link> */}
                    </div>{/* End .product-action */}
                  </figure>{/* End .product-media */}
                  <div className="product-body card-height">
                    <div className="product-cat">
                      <Link to={`/detail/${pitm.id}`}>{pitm.brand ?pitm.brand:<p style={{height:"18px"}}></p>}</Link>
                    </div>{/* End .product-cat */}
                    <h3 className="product-title"><Link to={`/detail/${pitm.id}`}>{pitm.title}</Link></h3>{/* End .product-title */}
                    <div className="product-price">
                      AED {pitm.price}
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
                </div>
                </div>
                )):<p>NO Data Found</p>}
              
              
              </Slider>
            
            {/* </div> */}
            {/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
        
         
        </div>{/* End .tab-content */}
      </div>{/* End .container */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <Link to="/">
                <img src="assets/images/demos/demo-4/banners/banner-1.png" alt="Banner" />
              </Link>
              <div className="banner-content">
                <h4 className="banner-subtitle"><Link to="/">Smart Offer</Link></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><Link to="/">Save $150 <strong>on Samsung <br />Galaxy Note9</strong></Link></h3>{/* End .banner-title */}
                <Link to="/" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></Link>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <Link to="/">
                <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner" />
              </Link>
              <div className="banner-content">
                <h4 className="banner-subtitle"><Link to="/">Time Deals</Link></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><Link to="/"><strong>Bose SoundSport</strong> <br />Time Deal -30%</Link></h3>{/* End .banner-title */}
                <Link to="/" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></Link>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <Link to="/">
                <img src="assets/images/demos/demo-4/banners/banner-3.png" alt="Banner" />
              </Link>
              <div className="banner-content">
                <h4 className="banner-subtitle"><Link to="/">Clearance</Link></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><Link to="/"><strong>GoPro - Fusion 360</strong> <br />Save $70</Link></h3>{/* End .banner-title */}
                <Link to="/" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></Link>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
        </div>{/* End .row */}
      </div>
      <div className="mb-0" />{/* End .mb-6 */}
    </main></div>
  <div className="mb-3" />{/* End .mb-5 */}
  <div className="container for-you">
    <div className="heading heading-flex mb-3">
      <div className="heading-left">
        <h2 className="title text-center mb-4">Explore Products</h2>
      </div>
      
      {/* <div className="heading-right">
        <Link to="/" className="title-link">View All Recommendadion <i className="icon-long-arrow-right" /></Link>
      </div> */}
    </div>
    {/* End .heading */}
    <div className="products">
      <div className="row justify-content-start">
        {/* product start */}
        {productdata?productdata.map((pitm,pk)=>(
          <div key={pk} className="col-6 col-md-4 col-lg-3">
          <div className="product product-2 text-left shadow-sm">
            <figure className="product-media ">
              <span className="product-label label-circle label-top d-flex">{parseInt((parseInt(pitm.old_price - pitm.price)/parseInt(pitm.old_price))*100)}% OFF</span>
              <Link to={`/detail/${pitm.id}`}>
                <img src={pitm.images[0].image} alt="Productimage"  className="product-image" />
              </Link>
              {/* <div className="product-action-vertical">
                <Link to="/" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
              </div> */}
              {/* End .product-action */}
              <div className="product-action">
              <Link to={`/detail/${pitm.id}`} className="btn-product btn-cart" title="Buy Now"><span>Buy Now</span></Link>
                {/* <Link to={`/detail/${pitm.id}`} className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link> */}
              </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
              <div className="product-cat">
                <Link to={`/detail/${pitm.id}`}>{pitm.brand?pitm.brand:<p style={{height:"18px"}}></p>}</Link>
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
