import { useEffect, useState } from 'react'
import { IPost } from '../../../../entities/type/post'

interface propsGetMessage {
  messagesData: IPost[] | null
  messages: [string, string][] | undefined
  setMessages: (messageList: [string, string][] | undefined) => void
}

export const GptMessage = ({ messagesData, messages }: propsGetMessage) => {
  useEffect(() => {}, [messagesData, messages])
  return messagesData ? (
    <>
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
    </>
  ) : (
    <>
      <div>ban</div>
    </>
  )
}
