import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { useAppDispatch } from '../../feature/reduxHook'
import { initialStateUser, setUser } from '../../entities/redux/slice/user'
import { useEffect, useState } from 'react'
import axios from 'axios'


import { useParams, Link, Outlet } from 'react-router-dom'
import { IUserState } from '../../entities/type/user'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { userId } = useParams()
  const [userData, setUserData] = useState<IUserState>(initialStateUser)

  useEffect(() => {
    const getData = async () => {
      const data: { data: any } = await axios.get(
        (await import.meta.env.VITE_APP_WEB) + '/getUserById/' + userId,
        {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        }
      )
      setUserData(data.data)
    }
    getData()
  }, [])

  useEffect(() => {
    dispatch(
      setUser({
        login: userData.login,
        username: userData.username,
        role: userData.role,
        notice: userData.notice,
        createdAt: userData.createdAt,
        scoreMoney: userData.scoreMoney,
        scoreSpinning: userData.scoreSpinning,
      })
    )
  }, [userData])
  // console.log(count)

  return (
    <>
      <IconContext.Provider value={{ color: 'var(--tg-theme-hint-color)' }}>
        <div className='flex flex-row justify-around mt-4 text-[--tg-theme-text-color] relative'>
          <Link
            to={''}
            className="after:content-['|'] after:ml-0.5 after:text-[var(--tg-theme-hint-color)]
 after:absolute after:bottom-[-3px] after:left-1/3"
          >
            <CgProfile />
          </Link>

          <Link
            to={'utils'}
            className="after:content-['|'] after:ml-0.5 after:text-[var(--tg-theme-hint-color)]
 after:absolute after:bottom-[-3px] after:left-2/3"
          >
            {' '}
            <CgProfile />
          </Link>

          <Link to={'drop'}>
            {' '}
            <CgProfile />
          </Link>
        </div>
      </IconContext.Provider>
    </>
  )
}
