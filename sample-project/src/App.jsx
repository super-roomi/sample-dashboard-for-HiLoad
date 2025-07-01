import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>

      {/* Sidebar */}

      <div className='flex w-full h-svh'>


        <Sidebar />


        {/* Main Dashboard */}
        <div className='flex flex-col border basis-18/20'>
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
