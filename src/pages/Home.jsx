import Navbar from "../components/Navbar";
import SlideShow from "../slide"

import Svga from "../components/icon/Svga"
import "../App.css";
import Tabs from '../tabs';

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
                 width:"30rem",
                 marginLeft:"4.5rem",
                 fontSize:"1em",
                 fontWeight:"500",
                 marginTop:"1rem"

               }}>Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</p>
               <form  style={{display:"flex",marginTop:"1rem"}}>
                <input style={{
                    border:"2px solid #00b289",
                    height:"4.5rem",
                    fontSize:"1rem",
                    fontWeight:"500",
                    width:"18.5rem",
                    marginLeft:"7.5rem",
                    paddingLeft:"1rem",
                    marginTop:"1rem",
                    borderRadius:".2rem 0rem 0rem .2rem",
                }} type="text" placeholder="Enter your email" />
                {/* <Button p="2.2rem" border="1px" mt="-.4rem">START FREE</Button> */}
                <button style={{
                    
                    marginTop:"1rem",
                    fontSize:".8rem",
                    height:"4.5rem",
                    fontWeight:"bold",
                    width:"10rem",
                    borderRadius:"0rem .2rem .2rem 0rem",
                    color:"white",
                    backgroundColor:"#00b289"
                   
                    
                }}>START FREE</button>
                </form>
            </div>
            <div>
                <img style={{
                    width:"49rem",
                    marginTop:"-3rem",
                    marginRight:"-15rem"

                }} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png" alt="" />
            </div>
            </div> 
           
            <div style={{
                 marginTop:"10rem",
                 
            }} >
                <h1 style={{
                        fontSize:"2rem",
                        fontFamily:"none",
                        color:"#4c525a",
                        fontFamily:"Amerigo-bt roman opt"
                }}>Make more, manage less</h1>
                <p style={{
                     marginLeft:"21rem",
                     width:"43rem",
                     fontSize:"1.1em",
                     textAlign:"center",
                     fontWeight:"400"
                }}>Bonsai integrates and automates every step of your business so it runs seamlessly - from proposal to tax season.</p>
            </div>


             <div style={{
                  display:"flex",
                  justifyContent:"center",
                  gap:"4rem",
                  marginTop:"2.5rem",
                  fontWeight:"500"

             }}>
                <div>
                  <h2>Without Bonsai</h2>
                  <img style={{
                             marginTop:"3rem"
                    }}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg" alt="" />
                </div>
                <div>
                    <h2>With Bonsai</h2>
                    <img style={{
                            width:"28rem",
                            height:"19rem",
                             marginTop:"3rem"
                    }} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg" alt="" />
                </div>
             </div>
              
              <Tabs/>

              <div style={{
                 marginTop:"2rem",
                 
            }} >
                <h1 style={{
                        fontSize:"2rem",
                        fontFamily:"none",
                        color:"#4c525a",
                        textAlign:"center",
                        fontWeight:"400",
                        width:"36rem",
                        marginLeft:"24rem",
                        fontFamily:"Amerigo-bt roman opt",
                        lineHeight:"2.5rem"
                }}>Trusted by 500K+ self-employed workers
                and small businesses</h1>
                <p style={{
                     marginLeft:"21rem",
                     paddingTop:"1rem",
                     width:"43rem",
                     fontSize:"1.5rem",
                     textAlign:"center",
                     fontWeight:"300",
                     lineHeight:"1.8rem",
                   
                    
                }}>Whether you’re just getting started or your business is booming, Bonsai has you covered.</p>
            </div>


            <div style={{
                display:"flex",
                justifyContent:"center",
                marginTop:"4rem",
                marginLeft:"8rem",
                gap:"4rem"
            }}>
                <div style={{
                   
                    width:"25rem",

                }}>
                     <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg" alt="" />
                    <h2 style={{
                        textAlign:"left",
                        paddingBottom:".8rem",
                        paddingTop:"1.5rem",
                        fontWeight:"bolder",
                        fontFamily:"sans-serif",
                        color:"#4c525a"
                    }}>Built for All Work Types</h2>
                    <p style={{
                        textAlign:"left",
                        marginLeft:"-3rem",
                        width:"20rem",
                        color:"#4c525a",
                       fontWeight:"300",
                       fontSize:"15px",
                        fontFamily:"sans-serif"
                    }}>We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.</p>
                </div>
                <div style={{
                   
                    width:"25rem"
                }}>
                     <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg" alt="" />
                     <h2 style={{
                        textAlign:"left",
                        paddingBottom:".8rem",
                        paddingTop:"1.5rem",
                        fontWeight:"bolder",
                        fontFamily:"sans-serif",
                        color:"#4c525a"
                        
                    }}>Built for Global Businesses</h2>
                     <p style={{
                        textAlign:"left",
                        marginLeft:"-3rem",
                        width:"20rem",
                        color:"#4c525a",
                        fontWeight:"300",
                        fontSize:"15px",
                        fontFamily:"sans-serif"
                    }}>Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.</p>
                </div>
            </div>

            <h1 style={{
                        fontSize:"2rem",
                        fontFamily:"none",
                        color:"#4c525a",
                        textAlign:"center",
                        fontWeight:"400",
                        width:"36rem",
                        marginTop:"8rem",
                        marginLeft:"24rem",
                        fontFamily:"Amerigo-bt roman opt",
                        lineHeight:"2.5rem"
                }}>Don't just take it from us.</h1>

               <SlideShow/>
                
        </div>
    )
}

export default Home;