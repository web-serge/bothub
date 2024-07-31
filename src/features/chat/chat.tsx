import { Button } from '../../components/button/button'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ChatCompletionRequestMessage } from 'openai-edge'
import { queryChatbot } from '../../api/api-openai'
import { useMutation } from '@tanstack/react-query'
import { Messages } from './messages'
import { Spinner } from '../../components/spinner/spinner.tsx'
import { BothubAvatar, Gemini, Send } from '../../components/icons'
import { toast } from 'sonner'

export const Chat = () => {
  const [state, setState] = useState<ChatCompletionRequestMessage[]>([])
  const [isContext, setIsContext] = useState(true)
  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const toggleContext = (e: ChangeEvent<HTMLInputElement>) => {
    setIsContext(e.currentTarget.checked)
  }

  const { mutate, isPending } = useMutation({
    mutationKey: ['queryChatbot'],
    mutationFn: async (content: ChatCompletionRequestMessage[]) => {
      try {
        const answer = await queryChatbot(content)
        setState((prev) => [...prev, answer])
        messageRef.current!.focus()
      } catch (error) {
        console.log(error)
        const errorMessage = error instanceof Error ? error.message : 'Some error'
        toast.error(errorMessage)
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
    }
  }

  const bottomRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    bottomRef.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [state, isPending])

  return (
    <div className={'relative w-full grow rounded-3xl bg-gray-4'}>
      <div
        className={
          'flex flex-col items-start gap-y-3.5 rounded-t-3xl border border-gray-5 px-6 py-4 md:flex-row md:items-center md:justify-between'
        }
      >
        <div className={'text flex items-center gap-3 text-base'}>
          <BothubAvatar width={50} height={50} viewBox={'0 0 33 33'} />
          <div className={'flex flex-col'}>
            <span className={'text-sm lg:text-base'}>BotHub: ChatGPT & Midjourney</span>
            <span className={'text-[12px] text-gray-1 lg:text-sm'}>bot</span>
          </div>
        </div>
        <label className={'flex cursor-pointer select-none items-center gap-3'}>
          <span>Сохранить контекст</span>
          <input type="checkbox" checked={isContext} onChange={toggleContext} />
        </label>
      </div>
      <ol className={'flex h-[359px] flex-col items-baseline gap-[22px] overflow-y-auto px-6 py-[18px] md:h-[421px]'}>
        {<Messages data={state} />}
        {isPending && (
          <li className={'flex max-w-[90%] items-end gap-2.5 self-start rounded-3xl rounded-bl-none'}>
            <Gemini width={40} height={40} viewBox={'0 0 24 24'} className={'flex-shrink-0'} />
            <Spinner text={'Gemini генерирует...'} />
          </li>
        )}
        <div ref={bottomRef}></div>
      </ol>
      <div className={'relative p-6'}>
        <textarea
          role={'textbox'}
          ref={messageRef}
          className={
            'h-max w-full resize-none rounded-[10px] border border-gray-2 bg-transparent pl-5 pr-[72px] pt-6 leading-[133%] placeholder:text-[12px] lg:placeholder:text-sm'
          }
          placeholder={'Спроси о чем-нибудь...'}
        />
        <Button
          variant={'icon'}
          className={'absolute right-11 top-1/2 -translate-y-1/2'}
          onClick={handleSendMessage}
          disabled={isPending}
        >
          <Send />
        </Button>
      </div>
    </div>
  )
}
