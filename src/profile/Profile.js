import React from 'react'
import img from '../profile/img.jpg'
import PropTypes from "prop-types";
import { propTypes } from 'react-bootstrap/esm/Image';

 const Profile = props => {
  return (
    <div> 
    <div> <span> {props.fullname}</span> </div>
    <div> <span> {props.bio}</span> </div>
     <div> <span> {props.profession}</span> </div>
 <div>   
<div className="myImage">
<img src={img} alt=''  />
</div>
{props.children}
</div>  
    <button onClick={()=>{ props.handleName(`HELLO  ${props.fullname}`)}}>click me</button> 
    </div>
  )
}
Profile.defaultProps={fullname:'none', bio:'wrong', profession:'notfound' }
Profile.prototype={fullname,profession,bio:PropTypes.string , children:propTypes.}
export default Profile;

