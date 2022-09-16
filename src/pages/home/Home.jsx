import NavBar from "../../components/navbar/NavBar"
import "./home.css"

const Home = () => {
  return (
    

    <>
    <div className="textcolor-White" style={{backgroundColor: "black", position: "fixed", bottom: "10px", right: "15px", opacity: "0.7", borderRadius: "20%"}}>
            <img src="./dtv.png" alt="" style={{maxWidth: "200px", margin: "0px"}} />
            <h3 style={{margin: "0px", textAlign: "center", fontSize: "10px"}}>AUTHORIZED RETAILER</h3>
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

        <div className="flex textcolor-White" style={{position: "absolute", top: "200px", left: "25px", fontSize: "50px"}}>
            <h1 style={{maxWidth: "600px", fontSize: "50px"}}>Business Entertainment <span className="textcolor-lightBlue">That's Out of This World</span></h1>
            
            
        

        </div>

       
        
        
        
    </div>
    </>
    
  )
}

export default Home