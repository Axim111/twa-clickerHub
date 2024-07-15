import axios from 'axios'

export const submit = async (
  userId: number,
  message: string,
  setMessage: (text: string) => void
) => {
  const textSaveSubmit = message
  setMessage('')
  const answer = await axios.post<string>(
    (await import.meta.env.VITE_APP_WEB) + '/createMessageAndAnswer/' + userId,
    {
      text: textSaveSubmit,

      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
    }
  )
  return answer
}
