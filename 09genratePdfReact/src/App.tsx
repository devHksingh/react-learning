import './App.css'
import Invoice from './components/invoice/Invoice'

function App() {
  

  return (
    <>
      <div className='w-screen min-h-screen p-4 bg-slate-950 text-slate-200'>
        <h1 className='capitalize'>generate PDF in React using React pdf</h1>
        <Invoice/>
      </div>
    </>
  )
}

export default App
