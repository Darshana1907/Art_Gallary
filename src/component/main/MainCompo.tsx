import { useState } from "react";
import ArtistCompo, { artistType } from "../ArtistComponent/ArtistComponent";
import styless from './MainCompo.module.scss'
import ArtistGallery from "../ArtistgalleryCompo/ArtistgalleryCompo";
 

const MainComponent=()=>{
  
 const [ArtistData,setArtistData] =useState<artistType[]>([]);

    return(
       <div className={styless['head']} >
       
       
       <ArtistCompo ArtistData={ArtistData}  setArtistData={setArtistData}/>
       <br/><br/>
       <ArtistGallery ArtistData={ArtistData}       setArtistData={setArtistData}/>
       </div >
    )
   
   }
   
   
   export default MainComponent;