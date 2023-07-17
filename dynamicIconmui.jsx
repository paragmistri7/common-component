import React from 'react';
import * as Icons from '@mui/icons-material';
import { Button } from '@mui/material';
import * as ReactIconlu from "react-icons/lu";
import * as ReactIconmd from "react-icons/md";
import * as ReactIconpi from "react-icons/pi";
import * as ReactIconrx from "react-icons/rx";
import * as ReactIconri from "react-icons/ri";
import * as ReactIconsi from "react-icons/si";
import * as ReactIconsl from "react-icons/sl";
import * as ReactIconvsc from "react-icons/vsc";
import * as ReactIcontb from "react-icons/tb";
import * as ReactIconti from "react-icons/ti";
import * as ReactIconcg from "react-icons/cg";
import * as ReactIcontfi from "react-icons/tfi";
import * as ReactIconwi from "react-icons/wi";
import * as ReactIconai from "react-icons/ai"
import * as ReactIconbs from "react-icons/bs";
import * as ReactIconci from "react-icons/ci";
import * as ReactIconbi from "react-icons/bi";
import * as ReactIcondi from "react-icons/di"
import * as ReactIconfi from "react-icons/fi"
import * as ReactIconfc from "react-icons/fc"
import * as ReactIconfa from "react-icons/fa";
import * as ReactIconfa6 from "react-icons/fa6";
import * as ReactIcongi from "react-icons/gi";
import * as ReactIcongo from "react-icons/go";
import * as ReactIcongr from "react-icons/gr";
import * as ReactIconhi from "react-icons/hi";
import * as ReactIconhi2 from "react-icons/hi2";
import * as ReactIconim from "react-icons/im";
import * as ReactIconlia from "react-icons/lia";
import * as ReactIconio from "react-icons/io";
import * as ReactIconio5 from "react-icons/io5";
const DynamicIcon = ({ start, end }) => {

  const StartIcon = Icons[start]
    || ReactIconai[start] 
    || ReactIconwi[start] 
    || ReactIcontfi[start] 
    || ReactIconcg[start] 
    || ReactIconti[start] 
    || ReactIcontb[start] 
    || ReactIconvsc[start] 
    || ReactIconsl[start] 
    || ReactIconsi[start] 
    || ReactIconri[start] 
    || ReactIconrx[start] 
    || ReactIconpi[start] 
    || ReactIconmd[start] 
    || ReactIconlu[start] 
    || ReactIconio5[start] 
    || ReactIconio[start] 
    || ReactIconlia[start] 
    || ReactIconim[start] 
    || ReactIconhi2[start] 
    || ReactIconhi[start] 
    || ReactIcongr[start] 
    || ReactIcongo[start] 
    || ReactIcongi[start] 
    || ReactIconfa6[start] 
    || ReactIconfa[start] 
    || ReactIconfc[start] 
    || ReactIconfi[start] 
    || ReactIcondi[start] 
    || ReactIconbi[start] 
    || ReactIconci[start] 
    || ReactIconbs[start]
  
  const EndIcon = Icons[end]
    || ReactIconai[end]
    || ReactIconwi[end]
    || ReactIcontfi[end]
    || ReactIconcg[end]
    || ReactIconti[end]
    || ReactIcontb[end]
    || ReactIconvsc[end]
    || ReactIconsl[end]
    || ReactIconsi[end]
    || ReactIconri[end]
    || ReactIconrx[end]
    || ReactIconpi[end]
    || ReactIconmd[end]
    || ReactIconlu[end]
    || ReactIconio5[end]
    || ReactIconio[end]
    || ReactIconlia[end]
    || ReactIconim[end]
    || ReactIconhi2[end]
    || ReactIconhi[end]
    || ReactIcongr[end]
    || ReactIcongo[end]
    || ReactIcongi[end]
    || ReactIconfa6[end]
    || ReactIconfa[end]
    || ReactIconfc[end]
    || ReactIconfi[end]
    || ReactIcondi[end]
    || ReactIconbi[end]
    || ReactIconci[end]
    || ReactIconbs[end] 


    if (!StartIcon) {
        console.log("starticon name is incorrect" , start)
        return (
          <Button color='success'variant='contained' size='large' sx={{m:4}}  endIcon={<EndIcon />}>
            qwer
          </Button>
        );
    }
    if (!EndIcon) {
      console.log("endicon name is incorrect" , end)
      return (
        <Button color='success'variant='contained' size='large' sx={{m:4}} startIcon={<StartIcon />} >
          qwer
        </Button>
      );
    }
  
    return (
      <Button color='success'variant='contained' size='large' sx={{m:4}} startIcon={<StartIcon />} endIcon={<EndIcon />}>
        qwer
      </Button>
    );
  };
export default DynamicIcon;

function App() {
    return (
      <div className="App">
       <DynamicIcon start={"Hearing"}  />
      <DynamicIcon start={"AdminPanelSettings"} end={"AddReaction"} />
      <DynamicIcon start={"AiFillBell"} end={"AiFillAliwangwang"} />
      <DynamicIcon start={"AiFillAmazonCircle"} end={"AiFillDribbbleCircle"} />
      </div>
    );
  }

// #############################################################################################################################


// import React from 'react';
// import * as Icons from '@mui/icons-material';
// import { Button } from '@mui/material';
// import * as ReactIcon from "react-icons/ai"

// const DynamicIcon = ({ start, endd }) => {
    
//   // let firstTwoLetters = start.substring(0, 2).toLowerCase();

//   const StartIcon = Icons[start] ?? ReactIcon[start] ?? ""
//   const EndIcon = Icons[endd] ?? ReactIcon[endd] ?? ""

//   // console.log(start , firstTwoLetters)

//     if (!StartIcon) {
//         console.log("stat")
//         return " ";
//     }
//     if (!EndIcon) {
//         console.log("end")
//       return " ";
//     }
  
//     return (
//       <Button color='success'variant='contained' size='large' sx={{m:4}} startIcon={<StartIcon />} endIcon={<EndIcon />}>
//         qwer
//       </Button>
//     );
//   };
// export default DynamicIcon;

// function App() {
//     return (
//       <div className="App">
//        <DynamicIcon start={"Hearing"} endd={"AccessAlarms"} />
      // <DynamicIcon start={"AdminPanelSettings"} endd={"AddReaction"} />
      // <DynamicIcon start={"AiFillBell"} endd={"AiFillAliwangwang"} />
      // <DynamicIcon start={"AiFillAmazonCircle"} endd={"AiFillDribbbleCircle"} />
//       </div>
//     );
//   }
