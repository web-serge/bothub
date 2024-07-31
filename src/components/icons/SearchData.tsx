import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSearchData = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M7.5 10a.833.833 0 0 0-1.667 0v.833a.833.833 0 0 0 1.667 0zm.833.833v-5a.833.833 0 1 1 1.667 0v5a.833.833 0 0 1-1.667 0m4.167-2.5a.833.833 0 1 0-1.667 0v2.5a.833.833 0 0 0 1.667 0z"
    />
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M14.158 3.81a7.318 7.318 0 1 0-.621 10.905l3.374 3.375a.833.833 0 1 0 1.178-1.18l-3.374-3.374a7.32 7.32 0 0 0-.557-9.726M4.99 4.988a5.651 5.651 0 1 1 7.992 7.992 5.651 5.651 0 0 1-7.992-7.992"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearchData)
const Memo = memo(ForwardRef)
export default Memo
