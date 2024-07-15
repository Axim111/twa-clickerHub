import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../feature/reduxHook'
import { submit } from '../../../../feature/ajaxQuery/ajaxSubmitGpt'
import { deleteMessage } from '../../../../feature/ajaxQuery/deleteMessages'
import { MdDeleteForever } from 'react-icons/md'
import { IPost } from '../../../../entities/type/post'
import { Dispatch, SetStateAction } from 'react'
interface propsGPT {
  setMEssagesF: (side: string, message: string) => void
  selectUtile: string
  setMessages: Dispatch<SetStateAction<[string, string][] | []>>
  setMessagesData: Dispatch<SetStateAction<IPost[] | []>>
}
export const GPT = ({
  setMEssagesF,
  selectUtile,
  setMessages,
  setMessagesData,
}: propsGPT) => {
  const user = useAppSelector((state) => state.counter)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [message, setMessage] = useState('')

  const deleteFN = async () => {
    if (user.login) {
      setMessages([])
      setMessagesData([])
      await deleteMessage(user.login)
      console.log(user.login)
    }
  }
  useEffect(() => {
    if (selectUtile == 'GPT') {
      if (textareaRef.current) {
        textareaRef.current.scrollIntoView({ block: 'start' })
      }
    }
  }, [selectUtile])
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px'
      const scrollHeight = textareaRef.current.scrollHeight
      if (!scrollHeight) {
        textareaRef.current.style.height = '24px'
      } else {
        textareaRef.current.style.height = scrollHeight + 'px'
      }
    }
  }, [message])

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value)
  }
  return (
    <div className='w-full h-1/2'>
      <textarea
        className='max-h-32 resize-none w-80 bg-[var(--tg-theme-button-color)] text-[var(--tg-theme-text-color)] rounded-lg px-2 w-64'
        id='story'
        name='story'
        rows={5}
        cols={33}
        ref={textareaRef}
        value={message}
        onChange={handleMessageChange}
      ></textarea>
      <button
        onClick={async () => {
          setMEssagesF('ME', message)
          if (user.login) {
            const answer = (await submit(user.login, message, setMessage)).data
            setMEssagesF('OPPOSITE', answer)
          }
        }}
      >
        submit
      </button>
      <MdDeleteForever onClick={deleteFN} />
    </div>
  )
}
