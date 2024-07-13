import { useTelegram } from './feature/telegram.ts'

// import { useAppSelector } from './feature/reduxHook'

import { Header } from './components/header/header.tsx'
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import { Profile } from './components/profile/profile.tsx'
import { UtilsWrapper } from './components/utils/utilsWrapper.tsx'

function App() {
  const { telegram } = useTelegram()
  // const count = useAppSelector((state) => state.counter.id)

  telegram.setBackgroundColor('#243c5a')
  telegram.MainButton.show()

  return (
    <div>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts/form'>User</Link>
      </nav> */}
      <Routes>
        <Route
          path=':userId'
          element={
            <div>
              <Header />
              <Outlet />
            </div>
          }
        >
          <Route index element={<Profile />} />
          <Route path='utils' element={<UtilsWrapper />} />
        </Route>
      </Routes>

      {/* <p className='text-[--tg-theme-hint-color]'>pi</p>

      <button
        className='bg-zinc-200 mt-4 w-full'
        onClick={async () => telegram.close()}
      >
        close
      </button> */}
    </div>
  )
}

export default App
