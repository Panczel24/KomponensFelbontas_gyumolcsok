import { fontosTudnivalok } from "../data/palinka";

function FontosTudnivalok() {
    return (
        <div className="row">
            <div className="col-sm-12 kartya mb-3">
                <div className="card">
                    <div className="card-header">Amit érdemes megjegyezni</div>

                    <div className="card-body">
                        <ul>
                            {
                                fontosTudnivalok.map((tudnivalo, index) => (
                                    <li key={index}>
                                        {tudnivalo}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FontosTudnivalok;