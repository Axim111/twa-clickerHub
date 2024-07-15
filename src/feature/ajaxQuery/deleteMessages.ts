import axios from 'axios'

export const deleteMessage = async (
  userId: number,
) => {
  const answer = await axios.post<string>(
    (await import.meta.env.VITE_APP_WEB) + '/deleteMessages/' + userId,
    {
      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
    }
  )
  return answer
}
