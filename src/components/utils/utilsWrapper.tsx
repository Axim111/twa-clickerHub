import { ORC } from './utils/orc/orc'
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
          {selectUtile == 'GPT' && (
            <>
              <div
                className={'text-[var(--tg-theme-destructive-text-color)]'}
                onClick={() => closeActive()}
              >
                close GPT
              </div>
              <div className={'h-max-60 mt-5'}>
                <GPTModule selectUtile={selectUtile} />
              </div>
            </>
          )}
        </div>

        <div className='utils-container-custom'>
          <div onClick={() => setActive('ORC')}>ORC</div>
          {selectUtile == 'ORC' && (
            <>
              <div
                className={'text-[var(--tg-theme-destructive-text-color)]'}
                onClick={() => closeActive()}
              >
                close ORC
              </div>
              <div className={'h-max-60 mt-5'}>
                <ORC />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
