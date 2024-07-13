import { useAppSelector, useAppDispatch } from '../../feature/reduxHook'
export const Profile = () => {
  const user = useAppSelector((state) => state.counter)
  console.log(user)
  return user.login == null ? (
    <div>load</div>
  ) : (
    <div className='h-auto bg-[var(--tg-theme-bg-color)] flex flex flex-col space-y-4 mt-10 items-center text-[var(--tg-theme-text-color)]'>
      <div>login: {user.login}</div>
      <div>username: {user.username}</div>
      <div>role: {user.role}</div>
      <div>scoreMoney: {user.scoreMoney}</div>
    </div>
  )
}
