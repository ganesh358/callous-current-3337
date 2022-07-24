import { Box, Button, Flex, Spacer} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import "./Navbar.css";
import {ChevronDownIcon} from "@chakra-ui/icons"

function Navbar2() {

    
  return (
    <Box >
      <Flex width="90%" ml="2rem" gap="1rem"  bgColor="white" position="fixed"    p="1rem"    justifyContent="space-between"  >
      
        {/* <Spacer /> */}
       <Box mt=".5rem" ml="-2rem"><Link href="/"><img style={{ width:"3rem",height:"1.9rem"}} src="https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png" alt="" /></Link> </Box>
      
            <Box>
            <div>
            <Link href='/login'>
            Login 
           </Link>
           <Link href='/Signup' ml="2rem">
           Signup
           </Link>
                
            </div>
            </Box>
      </Flex>
      
    </Box>
  );
}

export default Navbar2;
