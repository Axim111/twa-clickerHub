import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import { useAppDispatch } from '../../feature/reduxHook'
import { setUser } from '../../entities/redux/slice/counter'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { userState } from '../../entities/redux/slice/counter'

import { useParams } from 'react-router-dom'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { userId } = useParams()
  const [userData, setUserData] = useState<userState>({
    login: null,
    username: null,
    role: null,
    notice: null,
    createdAt: null,
    scoreMoney: null,
    scoreSpinning: null,
  })

  useEffect(() => {
    const getData = async () => {
      const data: { data: any } = await axios.get(
        'http://localhost:3000/getUserById/' + userId
      )
      console.log('data', data.data)
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
        <div className='flex flex-row justify-around mt-4 text-[--tg-theme-text-color] relative '>
          <div
            className="after:content-['|'] after:ml-0.5 after:text-[var(--tg-theme-hint-color)]
 after:absolute after:bottom-[-3px] after:left-1/3"
          >
            <CgProfile />
          </div>

          <div
            className="after:content-['|'] after:ml-0.5 after:text-[var(--tg-theme-hint-color)]
 after:absolute after:bottom-[-3px] after:left-2/3"
          >
            <CgProfile />
          </div>

          <div>
            <CgProfile />
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
