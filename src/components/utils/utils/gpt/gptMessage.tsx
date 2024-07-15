import { useEffect, useRef, useState } from 'react'
import { IPost } from '../../../../entities/type/post'

interface propsGetMessage {
  messagesData: IPost[] | null
  messages: [string, string][] | []
  setMessages: (messageList: [string, string][] | []) => void
}

export const GptMessage = ({ messagesData, messages }: propsGetMessage) => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  console.log(1)
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
      window.scroll({
        top: height,

        behavior: 'smooth',
      })
      // ref.current.scrollIntoView()
    }
  })
  useEffect(()=>{},[messages, messagesData])
  return (
    messagesData && (
      <div ref={ref}>
        {messagesData?.map((el, id) => {
          if (el.side == 'OPPOSITE') {
            return (
              <div key={id} className='flex justify-start'>
                <div>{el.text}</div>
              </div>
            )
          } else {
            return (
              <div key={id} className='flex justify-end'>
                <div>{el.text}</div>
              </div>
            )
          }
        })}

        {messages?.map((el, id) => {
          if (el[0] == 'OPPOSITE') {
            return (
              <div key={id} className='flex justify-start'>
                <div>{el[1]}</div>
              </div>
            )
          } else {
            return (
              <div key={id} className='flex justify-end'>
                <div>{el[1]}</div>
              </div>
            )
          }
        })}
      </div>
    )
  )
}
