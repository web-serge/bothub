import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgActionChat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <g clipPath="url(#action-chat_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12.75 2.25A3.75 3.75 0 0 1 16.5 6v6a3.75 3.75 0 0 1-3.75 3.75L2.5 16c-.199 0-1.86.64-2 .5s1-2.301 1-2.5V6a3.75 3.75 0 0 1 3.75-3.75zm-6 5.25a.75.75 0 0 0-.745.662L6 8.25v1.5a.75.75 0 0 0 1.495.088L7.5 9.75v-1.5a.75.75 0 0 0-.75-.75m4.5 0a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="action-chat_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgActionChat)
const Memo = memo(ForwardRef)
export default Memo
