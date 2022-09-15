import "./navbar.css"

const NavBar = () => {
  return (
    <div className='flex marginAuto latoFont bg-darkBlue spaceBtwn textcolor-White alignVertCent' style={{position: "sticky", top: "0", zIndex: "1000", opacity: "0.7"}}>
        <div className="logo flex alignVertCent w33" style={{marginLeft: '50px'}}>
            <img className='maxWidth' src="./logo.png" alt="" />
            <h1 className=" font50 bold">A<span className="textcolor-lightBlue">C</span>T</h1>
        </div>
        <div className="flex spaceBtwn w33" style={{textAlign: "center"}}>
            <a href="" className="textcolor-White">SERVICE</a>
            <a href="" className="textcolor-White">PRODUCTS</a>
            <a href="" className="textcolor-White">ABOUT US</a>
            
        </div>
        <div className="flex w33" style={{justifyContent:'right'}}>
        <button className="bg-lightBlue textcolor-White" style={{borderRadius: '50%', padding: '10px', textAlign: "right", marginRight: '50px'}}>
            ORDER NOW!
        </button>

        </div>
        

    </div>
  )
}

export default NavBar