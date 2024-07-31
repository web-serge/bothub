import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M15 2.833h-3L11.143 2H6.857L6 2.833H3V4.5h12M3.857 15.333c0 .442.18.866.502 1.179A1.74 1.74 0 0 0 5.571 17h6.858c.454 0 .89-.176 1.212-.488.321-.313.502-.737.502-1.179v-10H3.857z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTrash)
const Memo = memo(ForwardRef)
export default Memo
