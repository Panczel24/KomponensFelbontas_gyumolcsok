// interface TablaProps {
//   title: string;
//   subtitle: string;
// };
/*
export function Tablazat(){
 return (
     <div className="row mb-1" id="mibolLehetMegPalinka">
       <div className="col-sm-12 kartya mb-3">
         <h2>Miből készülhet gyümölcspárlat?</h2>

         <table className="table table-bordered">
           <tbody>
             <tr>
               <td>Alma</td>

               <td>Szilva</td>

               <td>Körte</td>
             </tr>

             <tr>
               <td>Meggy</td>

               <td>Kajszi</td>

               <td>Birsalma</td>
             </tr>

             <tr>
               <td>Cseresznye</td>

               <td>Őszibarack</td>

               <td>Szőlő</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
 );
}
*/

import { tablaSor } from "../data/palinka"

function GyumolcsTabla() {
  return (
    <div className="row mb-1" id="mibolLehetMegPalinka">

      <div className="col-sm-12 kartya mb-3">

        <h2>Miből készülhet gyümölcspárlat?</h2>

        <table className="table table-bordered">
          <tbody>

            {
              tablaSor.map((sor, index) => (
                <tr key={index}>

                  <td>{sor.elso}</td>

                  <td>{sor.masodik}</td>

                  <td>{sor.harmadik}</td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>




  )
}

export default GyumolcsTabla;





