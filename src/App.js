import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useGlobalContext } from './context'
import Header from './components/Header/Header';
function App() {
  const { Light } = useGlobalContext()
  return (
    <div className={`${Light ? '' : 'dark'} flex  justify-start flex-col min-h-screen  `}>
      <div className='dark:bg-slate-800 dark:text-white  min-h-screen'>
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
