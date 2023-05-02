import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Simplecontext } from './Simplecontext'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Callaxios from './Callaxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Productdetail() {
  const {productdata} =useContext(Simplecontext)
  const  urlparam  = useParams()
  const [citydata,setcitydata]=useState([])
  const [customername,setcustomername]=useState()
  const [contact,setcontact]=useState()
  const [quantity,setquantity]=useState()
  const [city,setcity]=useState()
  const [address,setaddress]=useState()
  const [isloading,setisloading]=useState(false)
  const [missorder,setmissorder]=useState('')
  const [color,setcolor]=useState('')
  const [size,setsize]=useState(0)
  let navigate = useNavigate();
  let productid = urlparam.id
  useEffect(() => {
    // Getproduct()
    window.scrollTo(0, 0);
    Getcity()
    Getcustomer()
    localStoragehandler(window.localStorage.getItem("j_datetime"))
    // const interval = setInterval(() => {
    //   // console.log('This will run every 15 minutes!');
    //   handlerremove()
    // }, 900000);
    // return () => clearInterval(interval);
   
  }, [])
  let w_name = window.localStorage.getItem("jc_name")
  let w_contact =window.localStorage.getItem("jc_contact")
  let w_city =window.localStorage.getItem("jc_city")
  let w_address =window.localStorage.getItem("jc_address")
  let storedDate =window.localStorage.getItem("j_datetime")
  // console.log("storedDate",storedDate)
  const Getcustomer=()=>{
    
    // console.log("name",name)
    if(w_name |w_contact|w_city |w_address !== "undefined"){
      // console.log("not")
      setcustomername(window.localStorage.getItem("jc_name"))
      setcontact(window.localStorage.getItem("jc_contact"))
      setcity(window.localStorage.getItem("jc_city"))
      setaddress(window.localStorage.getItem("jc_address"))
    }
  }
  
  const notify = (msg) => toast.success(msg, {
    position: "top-center",
    });
  const notifyerror = (msg) => toast.error(msg, {
    position: "top-center",
    });
  const Getcity =async()=>{
    try {
      let data =await Callaxios("get","product/city/")
      // console.log("datacity",data)
      if (data.status===200){
        setcitydata(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  
  }
  // console.log("id",productid)
  let pdata =  productdata.filter(t=>t.id===(parseInt(productid)))[0]
  // console.log("data",pdata)
  const postorder=async(e)=>{
    e.preventDefault();
    setisloading(true)
    try {
      // let price =quantity.split('-')[1]     
      let delivery = pdata.delivery_charge ? pdata.delivery_charge:0
      
      const datalist = {
        product :productid,
        customer_name :customername,
        delivery_address:address,
        quantity:quantity.split('-')[0],
        city:city,
        contact:`+971 ${contact}`,
        purchasestatus:"new",
        price:quantity.split('-')[1],  
        delivery_charge:delivery,
        missorder:missorder,
        color:color,
        size:size
        // total:price+parseFloat(pdata.delivery_charge)
      }
      let data = await Callaxios("post","product/order/",datalist)
      // console.log("datapost",data)
      if(data.data.Status===200){
        notify("Ordered Successfully")  
        localstorage()      
        setallnull()
        submit()
        setisloading(false)
        setmissorder('')
        
      }else{
        notifyerror("Something Went Wrong ")
        setisloading(false)
      }
    } catch (error) {
      console.log(error)
      setisloading(false)
    }
    
  }
  const localstorage=()=>{
    let currentDateTime = new Date();
    window.localStorage.setItem("jc_name",customername)
    window.localStorage.setItem("jc_contact",contact)
    window.localStorage.setItem("jc_city",city)
    window.localStorage.setItem("jc_address",address)
    window.localStorage.setItem("j_datetime",currentDateTime)
  }
  // const handlerremove=()=>{
  //   if (w_name){
  //     window.localStorage.setItem("jc_name",'')
  //     window.localStorage.setItem("jc_contact",'')
  //     window.localStorage.setItem("jc_city",'')
  //     window.localStorage.setItem("jc_address",'')
  //     window.localStorage.setItem("j_datetime",'')
  //     // to reload location
  //     window.location.reload();
  //   }
   
  // }
  const setallnull=()=>{   
    setcustomername('')
    setcontact('')
    setquantity('')
    setcity('')
    setaddress('')
    setcolor('')
    setsize(0)
    
  }
  const submit = () => {
    confirmAlert({
      title: '',
      message: 'Continue Shopping?',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>{return navigate('/')}
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ],overlayClassName: "overlay-custom-class-name"
    });
  };
  const misorderhandler=async()=>{
    if(customername && city && contact){
      if(!missorder && quantity){
        // let price =quantity.split('-')[1]   
        let delivery = pdata.delivery_charge ? pdata.delivery_charge:0 
        let datalist = {
        product :productid,
        customer_name :customername,
        delivery_address:address,
        quantity:quantity.split('-')[0],
        city:city,
        contact:`+971${contact}`,
        purchasestatus:"new",
        price:quantity.split('-')[1]   ,
        delivery_charge:delivery,
        color:color,
        size:size
        // total:price+parseFloat(pdata.delivery_charge)
        }
        let data =  await Callaxios("post","product/missingorder/",datalist)
        // console.log("data",data)
        if (data.data.Status===200){
          setmissorder(data.data.m_id)
        }
      }else{
        // console.log("missordreelse",missorder)
      }
    }
  }
  const localStoragehandler =(storedDate)=>{
    // console.log("window store",storedDate)
    if (storedDate!=="undefined" && storedDate!=='' && storedDate!==null){
      let datestored= new Date(storedDate)
      // console.log("storedtime",datestored)
      const currentDate = new Date();
      
      const diffInMinutes = (currentDate.getTime() - datestored.getTime()) / (1000 * 60);
      // console.log("difference",diffInMinutes)
      if(diffInMinutes > 15){
        window.localStorage.setItem("jc_name",'')
        window.localStorage.setItem("jc_contact",'')
        window.localStorage.setItem("jc_city",'')
        window.localStorage.setItem("jc_address",'')
        window.localStorage.setItem("j_datetime",'')
      }
      
      
    }
   
  }
  return (
    <div className="page-wrapper">
      <ToastContainer/>
      <main className="main">
       <div className="page-content">
  <div className="container mt-2 ">
    <div className="product-details-top">
      <div className="row">
        <div className="col-md-6 ">
          <div className="product-gallery product-gallery-vertical p-4 ">
            <div className="row">
            <Carousel  infiniteLoop >
                        
                        {pdata ? pdata.images?pdata.images.map((itm,k)=>(
                          <div key={k}>
                              <img src={itm.image} alt='productimage'/>
                            
                          </div>
                          )):null:null}
                       
                          
                      </Carousel>
             
              {/* End .product-image-gallery */}
            </div>{/* End .row */}
          </div>{/* End .product-gallery */}
        </div>{/* End .col-md-6 */}
        <div className="col-md-6">
          <div className="product-details text-left p-4">
            <h1 className="product-title">{pdata?pdata.title:null}</h1>{/* End .product-title */}
            
              <span className='soldclass'>{pdata? pdata.Fake_order_sold:null} Sold</span>
            
            {/* End .rating-container */}
            <div className="product-price">
              AED {pdata?pdata.price:null} 
              <del className='ml-4 text-muted'>AED {pdata?pdata.old_price:null}</del>
            </div>{/* End .product-price */}
            <div style={pdata?pdata.delivery_charge===0?{display:"none"}:{display:"block"}:{display:"none"}}>
              <span>Delivery Charge : AED {pdata?pdata.delivery_charge:null}</span>
            </div>
            <form onSubmit={(e)=>postorder(e)} >
              <div className="row">
                <div className="col-lg-12">

                  {w_name==="undefined"||w_name==='' ||w_name===null?<>
                  <div className="row">
                    <div className="col-sm-12">
                      <label>First Name *</label>
                      <input type="text"  onChange={(e)=>setcustomername(e.target.value)} value={customername} placeholder='Enter Your name' className="form-control" required />
                    </div>{/* End .col-sm-6 */}
                  </div>{/* End .row */}
                  <label>Mobile Number *</label>
                  <img src="https://jetronics.ae/uploads/lib/AE.png" alt='logo' width={20} className="flag" />
                  <span className="code flag_1">+971&nbsp;</span>
                  <input type="tel" id="phone" onChange={(e)=>setcontact(e.target.value)}value={contact} className="form-control" required style={{marginTop: '-40px', paddingLeft: 75}} maxLength={9} />
                  {contact?(contact.length > 9 | contact.length < 9 )  ? <p className='text-danger'>Please give your valid mobile number '512345678' without the '0' in front is not valid.</p>:null:null} 
                  <label>Emirates *</label>
                  <select id="city" onChange={(e)=>setcity(e.target.value)} value={city}  className="form-control" required>
                    <option value='' hidden>Select City</option>
                    {citydata ? citydata.map((citm,ck)=>(
                      <option key={ck} value={citm.city_name}>{citm.city_name}</option>
                    )) :null}
                  </select>
                  
                  </>:<>

                        <div className='col-12 row mt-3'>
                          <div className='col-6'>
                          <label>Name: {customername}</label>
                          </div>
                          <div className='col-6'>
                          <label>Mobile: {contact}</label>
                          </div>
                          <div className='col-6'>
                          <label>City: {city}</label>
                          </div>
                          <div className='col-6'>
                          <label>Address: {address}</label>
                          </div>
                          
                          
                          
                          
                        </div>
                        
                        </>}
                        {pdata?pdata.colour?<>
                        <label>Color *</label>
                  <select id="Color" onChange={(e)=>setcolor(e.target.value)} value={color} className="form-control" required>
                          <option value='' hidden>Select Color</option>
                    {pdata? pdata.colour?pdata.colour.split(',').map((pitm,pk)=>(
                        <option key={pk} value={pitm}>{pitm} </option>
                      )):null
                        :null}
                  </select>
                  </>:null:null}
                        {pdata?pdata.size?<>
                        <label>Size *</label>
                  <select id="size" onChange={(e)=>setsize(e.target.value)} value={size} className="form-control" required>
                          <option value='' hidden>Select Size</option>
                    {pdata? pdata.size?pdata.size.split(',').map((pitm,pk)=>(
                        <option key={pk} value={pitm}>{pitm} </option>
                      )):null
                        :null}
                  </select>
                  </>:null:null}
                        <label>Quantity *</label>
                  <select id="Quantity" onChange={(e)=>setquantity(e.target.value)} onClick={()=>misorderhandler()} value={quantity} className="form-control" required>
                          <option value='' hidden>Select Quantity</option>
                    {pdata? pdata.price_list?pdata.price_list.split(',').map((pitm,pk)=>(
                        <option key={pk} value={pitm}>{pitm} AED</option>
                      )):Array(10).fill(0).map((itm,k)=>(
                        <option key={k} value= {`${ k+1 + "-" + (pdata.price)*(k+1)}`}  >{`${ k+1 + "-" + (pdata.price)*(k+1)}`} AED</option>
                      ))
                        :null}
                  </select>
                  {w_name==="undefined"||w_name==='' ||w_name===null?<>
                  
                  <label>Delivery Address*</label>
                  <input placeholder='Enter Delivery Address' value={address} onChange={(e)=>setaddress(e.target.value)} type="text" className="form-control mb-3" required />
                  </>:null}
                  <input type="submit" className="form-control submit-button" />
                  <span className="slider-loader" style={isloading ?{display:'block'}:{display:'none'}} />
                </div>{/* End .col-lg-9 */}
              </div>{/* End .row */}
            </form>
          </div>{/* End .product-details */}
        </div>{/* End .col-md-6 */}
      </div>{/* End .row */}
    </div>{/* End .product-details-top */}
    <div className="product-details-tab">
      <ul className="nav nav-pills justify-content-center" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
          <div className="product-desc-content">
            <h3>Product Information</h3>
            <p >{pdata?pdata.description :null} </p>
             </div>{/* End .product-desc-content */}
        </div>{/* .End .tab-pane */}
       
        
      </div>{/* End .tab-content */}
    </div>{/* End .product-details-tab */}
  </div>{/* End .container */}
</div>
</main>
    </div>
  )
}
