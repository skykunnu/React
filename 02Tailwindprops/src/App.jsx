
import './App.css'
import Card from './components/card'
function App() {
  
 
  return (
    <>
    {/* Here className is a reserve keyword used to write tailwind css.*/}
     <h1 className='bg-green-400 text-black p-2 rounded-xl mb-4'>Tailwind Test</h1>
    <Card/>
    <Card/>
    </>
  )
}

export default App
