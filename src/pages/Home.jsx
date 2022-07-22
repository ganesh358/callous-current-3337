import Navbar from "../components/Navbar";


import Svga from "../components/icon/Svga"

function Home(){
    return (
        
        <div>
            <Navbar/>
            <h1>helooe</h1>
            <h1>helooe</h1>
            <h1>helooe</h1>
           <div style={{
            display:"flex",
            marginTop:"10rem",
            justifyContent:"space-between"
           }}>
            <div>
               <h1 style={{
                    fontSize:"2.6rem",
                    fontFamily:"none",
                    width:"28rem",
                    textAlign: "left",
                    marginLeft:"7.5rem"

                }}>Everything you need to run your freelance business.</h1>
               <p style={{
                 width:"30 rem",
                 marginLeft:"4.5rem",
                 fontSize:"1em",
                 fontWeight:"500",
                 marginTop:"1rem"

               }}>Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</p>
                <input style={{
                    border:"1px solid black",
                }} type="text" />
                
            </div>
            <div>
                <img style={{
                    width:"49rem",
                    marginTop:"-3rem",
                    marginRight:"-15rem"

                }} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png" alt="" />
            </div>
            </div> 
           
        

           
           
        </div>
    )
}

export default Home;