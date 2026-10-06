import type { GyumolcsKepek } from "../types/palinka";

type KepekProps = {
    gyumolcs: GyumolcsKepek;
}

export function Kepek({gyumolcs}: KepekProps) {
    return (
        <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">

            <h2>{gyumolcs.nev}</h2>

            <img
                src={gyumolcs.kep}
                className="img-fluid"
                alt={gyumolcs.alt}
            />

            <p className="mt-2">
                {gyumolcs.leiras}
            </p>

        </div>
    )


}


