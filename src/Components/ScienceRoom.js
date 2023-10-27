
// ScienceRoom.js
import fish from './fossil.jpeg'
import { useState } from 'react';
import '../App.css'


const ScienceRoom = () =>{


    const [description, setDescription] = useState(false);

    const handleButtonClick = () => {
      setDescription(!description);
    };
    
    return (
        
        <center>
    <h2>🔭 Dive into the Wonders of Science!</h2>
    <img src= {fish} alt="fish fossil" width="400" height="300"/><br/> <br/>
    <div>
    <button class="btn btn-primary" type="button" onClick={(handleButtonClick)}>Discover More!</button><br/><br/>
    </div>
    

{description && (<div className= 'pretty'>

"M. labracoides specimens are characterized by 2 dorsal fins and a forked tail and are known to reach 20 inches.
 Juvenile M. Labracoides are commonly found in mass mortalities while adults are found alone, 
 indicating it traveled in schools as a juvenile and became 
solitary as an adult. Juvenile and adult specimens are often found preserved with smaller fish in the jaw or stomach."

</div>)}

    </center>
    )
 }
 
 export default ScienceRoom;