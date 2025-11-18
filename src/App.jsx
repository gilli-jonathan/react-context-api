import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import HomePage from './pages/HomePage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import ProdottiPage from './pages/ProdottiPage'
import ProdottoSingoloPage from './pages/ProdottoSingoloPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamoPage />} />
            <Route path="/prodotti" element={<ProdottiPage />} />
            <Route path="/prodotti/:id" element={<ProdottoSingoloPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
