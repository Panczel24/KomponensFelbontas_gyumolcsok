// interface TablaProps {
//   title: string;
//   subtitle: string;
// };
 
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