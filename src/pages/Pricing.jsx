import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Switch,FormControl,FormLabel } from '@chakra-ui/react'
import {CheckIcon} from "@chakra-ui/icons"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'



function Pricing(){
    return (
        <div>
         <Navbar/>
         <h1>helooe</h1>
            <h1>helooe</h1>
            <h1>helooe</h1>
            <div style={{
               
                paddingLeft:"56rem",
                marginTop:"8rem",
            }}>
            <img style={{width:"8rem",
        }} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg" alt="" />
            </div>
            <div style={{
                
                display:"flex",
                width:"80rem",
                height:"4rem",
              paddingLeft:"25rem",
          
            }}>

                <h1 style={{
                    width:"28rem",
                    fontSize:"2.3rem",
                    fontFamily:"none",
                   
                    color:"#4c525a",
                    
                }}>Plans & Pricing</h1>
               
                <FormControl display='flex' alignItems='center' >
                    <FormLabel htmlFor='plan' mb='0' color="grey" ml="2rem" fontSize="1rem">
                     MONTHLY
                    </FormLabel>
                    <Switch id='plan' ml="2rem" size='lg' colorScheme="green"/>
                    <FormLabel htmlFor='plan' mb='0' ml="2rem" >
                     YEARLY
                    </FormLabel>
                 </FormControl>
                 
                
                 
            </div>


            <div style={{
              
                width:"80%",
                marginLeft:"8.5rem",
                height:"55rem",
                display:"flex",
                justifyContent:"space-between",
                marginTop:"2rem"
            }}>
                <div style={{border:"1px solid grey",width:"21.5rem",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <h1 style={{fontSize:"1.4rem",textAlign:"left",marginLeft:"2.2rem",fontWeight:"500",marginTop:"4rem"}}>Starter</h1>
                    <p style={{fontSize:".8rem",textAlign:"left",width:"17rem",marginLeft:"-.7rem",}}>Ideal for freelancers and contractors just starting out.</p>
                    <div style={{display:"flex",borderBottom:"2px solid green",width:"16rem",marginLeft:"2.5rem",marginTop:"1rem"}}>
                        <h1 style={{fontSize:'2rem',fontWeight:"400",marginLeft:"-.2rem"}}>$</h1><h1 style={{fontSize:'3.5rem',fontWeight:"600",marginLeft:".5rem"}}>24</h1><h1 style={{fontSize:'1.5rem',marginTop:"2.5rem",fontWeight:"400",marginLeft:".5rem"}}>/MONTH</h1>
                    </div>

                    <p style={{marginTop:"2rem"}}><CheckIcon pl=".3rem" color="green"/>All Templates</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Unlimited Clients & Projects</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Invoicing & Payments</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Proposals & Contracts</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Tasks & Time Tracking</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Client CRM</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Expense Tracking</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Up to 5 Project Collaborators</p>
                       
             
                 <button style={{
                 
                 fontSize:'.9rem',
                 fontWeight:"500",
                 padding:".2rem",
                 width:"16rem",
                 height:'4rem',
                 marginTop:"11rem",
                 backgroundColor:"#00af87",
                 color:"white",
                 borderRadius:".3rem"

             }}>GO TO DASHBOARD</button>
                   
                </div>
                <div style={{border:"1px solid grey",width:"21.5rem",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <h1 style={{fontSize:"1.4rem",textAlign:"left",marginLeft:"2.2rem",fontWeight:"500",marginTop:"4rem"}}>Professional</h1>
                    <p style={{fontSize:".8rem",textAlign:"left",width:"17rem",marginLeft:"-.7rem",}}>Everything a growing independent business needs to thrive.</p>
                    <div style={{display:"flex",borderBottom:"2px solid green",width:"16rem",marginLeft:"2.5rem",marginTop:"1rem"}}>
                        <h1 style={{fontSize:'2rem',fontWeight:"400",marginLeft:"-.2rem"}}>$</h1><h1 style={{fontSize:'3.5rem',fontWeight:"600",marginLeft:".5rem"}}>39</h1><h1 style={{fontSize:'1.5rem',marginTop:"2.5rem",fontWeight:"400",marginLeft:".5rem"}}>/MONTH</h1>
                    </div>

                    <p style={{marginTop:"2rem"}}><CheckIcon pl=".3rem" color="green"/>Everything in Starter plus...</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Custom Branding</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Forms & Questionnaires</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Workflow Automations</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Client Portal</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Calendly Integration</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Zapier Integration</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Up to 15 Project Collaborators</p>
                       
             
                 <button style={{
                 
                 fontSize:'.9rem',
                 fontWeight:"500",
                 padding:".2rem",
                 width:"16rem",
                 height:'4rem',
                 marginTop:"11rem",
                 backgroundColor:"#00af87",
                 color:"white",
                 borderRadius:".3rem"

             }}>GO TO DASHBOARD</button>
                   
                </div>
                <div style={{border:"1px solid grey",width:"21.5rem",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <h1 style={{fontSize:"1.4rem",textAlign:"left",marginLeft:"2.2rem",fontWeight:"500",marginTop:"4rem"}}>Business</h1>
                    <p style={{fontSize:".8rem",textAlign:"left",width:"17rem",marginLeft:"-.7rem",}}>The perfect package for small businesses and agencies.</p>
                    <div style={{display:"flex",borderBottom:"2px solid green",width:"16rem",marginLeft:"2.5rem",marginTop:"1rem"}}>
                        <h1 style={{fontSize:'2rem',fontWeight:"400",marginLeft:"-.2rem"}}>$</h1><h1 style={{fontSize:'3.5rem',fontWeight:"600",marginLeft:".5rem"}}>79</h1><h1 style={{fontSize:'1.5rem',marginTop:"2.5rem",fontWeight:"400",marginLeft:".5rem"}}>/MONTH</h1>
                    </div>

                    <p style={{marginTop:"2rem"}}><CheckIcon pl=".3rem" color="green"/>Everything in Starter and Professional plus...</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Subcontractor Management</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Hiring Agreement Templates (1099 contracts)</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Subcontractor Onboarding</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Talent Pool</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>3 Team Seats (additional seats $9/month)</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Accountant Access</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Connect Multiple Bank Accounts</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Unlimited Subcontractors</p>
                    <p style={{marginTop:"1rem"}}><CheckIcon pl=".3rem" color="green"/>Unlimited Project Collaborators</p>
                       
             
                 <button style={{
                 
                 fontSize:'.9rem',
                 fontWeight:"500",
                 padding:".2rem",
                 width:"16rem",
                 height:'4rem',
                 marginTop:"1rem",
                 backgroundColor:"#00af87",
                 color:"white",
                 borderRadius:".3rem"

             }}>GO TO DASHBOARD</button>
                   
                </div>
            </div>

            <h1 style={{
                    fontSize:"2.2rem",
                    fontFamily:"none",
                     color:"#1a202c",
                    marginTop:"7rem",
                    marginLeft:"0rem",
                    fontWeight:"400"

                }}>Super charge your work with add-ons</h1>


                <div>
                    <div style={{display:"flex",height:"10rem",justifyContent:"space-between",paddingTop:"2rem",width:"70rem",marginLeft:"7rem",paddingRight:"3rem",marginTop:"4rem" ,boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                       <div>
                       <h1 style={{textAlign:"left",marginLeft:"3rem",fontWeight:"500"}}>Collaborators</h1>
                        <p>Invite other users to specific projects for limited access and functionality.</p>
                       </div>
                       <div>
                        <h1 style={{fontSize:"2.5rem",fontWeight:"500"}}>Free</h1>
                       </div>
                    </div>
                    <div style={{display:"flex",height:"10rem",justifyContent:"space-between",paddingTop:"2rem",width:"70rem",marginLeft:"7rem",paddingRight:"3rem",marginTop:"1rem",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <div >
                       <h1 style={{textAlign:"left",marginLeft:"3rem",fontWeight:"500"}}>Partners</h1>
                        <p>Invite other users for full account access and company management..</p>
                       </div>
                       <div>
                        <h1 style={{fontSize:"2.5rem",fontWeight:"500"}}>$9</h1>
                        <p>/MONTH</p>
                       </div>
                    </div>
                    <div style={{display:"flex",height:"10rem",justifyContent:"space-between",paddingTop:"2rem",width:"70rem",marginLeft:"7rem",paddingRight:"3rem",marginTop:"1rem",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <div >
                       <h1 style={{textAlign:"left",marginLeft:"3rem",fontWeight:"500"}}>Bonsai Tax</h1>
                        <p>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
                       </div>
                       <div>
                        <h1 style={{fontSize:"2.5rem",fontWeight:"500"}}>$10</h1>
                        <p>/MONTH</p>
                       </div>
                    </div>
                </div>

                <div style={{
               borderRadius:"1rem",
               width:"58rem",
               height:"15rem",
               marginLeft:"13rem",
               marginTop:"8rem",
               display:"flex",
               justifyContent:"space-between",
               padding:"3rem",
               paddingTop:"4rem",
               backgroundColor:"#f2faff"

          }}>
            <div>
                 <h1 style={{
                       fontSize:"2.7rem",
                       marginLeft:"-8.9rem",
                       fontFamily:"none",
                       color:"#4c525a"
                 }}>It’s <span style={{color:"#00af87"}}>your</span> business.</h1>
                 <h1 style={{
                       fontSize:"2.7rem",
                       fontFamily:"none",
                       color:"#4c525a"
                 }}> We’re here to help it grow.</h1>
            </div>
            <div>
                <button style={{
                 
                    fontSize:'.9rem',
                    fontWeight:"400",
                    padding:".2rem",
                    width:"12.5rem",
                    height:'2.9rem',
                    marginTop:"2rem",
                    backgroundColor:"#00af87",
                    color:"white",
                    borderRadius:".3rem"

                }}>GO TO DASHBOARD</button>
            </div>
          </div>

          <h1 style={{
                    fontSize:"2rem",
                    fontFamily:"sans-serif",
                     color:"#00af87",
                    marginTop:"7rem",
                    marginLeft:"0rem",
                    fontWeight:"700"

                }}>Frequently Asked Questions</h1>
<div style={{width:"45rem",marginLeft:"20rem", marginTop:"2rem"}}>
<Accordion allowToggle>
  <AccordionItem>
    <h2 style={{
                fontWeight:'600',
                fontSize:"2rem",
                fontFamily:"sans-serif",
                marginLeft:"-3rem"
             }}>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontSize="1.4rem" fontWeight="700">
        How does the free trial work?
        </Box>
        <AccordionIcon fontSize="2.2rem" color="grey"/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left"  fontSize="1rem">
    When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2  style={{
                fontWeight:'600',
                fontSize:"2rem",
                fontFamily:"sans-serif",
                marginLeft:"-3rem"
             }}>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontSize="1.4rem" fontWeight="700">
        Can I change plans anytime?
        </Box>
        <AccordionIcon fontSize="2.2rem" color="grey" />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left"  fontSize="1rem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2  style={{
                fontWeight:'600',
                fontSize:"2rem",
                fontFamily:"sans-serif",
                marginLeft:"-3rem"
             }}>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontSize="1.4rem" fontWeight="700">
        How do I pause my Bonsai subscription?
        </Box>
        <AccordionIcon fontSize="2.2rem" color="grey" />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left"  fontSize="1rem">
    We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2  style={{
                fontWeight:'600',
                fontSize:"2rem",
                fontFamily:"sans-serif",
                marginLeft:"-3rem"
             }}>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontSize="1.4rem" fontWeight="700">
        What is your refund policy?
        </Box>
        <AccordionIcon fontSize="2.2rem" color="grey"/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign="left"  fontSize="1rem">
    If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
</div>
         <Footer/>

        </div>
    )
}

export default Pricing;