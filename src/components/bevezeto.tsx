interface BevezetoProps {
  elso: string;
  masodik: string;
  harmadik: string;
};
 
function Bevezeto(props: BevezetoProps) {
  return (
    
      <div className="row mb-2">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">Mit érdemes tudni a pálinkáról?</div>

            <div className="card-body">
              <p>
               {props.elso}
              </p>

              <p>
               {props.masodik}
               </p>

              <p className="mb-0">
               {props.harmadik}
               </p>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Bevezeto;