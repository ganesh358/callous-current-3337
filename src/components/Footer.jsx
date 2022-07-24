
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Link
  } from '@chakra-ui/react'


  function Footer(){
    return (
        <div style={{width:"58rem",marginLeft:"11.8rem",marginTop:"10rem",display:"flex",justifyContent:"space-between",padding:"2rem",gap:"12rem"}}>
        <div style={{display:"grid",height:"30rem"}}>
             <h3 style={{
                fontWeight:'600',
                fontSize:"1rem",
                fontFamily:"sans-serif",
                marginLeft:"-3rem"
             }}>PRODUCT</h3>
             <Link fontSize="1rem" textAlign="left" color="grey" mt='1rem'> Proposals</Link>
             <Link fontSize="1rem" textAlign="left" color="grey"> Contracts</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Invoicing</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Client CRM</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Time Tracking</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Task Tracking</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Forms</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Accounting</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Bonsai Tax</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Bonsai Cash</Link>
          
            <Link fontSize="1rem" textAlign="left" color="grey" mt="2rem">Pricing</Link>
             <Link fontSize="1rem" textAlign="left" color="grey">Bonsai Reviews</Link>
           

        </div>
        <div style={{display:"grid",height:"50rem"}}>
             <h3 style={{
                fontWeight:'600',
                fontSize:"1rem" ,
                fontFamily:"sans-serif",
                marginLeft:"-3rem"
             }}>FREE RESOURCES</h3>
            
             <Link  fontSize="1rem" textAlign="left" color="grey"  >Freelance Resources</Link>
             <Link fontSize="1rem" textAlign="left" color="grey" >Freelance Blog by Bonsai</Link>
             <Link fontSize="1rem" textAlign="left" color="grey" >How to Write a Contract</Link>
             <Link fontSize="1rem" textAlign="left" color="grey" >Online Signature Maker</Link>
             <Link fontSize="1rem" textAlign="left" color="grey"  mt="1rem">Self-Employed Taxes Hub</Link>
             <Link fontSize="1rem" textAlign="left" color="grey" >Self-Employed Tax Calculator</Link>
             <Link fontSize="1rem" textAlign="left" color="grey" >Self-Employed Tax Deductions</Link>
           
              <h3 style={{fontWeight:'600',
                fontSize:"1rem" ,
                fontFamily:"sans-serif",
                textAlign:"left",
                marginLeft:"-3rem"}}>Templates</h3>
          

        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem ml="-1rem">
          <h2 style={{color:"grey"}}>
            <AccordionButton w='15rem'>
              
              Invoice Templates <AccordionIcon />
              
            </AccordionButton>
          </h2>
          <AccordionPanel ml="-2.5rem" color="grey" >
            <p style={{color:"grey"}}>Invoice Templates</p>
             <p style={{color:"grey"}}>Invoice Generator</p>
             <p style={{color:"grey"}}>Blank Invoice Template</p>
                <p style={{color:"grey"}}>Consultant Invoice Template</p>
                <p style={{color:"grey"}}>Editable Invoice Template</p>
            <p style={{color:"grey"}}>Graphic Design Invoice</p>
            <p style={{color:"grey"}}>Web Design Invoice</p>
            <p style={{color:"grey"}}>Contractor Invoice Template</p>
            <p style={{color:"grey"}}>Photography Invoice Template</p>
            <p style={{color:"grey"}}>Self Employed Invoice Template</p>
            
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem ml="-1rem">
          <h2 style={{color:"grey"}}>
            <AccordionButton w='15rem'>
              <Box flex='1' textAlign='left' >
              Proposal Templates <AccordionIcon />

              </Box>
           
            </AccordionButton>
          </h2>
          <AccordionPanel ml="-2.5rem" color="grey" >
            <p style={{color:"grey"}}>Website Proposal Template</p>
             <p style={{color:"grey"}}>Digital Marketing Proposal Template</p>
                <p style={{color:"grey"}}>Social Media Marketing Proposal</p>
                <p style={{color:"grey"}}>Graphic Design Proposal</p>
                <p style={{color:"grey"}}>Freelance Proposal Template</p>
                <p style={{color:"grey"}}>SEO Proposal Template</p>
                   
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem ml="-1rem">
          <h2 style={{color:"grey"}}>
            <AccordionButton w='15rem'>
              <Box flex='1' textAlign='left' >
              Contract Templates <AccordionIcon />
              </Box>
             
            </AccordionButton>
          </h2>
          <AccordionPanel ml="-2.5rem" color="grey">
            <p style={{color:"grey"}}>Online Contract</p>
             <p style={{color:"grey"}}>Graphic Design Contract</p>
             <p style={{color:"grey"}}>Freelance Contract Template</p>
            <p style={{color:"grey"}}>Social Media Marketing Contract</p>
            <p style={{color:"grey"}}>Software Development Contract</p>
            <p style={{color:"grey"}}>Web Design Contract</p>
            <p style={{color:"grey"}}>Video Production Contract</p>
            <p style={{color:"grey"}}>Public Relations Contract </p>
             <p style={{color:"grey"}}>Translation Contract</p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem ml="-1rem">
          <h2 style={{color:"grey"}}>
            <AccordionButton w='15rem'>
              <Box flex='1' textAlign='left' >
              Agreement Templates <AccordionIcon />

              </Box>
          
            </AccordionButton>
          </h2>
          <AccordionPanel ml="-2.5rem" color="grey">
            <p style={{color:"grey"}}>Retainer Agreement Template</p>
             <p style={{color:"grey"}}>Influencer Agreement Template</p>
                <p style={{color:"grey"}}>Collaboration Agreement Template</p>
                <p style={{color:"grey"}}>Software Development Agreement</p>
                <p style={{color:"grey"}}>Marketing Agreement Template</p>
                 
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem ml="-1rem">
          <h2 style={{color:"grey"}}>
            <AccordionButton w='15rem'>
              <Box flex='1' textAlign='left' >
              Scope of Work Templates <AccordionIcon />

              </Box>
             
            </AccordionButton>
          </h2>
          <AccordionPanel ml="-2.5rem" color="grey">
            <p style={{color:"grey"}}>Website Development Scope of Work</p>
             <p style={{color:"grey"}}>Digital Marketing Scope of Work</p>
                <p style={{color:"grey"}}>Consultant Statement of Work</p>
                <p style={{color:"grey"}}>Template</p>
                <p style={{color:"grey"}}>Software Development Scope of Work</p>
                  
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem ml="-1rem">
          <h2 style={{color:"grey"}}>
            <AccordionButton w='15rem'>
              <Box flex='1' textAlign='left' >
              Quote Templates<AccordionIcon />
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel ml="-2.5rem" color="grey">
            <p style={{color:"grey"}}>Freelance Quotation Template</p>
             <p style={{color:"grey"}}>Web Design Quotation Template</p>
                <p style={{color:"grey"}}>Graphic Design Quotation Template</p>
                <p style={{color:"grey"}}>Interior Design Quotation Template</p>
                <p style={{color:"grey"}}>Video Production Quotation Template</p>
                 <p style={{color:"grey"}}>Social Media Marketing Quotation</p>
                   
          </AccordionPanel>
        </AccordionItem>
      
      </Accordion>
      <Link fontSize="1rem" textAlign="left" color="grey">Credit Note Templates</Link>
      <Link fontSize="1rem" textAlign="left" color="grey">Estimate Templates</Link>

    </div>
    <div style={{display:"grid",height:"22rem"}}>
                             <h3 style={{
                                fontWeight:'600',
                                fontSize:"1rem" ,
                                fontFamily:"sans-serif",
                                textAlign:"left",
                                marginLeft:"-3rem"
                             }}>BONSAI</h3>
                             <Link fontSize="1rem" textAlign="left" color="grey" mt='1rem'>About</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">Careers</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">Support</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">LinkedIn</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">Twitter</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">Privacy policy</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">Legal</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey" mt="2rem">Affiliates</Link>
                             <Link fontSize="1rem" textAlign="left" color="grey">Write for Us</Link>

                             <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem mt="2rem" ml="-1rem">
                            <h2 style={{color:"grey"}}>
                                <AccordionButton w='15rem'>
                                <Box flex='1' textAlign='left' >
                                Comparisons<AccordionIcon />
                                </Box>
                                
                                </AccordionButton>
                            </h2>
                            <AccordionPanel ml="-2.5rem" color="grey">
                                <p style={{color:"grey"}}>Freshbooks Alternatives</p>
                                <p style={{color:"grey"}}>Quickbooks Alternatives</p>
                                    <p style={{color:"grey"}}>Wave vs Quickbooks</p>
                                    <p style={{color:"grey"}}>Xero vs Quickbooks</p>
                                    <p style={{color:"grey"}}>Freshbooks vs Quickbooks</p>
                                 
                                    
                            </AccordionPanel>
                            </AccordionItem>
                            </Accordion>

                        </div>
                   </div>
    );
  }

  export default Footer;