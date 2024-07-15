import { GPT } from './gpt'
import { useAppSelector } from '../../../../feature/reduxHook'
import { useEffect, useState } from 'react'
import { IPost } from '../../../../entities/type/post'
import { GptMessage } from './gptMessage'
import { getMessageGpt } from '../../../../feature/ajaxQuery/ajaxGetMessagesGpt'

type propsGptModel = {
  selectUtile: string
}
export const GPTModule = ({ selectUtile }: propsGptModel) => {
  const user = useAppSelector((state) => state.counter)
  const [messagesData, setMessagesData] = useState<IPost[] | []>([])
  const [messages, setMessages] = useState<[string, string][] | []>(
    []
    //  [["1","1"]]
  )

  useEffect(() => {
    const messagesAjax = async () => {
      const messagesAjax = await getMessageGpt(user.login)
      setMessagesData(messagesAjax.data)
    }
    messagesAjax()
  }, [])
  const setMEssagesF = (side: string, message: string) => {
    setMessages((prev) => [...prev, [side, message]])
  }

  return (
    <>
      <GptMessage
        messagesData={messagesData}
        messages={messages}
        setMessages={setMessages}
      />
      <GPT
        setMEssagesF={setMEssagesF}
        selectUtile={selectUtile}
        setMessages={setMessages}
        setMessagesData={setMessagesData}
      />
    </>
  )
}
