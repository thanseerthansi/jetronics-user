import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Simplecontext } from './Simplecontext';

export default function Header() {
  const  urlparam  = useParams()
  let urlcategory =urlparam.category
  const {searchvalue,setsearchvalue,contactdata} =useContext(Simplecontext)
  
  let navigate = useNavigate();
  const searchhandler=(e)=>{
    e.preventDefault();
    // console.log("sear",searchvalue)
    return navigate(`/product/all products`)
  }
  return (
    <div>
        <div className="page-wrapper">
    <header className="header header-intro-clearance header-4">
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <Link to="/" className="logo">
              <img src="/assets/images/demos/demo-4/logo.png" alt="Jetronics Logo" width={150} height={30} />
            </Link>
          </div>{/* End .header-left */}
          <div className="header-right">
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
              <Link to="/" className="search-toggle" role="button"><i className="icon-search" /></Link>
              <form onSubmit={(e)=>searchhandler(e)}>
                <div className="header-search-wrapper search-wrapper-wide">
                  <label htmlFor="q" className="sr-only">Search</label>
                  <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                  <input onChange={(e)=>setsearchvalue(e.target.value)} value={searchvalue} type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                </div>{/* End .header-search-wrapper */}
              </form>
            </div>{/* End .header-search */}
          </div>
        </div>{/* End .container */}
      </div>{/* End .header-middle */}
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-center">
            <nav className="main-nav">
              <ul className="menu ">
                <li className={urlcategory===null?"active":""}>
                 
                  <Link to="/">Home</Link>

                </li>
                <li className={urlcategory==="all products"?"active":""}>
                  <Link to="/product/all products">All products</Link>
                </li>
                <li className={urlcategory==="deals"?"active":""}>
                  <Link to="/product/deals">Deals</Link>
                </li>
              </ul>{/* End .menu */}
            </nav>{/* End .main-nav */}
          </div>{/* End .header-center */}
          <div className="header-right">
          <a href={contactdata?.facebook??"/"}><i className="la la-facebook" /></a>
                  <a href={contactdata?.instagram??"/"}><i className="la la-instagram" /></a>
                  <a href="/"><i className="la la-twitter" /></a>
          </div>
        </div>{/* End .container */}
      </div>{/* End .header-bottom */}
    </header>{/* End .header */}
    </div>
    {/* Mobile Menu */}
  <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container mobile-menu-light">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close"><i className="icon-close" /></span>
      <form onSubmit={(e)=>searchhandler(e)} className="mobile-search">
        <label htmlFor="mobile-search" className="sr-only">Search</label>
        <input  onChange={(e)=>setsearchvalue(e.target.value)} value={searchvalue} type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
        <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
      </form>
      <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className={urlcategory===null?"active":""}>
                <Link to="/">Home</Link>
              </li>
              <li className={urlcategory==="all products"?"active":""}>
                <Link to="/product/all products">All products</Link>
              </li>
              <li className={urlcategory==="deals"?"active":""}>
                 <Link to="/product/deals">Deals</Link>
              </li>
            </ul>
          </nav>{/* End .mobile-nav */}
        </div>{/* .End .tab-pane */}
      </div>{/* End .tab-content */}
      <div className="social-icons">
        <a href="/" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
        <a href="/" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
        <a href="/" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
        <a href="/" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
      </div>{/* End .social-icons */}
    </div>{/* End .mobile-menu-wrapper */}
  </div>{/* End .mobile-menu-container */}
    </div>
  )
}
