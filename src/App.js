import './App.css';
import React, { useState } from 'react';
import Gallery from './components/gallery/gallery'
import Modal from './components/modal/modal'
function App() {
  const [images, setimages] = useState([])
  const [modalimg, setmodalimg] = useState("")
  const [showmodal, setshowmodal] = useState(false)
  const [loading, setloading] = useState(false)
  const featchimages = () =>{
    fetch('https://boiling-refuge-66454.herokuapp.com/images').then(
      (res)=> res.json()
    )
    .then(
      (json)=> setimages(json)
    )
  }
  React.useEffect(() => {
    featchimages();
  }, [])
  const featchimagebyid = id =>{
    setloading(true)
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then(
      res => res.json()
    ).then(
      (res)=>{setmodalimg(res);      
        setloading(false)
      }
    )
  }
  const handleimgclick = id =>{
    featchimagebyid(id);
    setshowmodal(true)
  }
  return (
    <div className="App">
      <header>
        <h1>Gallery</h1>  
      </header>
      <Gallery  images={images} handleimgclick={handleimgclick}/>
      <Modal showmodal={showmodal} setshowmodal={setshowmodal} loading={loading} modalimg={modalimg}/>
    </div>  
  );
}

export default App;
