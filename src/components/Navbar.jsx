import { Box, Button, Flex, Spacer} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import "./Navbar.css";
import {ChevronDownIcon} from "@chakra-ui/icons"

function Navbar() {

    
  return (
    <Box >
      <Flex width="100%" gap="1rem"  bgColor="white" position="fixed"    p="1rem"    justifyContent="space-around"  >
      
        {/* <Spacer /> */}
       <Box mt=".5rem" ml="-2rem"><Link href="/"><img style={{ width:"15rem",height:"1.9rem"}} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" alt="" /></Link> </Box>
       <Box display="flex">
       <div class="dropdown">
            <button class="dropbtn">Product <ChevronDownIcon/></button>
            <div class="dropdown-content">
                <div>
                <h3>Bonsai Workflow</h3>
                <p>Look professional, win more clients</p>
                <p>and manage your business from</p>
                <p> one place</p>
                </div>
                <hr/>
                <div>
                <h3>Bonsai Tax</h3>
                <p>Track expenses, maximize tax write-</p>
                <p>offs, and estimate taxes without the</p>
                <p> headache</p>
                </div>
                <hr/>
                <div>
                <h3>Bonsai Cash</h3>
                <p>Bonsai’s all-in-one financial hub: No</p>
                <p>fees and lightning fast payouts</p>
                </div>
            </div>
            </div>
           
            <div class="dropdown">
            <button class="dropbtn">Templates <ChevronDownIcon/></button>
            <div class="dropdown-content" id="drop">
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" /> <p> Contract Templates</p></div>
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" /> <p> Proposal Templates</p></div>
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" alt="" /> <p>Invoice Templates</p></div>
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="" /> <p>Agreement Templates </p></div>
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="" /> <p>Quote Templates</p></div>
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg" alt="" /> <p>  Scope of Work Templates</p></div>
                  <div><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="" /> <p>Brief Templates</p></div>
        
            </div>
            </div>
           
          <div id="lnk">
          <Link href="/pricing" fontSize='md' mt=".1rem" ml="2rem">Pricing</Link>
          
           <Link href="/Reviews" fontSize='md'mt=".1rem" ml="3rem">Reviews</Link>
          </div>
          </Box>
            <Box>
            <div>
            <Link href='/login'>
            <button id="btn" > GO TO DASHBOARD</button>
           </Link>
                
            </div>
            </Box>
      </Flex>
      
    </Box>
  );
}

export default Navbar;

