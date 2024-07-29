import { Button } from '../../components/button/button'
import send from '../../assets/images/icon/telegram.svg'
import mask from '../../assets/images/Maskgroup.png'
import { ChangeEvent, useRef, useState } from 'react'
import { ChatCompletionRequestMessage } from 'openai-edge'
import { queryChatbot } from '../../api/api-openai'
import { useMutation } from '@tanstack/react-query'
import { Messages } from './messages'
import { Spinner } from '../../components/spinner/spinner.tsx'
import gemini from '../../assets/images/icon/gemini.png'

export const Chat = () => {
  const [state, setState] = useState<ChatCompletionRequestMessage[]>([])
  const [isContext, setIsContext] = useState(true)
  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const toggleContext = (e: ChangeEvent<HTMLInputElement>) => {
    setIsContext(e.currentTarget.checked)
  }

  const { mutate, isPending } = useMutation({
    mutationKey: ['queryChatbot'],
    mutationFn: async (content: ChatCompletionRequestMessage[]) => {
      try {
        const answer = await queryChatbot(content)
        setState((prev) => [...prev, answer])
      } catch (error) {
        console.error('Error querying chatbot:', error)
      }
    },
  })

  const handleSendMessage = () => {
    if (messageRef.current) {
      const content = messageRef.current.value
      const body: ChatCompletionRequestMessage[] = isContext
        ? [...state, { role: 'user', content }]
        : [{ role: 'user', content }]

      setState((prev) => [...prev, { role: 'user', content }])
      mutate(body)
      messageRef.current.value = ''
    } else return
  }

  return (
    <div className={'relative w-full grow rounded-3xl bg-gray-4'}>
      <div
        className={
          'flex flex-col items-start gap-y-3.5 rounded-t-3xl border border-gray-5 px-6 py-4 md:flex-row md:items-center md:justify-between'
        }
      >
        <div className={'text flex items-center gap-3 text-base'}>
          <img src={mask} alt="" className={'rounded-full'} />
          <div className={'flex flex-col'}>
            <span className={'text-sm lg:text-base'}>BotHub: ChatGPT & Midjourney</span>
            <span className={'text-[12px] text-gray-1 lg:text-sm'}>bot</span>
          </div>
        </div>
        <label className={'flex items-center gap-3'}>
          <span>Сохранить контекст</span>
          <input type="checkbox" checked={isContext} onChange={toggleContext} />
        </label>
      </div>
      <ol className={'flex h-[359px] flex-col items-baseline gap-[22px] overflow-y-auto px-6 py-[18px] md:h-[421px]'}>
        {<Messages data={state} />}
        {isPending && (
          <li className={'flex max-w-[90%] items-end gap-2.5 self-start rounded-3xl rounded-bl-none'}>
            <img src={gemini} alt="gemini" className={'flex-shrink-0'} /> <Spinner text={'Gemini генерирует...'} />
          </li>
        )}
        <div ref={containerRef}></div>
      </ol>
      <div className={'relative p-6'}>
        <textarea
          role={'textbox'}
          ref={messageRef}
          className={
            'h-max w-full resize-none rounded-[10px] border border-gray-2 bg-transparent py-6 pl-5 pr-[72px] leading-[133%] placeholder:text-[12px] lg:placeholder:text-sm'
          }
          placeholder={'Спроси о чем-нибудь...'}
        />
        <Button
          variant={'icon'}
          className={'absolute right-11 top-1/2 -translate-y-1/2'}
          onClick={handleSendMessage}
          disabled={isPending}
        >
          <img src={send} alt="send" />
        </Button>
      </div>
    </div>
  )
}
