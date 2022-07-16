import React from 'react'
import img from '../profile/img.jpg'
import PropTypes from "prop-types";


 const Profile = props => {
  return (
    <div> 
     <div>   
<div className="myImage">
<img  src={img} alt='' style={{  borderRadius: "10%" ,   width: "60%"}}  />
</div>
{props.children}
</div> 
<div>
    <button onClick={()=>{ props.handleName(` 
            FULLNAME : ${ props.fullname} 
            BIO : ${props.bio}
            PROFESSION : ${props.profession}
      `)}}  style={{backgroundColor:"aqua", borderColor:"blue" , borderRadius:7,marginTop:20}}> 
   
     ABOUT ME</button> 
     </div>

    </div>
  )
}
Profile.defaultProps={fullname:'none', bio:'wrong', profession:'notfound' };
Profile.protoTypes={fullname: PropTypes.string.isREquired ,
  bio: PropTypes.string.isREquired ,
  profession: PropTypes.string.isREquired
};
export default Profile;

