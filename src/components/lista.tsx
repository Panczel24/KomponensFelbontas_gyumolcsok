/*


interface ListaProps {
  i1: string;
  i2: string;
  i3: string;
  i4: string;
  i5: string;
 
};
 
export function Alapanyagok(props: ListaProps) {
  return (
    
     <div className="row mb-2">
        <div className="col-sm-4 kartya">
          <h2>Gyakori alapanyagok</h2>

          <ul className="list-group">
            <li className="list-group-item">{props.i1}</li>
            <li className="list-group-item">{props.i2}</li>
            <li className="list-group-item">{props.i3}</li>
            <li className="list-group-item">{props.i4}</li>
            <li className="list-group-item">{props.i5}</li>
          </ul>
        </div>
    </div>

  );
}
 
export function Nepszeru(props: ListaProps) {
  return (
    
     <div className="row mb-2">
        <div className="col-sm-4 kartya">
          <h2>Gyakori alapanyagok</h2>

          <ul className="list-group">
            <li className="list-group-item">{props.i1}</li>
            <li className="list-group-item">{props.i2}</li>
            <li className="list-group-item">{props.i3}</li>
            <li className="list-group-item">{props.i4}</li>
            <li className="list-group-item">{props.i5}</li>
          </ul>
        </div>
    </div>

  );
}
 
export function IzEsIllat(props: ListaProps) {
  return (
    
     <div className="row mb-2">
        <div className="col-sm-4 kartya">
          <h2>Gyakori alapanyagok</h2>

          <ul className="list-group">
            <li className="list-group-item">{props.i1}</li>
            <li className="list-group-item">{props.i2}</li>
            <li className="list-group-item">{props.i3}</li>
            <li className="list-group-item">{props.i4}</li>
            <li className="list-group-item">{props.i5}</li>
          </ul>
        </div>
    </div>

  );
}
 */

import type { ListaAdat } from "../types/palinka";

type ListaProps = {
  lista: ListaAdat;
};

export function Lista({ lista }: ListaProps) {

  return (
    <div className="col-sm-4 kartya mb-2">

      <h2>{lista.cim}</h2>

      {
        lista.szamozott === true ?

          <ol className="list-group list-group-numbered">
            {
              lista.elemek.map((elem, index) => (
                <li
                  className="list-group-item"
                  key={index}
                >
                  {elem}
                </li>
              ))
            }
          </ol>

          :

          <ul className="list-group">
            {
              lista.elemek.map((elem, index) => (
                <li
                  className="list-group-item"
                  key={index}
                >
                  {elem}
                </li>
              ))
            }
          </ul>
      }

    </div>
  );
}


