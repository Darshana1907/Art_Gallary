import TableCompo from "../../module/TableCompo/TableCompo";
import { artistType } from "../ArtistComponent/ArtistComponent";
import styless from './ArtisgalleryCompo.module.scss'


const ArtistGallery=(props:{
   ArtistData: artistType[];
  setArtistData: React.Dispatch<React.SetStateAction<artistType[]>>
})=>{
   
   const { ArtistData,setArtistData}= props;
     
    const DeleteFun=(id:any)=>{
      const NewArtistData:artistType[]=ArtistData.filter((Artist)=>{
      if(Artist.id !==id){
         return Artist
      }
    });
     setArtistData(NewArtistData);

    }
    console.log('CollegeComponent ArtistData',ArtistData)
    
    
    return(
       <div>
         <h1 className={styless['h1']}> Artist Data </h1>
         <TableCompo  tableData ={ArtistData} deleteFun ={DeleteFun} />
       </div>
    )
   
   }
   
   
   export default ArtistGallery;