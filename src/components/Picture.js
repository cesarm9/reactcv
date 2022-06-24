import React from 'react';
import picture from './../pic.jpg'; // gives image path

function Picture(){
    return(
        <div class="picture">
             <img src={picture} alt="this is car image" width={100} />
        </div>
    )
}

export default Picture;