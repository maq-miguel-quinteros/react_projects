import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Store } from './store/Store';
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import { View } from './pages/View';

function App() {

  return (
    <>
      {/** para que el estado global este disponible en todos las pages y componentes dentro de la mismas, es decir, en todos los componentes, necesitamos ubicar el componente Store, que maneja los estados globales, como padre de todos los componentes */}
      <Store>
        {/** necesitamos que las rutas estén en el componente padre de todos los demás componentes, por eso las configuramos en App 
         * Para manejar las rutas debemos utilizar como padre BrowserRouter, seguido de Routes y luego de cada ruta como un elemento Route */}
        <BrowserRouter >
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='view/:bookId' element={<View />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </>
  )
}

export default App
