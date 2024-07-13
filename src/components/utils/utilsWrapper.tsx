import { ORC } from './utils/orc'
import { useState } from 'react'
import clsx from 'clsx'
import { GPTModule } from './utils/gpt/gpt.model'
export const UtilsWrapper = () => {
  const [selectUtile, setSelectUtile] = useState<string>('')
  const setActive = (activeItem: string) => {
    if (selectUtile == activeItem) {
      setSelectUtile('')
      return
    }
    setSelectUtile(activeItem)
  }
  const closeActive = () => {
    setSelectUtile('')
  }
  return (
    <>
      <div className='utils-wrapper-custom'>
        <div className='utils-container-custom'>
          <div onClick={() => setActive('GPT')}>GPT</div>
          <div
            className={clsx(
              'text-[var(--tg-theme-destructive-text-color)]',
              selectUtile != 'GPT' && 'hidden'
            )}
            onClick={() => closeActive()}
          >
            close GPT
          </div>
          <div
            className={clsx('h-max-60 mt-5', selectUtile != 'GPT' && 'hidden')}
          >
            <GPTModule />
          </div>
        </div>
        <div className='utils-container-custom'>
          <div onClick={() => setActive('ORC')}>ORC</div>
          <div
            className={clsx(
              'text-[var(--tg-theme-destructive-text-color)]',
              selectUtile != 'ORC' && 'hidden'
            )}
            onClick={() => closeActive()}
          >
            close ORC
          </div>
          <div className={clsx('h-10 mt-5', selectUtile != 'ORC' && 'hidden')}>
            <ORC />
          </div>
        </div>
      </div>
    </>
  )
}
