import { useState } from "react";
import { Button } from "react-bootstrap";

function Footer(props) {

    

    return <><p>&Copy; 2025 WA1</p>
    <p>Number of Likes: {props.likes}</p>
    <Button onClick={()=>{
        console.log('clicked')
        props.setLikes(likes => likes+1)
        }}>Like</Button>


    </>

}

export default Footer;