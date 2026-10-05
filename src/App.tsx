
import './App.css'
import Bevezeto from './components/bevezeto'
import { Header } from './components/fejlec'
import { Alapanyagok, IzEsIllat, Nepszeru } from './components/lista'
import { Tablazat } from './components/tablazat'

function App() {

  return (
    <>
      <Header
        title='REACT gyakorlás: Komponensekre bontás'
        subtitle='Téma: Pálinkák és gyümölcspárlatok'
      />




      <Bevezeto
        elso=' A pálinka a magyar gasztronómiai és kulturális hagyományok egyik
                ismert itala. Készítése során erjesztett gyümölcsből lepárlással
                állítanak elő gyümölcspárlatot.'
        masodik=' A pálinka készítésének egyik fontos alapanyaga a megfelelő
                minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a
                szilva, a körte, a meggy és a kajszibarack.
        'harmadik=' A jó minőségű pálinka készítésénél az alapanyag minősége és a
                megfelelő technológia egyaránt fontos.
              '
      />


    <Alapanyagok
    i1='Alma' i2='Körte' i3='Szilva' i4='Meggy' i5='Kajszibarack'
    />

    <Nepszeru
    i1='Szilvapálinka' i2='Barackpálinka' i3='Körtepálinka' i4='Almapálinka' i5='Birsalmapálinka'
    />

    <IzEsIllat
    i1='Gyümölcsös' i2='Illatos' i3='Érett gyümölcsre jellemző' i4='Harmonikus' i5='Tiszta lecsengésű'
    />

    <Tablazat/>



    </>
  )
}

export default App
