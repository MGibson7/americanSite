import NavBar from "../../components/navbar/NavBar"
import "./home.css"

const Home = () => {
  return (
    

    <>
    <div className="textcolor-White" style={{position: "fixed", bottom: "0", left: "1050px"}}>
            <img src="./dtv.png" alt="" style={{maxWidth: "500px", margin: "0px"}} />
            <h3 style={{margin: "0px", textAlign: "center"}}>AUTHORIZED RETAILER</h3>
        </div>
    <div className="container">
        
        <NavBar/>
        <div>
            <video className="zIndex" style={{width: '100%', position: 'relative', top: "-130px"}}
            src="./video.mp4"
            muted = "muted"
            loop = "yes"
            autoPlay = "yes"

            ></video>
        </div>

        <div className="flex textcolor-White" style={{position: "absolute", top: "300px", left: "25px", fontSize: "25px"}}>
            <h1 style={{maxWidth: "700px"}}>Business Entertainment <span className="textcolor-lightBlue">That's Out of This World</span></h1>
            
        

        </div>
        
        
        
    </div>
    </>
    
  )
}

export default Home