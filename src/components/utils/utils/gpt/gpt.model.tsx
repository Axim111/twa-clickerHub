import { GPT } from './gpt'
import { useAppSelector } from '../../../../feature/reduxHook'
import { useEffect, useState } from 'react'
import { IPost } from '../../../../entities/type/post'
import { GptMessage } from './gptMessage'
import { getMessageGpt } from '../../../../feature/ajaxQuery/ajaxGetMessagesGpt'
export const GPTModule = () => {
  const user = useAppSelector((state) => state.counter)
  const [messagesData, setMessagesData] = useState<IPost[] | null>(null)
  const [messages, setMessages] = useState<[string, string][] | undefined>(
   [["1","1"]]
  )
  useEffect(() => {
    const messagesAjax = async () => {
      const messagesAjax = await getMessageGpt(user.login)
      setMessagesData(messagesAjax.data)
    }
    messagesAjax()
  }, [])

  const setMEssagesF = (side: string, message: string) => {
    if (messages) setMessages((prevState)=>[...prevState, [side, message]])
    else setMessages((prevState)=>[[side, message]])
    console.log('messages', messages)
  }

  return (
    <>
      <GptMessage
        messagesData={messagesData}
        messages={messages}
        setMessages={setMessages}
      />
      <GPT messages={messages} setMessages={setMessages} setMEssagesF={setMEssagesF}/>
    </>
  )
}
