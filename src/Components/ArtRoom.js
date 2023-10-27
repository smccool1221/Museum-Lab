
import { useState } from 'react';
import myIamge from './watteau.jpeg'
import '../App.css'


const ArtRoom = () => {

  const [description, setDescription] = useState(false);

  const handleButtonClick = () => {
    setDescription(!description);
  };


    return (

      
        <div>
        
    <h2>🎨 Explore the World of Art!</h2>

        <img src= {myIamge} alt="Watteau painting" width="400" height="300"/><br/><br/>
        <center></center>
        <button class="btn btn-primary" type="button" onClick={(handleButtonClick)}>Uncover the story!</button><br/><br/>

        {description && (<div className= 'pretty1'>

        "Pilgrimage to Cythera by Jean-Antoine Watteau is one of the most important 
        pieces of art in the 18th century. It took 5 years to complete (1717) and 
        was Watteau’s submission to get into the French Royal Academy of
         Painting and Sculpture. His acceptance into the academy with Pilgrimage 
         to Cythera was a key turning point in art history."

      </div>)}
    </div>
  
    )
  }
  
  export default ArtRoom;