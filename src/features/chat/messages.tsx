import clsx from 'clsx'
import { ChatCompletionRequestMessage } from 'openai-edge'
import gemini from '../../assets/icon/gemini.png'
import user from '../../assets/icon/default-avatar.png'
import { MarkdownRenderer } from '../../components/markdown/markdown.tsx'

type Props = {
  data: ChatCompletionRequestMessage[]
  className?: string
}
export const Messages = ({ className, data }: Props) => {
  return data.map((message, index) => {
    const isUser = message.role === 'user'
    return <Message key={index} isUser={isUser} className={className} message={message.content!} />
  })
}

type MessageProps = {
  isUser: boolean
  className?: string
  message: string
}
export const Message = ({ isUser, message, className }: MessageProps) => {
  return (
    <li
      className={clsx(
        isUser ? 'flex-row-reverse self-end' : 'self-start rounded-bl-none',
        'animate-new-message flex max-w-[90%] items-center gap-2.5 rounded-3xl delay-300',
        className,
      )}
    >
      <img src={isUser ? user : gemini} alt={isUser ? 'user' : 'assistant'} className={'self-end'} />
      <div>
        {isUser && (
          <span className={'flex w-full items-center gap-2.5 rounded-3xl rounded-br-none bg-primary px-4 py-3.5'}>
            {message}
          </span>
        )}
        {!isUser && (
          <>
            <p className={'mb-2 text-sm'}>Gemini</p> <MarkdownRenderer markdown={message} />
          </>
        )}
      </div>
    </li>
  )
}
