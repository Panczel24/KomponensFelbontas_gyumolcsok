import './App.css'

import Bevezeto from './components/bevezeto'
import { Header } from './components/fejlec'
import { Lista } from "./components/lista";
import GyumolcsTabla from "./components/tablazat";
import { Kepek } from "./components/kepek";
import FontosTudnivalok from "./components/tudnivalo";
import Lablec from "./components/lablec";

import { listak, gyumolcsok } from "./data/palinka";


function App() {

  return (
    <>

      <div className="container">

        <Header
          title='REACT gyakorlás: Komponensekre bontás'
          subtitle='Téma: Pálinkák és gyümölcspárlatok'
        />

        <Bevezeto
          elso='A pálinka a magyar gasztronómiai és kulturális hagyományok egyik ismert itala. Készítése során erjesztett gyümölcsből lepárlással állítanak elő gyümölcspárlatot.'
          masodik='A pálinka készítésének egyik fontos alapanyaga a megfelelő minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a szilva, a körte, a meggy és a kajszibarack.'
          harmadik='A jó minőségű pálinka készítésénél az alapanyag minősége és a megfelelő technológia egyaránt fontos.'
        />

        <div className="row mb-2">

          {
            listak.map((lista, index) => (
              <Lista
                key={index}
                lista={lista}
              />
            ))
          }

        </div>

        <GyumolcsTabla />

        <div className="row mb-1">

          {
            gyumolcsok.map((gyumolcs, index) => (
              <Kepek
                key={index}
                gyumolcs={gyumolcs}
              />
            ))
          }

        </div>

        <FontosTudnivalok />

      </div>

      <Lablec />

    </>
  )
}

export default App