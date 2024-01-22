
import { Button } from 'react-bootstrap';
import styless from './Table.module.scss'

const TableCompo =(props:{
    tableData :any[];
    deleteFun:(id:any)=>void;
})=>{
    const{  tableData,deleteFun} =props;

    return(
        <div>
       <table className={styless["table"]}>
        <tr className={styless["tr"]}>
          <th className={styless["th"]}>Name</th>
          <th className={styless["th"]}> Date of Birth</th>
          <th className={styless["th"]}>Gender</th>
          <th className={styless["th"]}>Email</th>
          <th className={styless["th"]}>Contact No.</th>
          <th className={styless["th"]}>Address</th>
          <th className={styless["th"]}>Media</th>
          <th className={styless["th"]}>action</th>
          </tr>

          {tableData.map((row) => {
          return (
            <tr className={styless["tr"]}>
              <td className={styless["td"]}>{row.ArtistName}</td>
              <td className={styless["td"]}>{row.DOB}</td>
              <td className={styless["td"]}>{row.Gender}</td> 
              <td className={styless["td"]}>{row.Email}</td>
              <td className={styless["td"]}>{row.Mobile}</td>
              <td className={styless["td"]}>{row.Address}</td> 
              <td className={styless["td"]}>{row.CheckBox}</td> 
              <td className={styless["td"]}>
              
                <Button   variant="danger" onClick={() => deleteFun(row.id)}> delete </Button>
    
                </td> 
            </tr>
          );
        })}
      </table>
        </div>
    )
}

export default TableCompo;