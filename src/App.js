import{Routes,Route,BrowserRouter}from 'react-router-dom'
import './styles/App.css'
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import  {useGlobalContext}  from './context'
function App() {
  const{Light}=useGlobalContext ()
  return (
    <div className={`${Light?'':'dark'} flex  justify-center min-h-screen  `}>
    <BrowserRouter >
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Detail" element={<Detail/>}/>
     <Route path="*" element={<NotFound/>} />
   </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
