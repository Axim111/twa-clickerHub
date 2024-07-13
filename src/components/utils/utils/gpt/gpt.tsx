import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../feature/reduxHook'
import { submit } from '../../../../feature/ajaxQuery/ajaxSubmitGpt'

interface propsGPT {
  messages: [string, string][] | undefined
  setMessages: (messageList: [string, string][] | undefined) => void
  setMEssagesF: (side: string, message: string) => void
}
export const GPT = ({ setMessages, messages, setMEssagesF }: propsGPT) => {
  const user = useAppSelector((state) => state.counter)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [message, setMessage] = useState('')

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value)
  }
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
          if (messages != undefined) {
            if (messages[messages.length - 1][0] == 'ME') {
              return
            }
          }
          // if (messages) setMessages([...messages, ['ME', message]])
          // else setMessages([['ME', message]])
          setMEssagesF('ME', message)
          if (user.login) {
            const answer = (await submit(user.login, message, setMessage)).data
            setMEssagesF('OPPOSITE', answer)
          }
        }}
      >
        submit
      </button>
    </div>
  )
}
