import './App.css'
import Footer from './pages/Footer.jsx'
import Effect from './pages/Effect.jsx'
import Ref from './pages/Ref.jsx'
import Reduce from './pages/Reduce.jsx';
import CallBack from './pages/CallBack.jsx';
import TodoList from './pages/TodoList.jsx'
import './output.css';




function App() {




  return (
    <>
    {/* <Header /> */}
    {/* <Footer /> */}
      {/* <Effect />   */}
      {/* <Ref /> */}
      {/* <Reduce /> */}
      {/* <CallBack /> */}
    <TodoList /> 
    <div className=' flex justify-center item-center h-screen text-lg font-bold text-center text-blue-500 bg-black'>
      <div className=' hover:bg-black bg-white focus:ring-2 shadow-lg shadow-white w-1/2 h-64 m-4 bg-radient-to-r bg-opacity-50 border-white-500 border-2 rounded-lg'>item 1</div>
      <div className=' hover:bg-white  focus:ring-2  shadow-lg shadow-white w-1/2 h-64 m-4 bg-radient-to-r bg-opacity-50 border-white-500 border-2 rounded-lg'>item 2</div>
    </div>
    </>
  )
}

export default App
