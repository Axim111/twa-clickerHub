import axios from 'axios'
import { IPost } from '../../entities/type/post'

export const getMessageGpt = async (userId: number | null) => {
  const messages = await axios.get<IPost[]>(
    (await import.meta.env.VITE_APP_WEB) + '/getMessage/' + userId,
    {
      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
    }
  )

  return messages
}
