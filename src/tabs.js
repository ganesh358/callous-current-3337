import {  Link } from "@chakra-ui/react";
import {ChevronRightIcon ,ArrowForwardIcon} from "@chakra-ui/icons"
import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}

          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg" alt="" />
         Proposals
         
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg" alt="" />
          Contracts
         
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img style={{width:"1.3rem"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg" alt="" />
          Client CRM
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img style={{borderRadius:"2rem"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg" alt="" />
          Time Tracking
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg" alt="" />
          Invoices
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg" alt="" />
          Task Tracking
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
          style={{
            display:"flex",
            gap:"1.2rem",
          }}
        >
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cee21feb676_icon%207.svg" alt="" />
          Accounting & Taxes
        </button>
        <button
          className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(8)}
          style={{
            display:"flex",
            gap:"1.2rem",
            
          }}
        >
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e72bbe6e8264bb7bbfe4820_dark-forms.svg" alt="" />
         Forms
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h1>Win More Work</h1>
        
          <p>With just a few clicks, you can craft </p>
          <p> structured proposals with clear</p>
          <p style={{paddingBottom:".8rem" }}>estimates to close your deals faster.</p>
         
          
          <Link to="/"  fontSize="1rem" ml="-15.9rem" fontWeight="500" color="green.400" >EXPLORE PROPOSALS <ArrowForwardIcon/></Link>
            
          <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png" alt="" />
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <h1>Protect Your Business</h1>
        
        <p>Simply answer a few questions to</p>
        <p>generate an already vetted contract</p>
        <p>template. Once you hit send, the</p>
        <p style={{paddingBottom:".8rem" }}>contract can be e-signed in minutes.</p>
        
       
        
        <Link to="/"  fontSize="1rem" ml="-15.9rem" fontWeight="500" color="green.400" >EXPLORE CONTRACTS<ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover"}}  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png" alt="" />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h1>Stay Organized</h1>
        
        <p>Manage your clients and ongoing </p>
        <p> projects all in one place. Organize</p>
        <p>all the documents, files and</p>
        <p>payments together for you and your</p>
        <p style={{paddingBottom:".8rem" }}> client.</p>
           
       
        
        <Link to="/"  fontSize="1rem" ml="-17rem" fontWeight="500" color="green.400" >EXPLORE PROJECTS<ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover",mixBlendMode:"multiply"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png" alt="" />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
           <h1>Keep It Simple</h1>
        
        <p>Easily track the time you're working, </p>
        <p>automatically populate timesheets</p>
        <p>and seamlessly switch between your</p>
        <p style={{paddingBottom:".8rem" }}>Projects for the day.</p>
       
        
        <Link to="/"  fontSize="1rem" ml="-14rem" fontWeight="500" color="green.400" >EXPLORE TIME TRACKING <ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover",mixBlendMode:"multiply"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png" alt="" />
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
           <h1>Get Paid Faster</h1>
        
        <p>Create and customize invoices,</p>
        <p>receive updates about payment</p>
        <p>timelines, and have automatic</p>
        <p>payment reminders sent on your </p>
        <p style={{paddingBottom:".8rem" }}>behalf.</p>
       
        
        <Link to="/" fontSize="1rem" ml="-17.5rem" fontWeight="500" color="green.400" >EXPLORE INVOICES<ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover",mixBlendMode:"multiply"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png" alt="" />
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <h1>Be More Effective</h1>
        
        <p>Give your day more structure with</p>
        <p> simple task management on your</p>
        <p>projects. Track time for each task  </p>
        <p style={{paddingBottom:".8rem" }}>and stay up-to-date.</p>
       
        
        <Link to="/" fontSize="1rem"  ml="-18.5rem" fontWeight="500" color="green.400" >EXPLORE TASKS<ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover",mixBlendMode:"multiply"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png" alt="" />
        </div>
        <div
          className={toggleState === 7 ? "content  active-content" : "content"}
        >
           <h1>Automate Your Finances</h1>
        
        <p>Don't worry about freelance finances</p>
        <p>when you have automatic expense</p>
        <p>tracking, income reporting and</p>
        <p style={{paddingBottom:".8rem" }}>estimated tax planning.</p>
       
        
        <Link to="/" fontSize="1rem" ml="-11rem" fontWeight="500" color="green.400" >EXPLORE ACCOUNTING & TAXES <ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover",mixBlendMode:"multiply"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png" alt="" />
        </div>
        <div
          className={toggleState === 8 ? "content  active-content" : "content"}
        >
           <h1>Ask Your Clients</h1>
        
        <p>Create your own customized forms</p>
        <p>and questionnaires for clients and</p>
        <p style={{paddingBottom:".8rem" }}>kicking off new projects</p>
       
        
        <Link to="/"  fontSize="1rem" ml="-18rem" fontWeight="500" color="green.400" >EXPLORE FORMS<ArrowForwardIcon/></Link>
        <img style={{marginLeft:"16rem" , width:"35rem",objectFit:"cover", mixBlendMode:"multiply" }} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png" alt="" />
        </div>
        
      </div>
      
    </div>
  );
}

export default Tabs;
















