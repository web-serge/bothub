import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgAttach = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M6.193 14a4.15 4.15 0 0 1-2.953-1.253 4 4 0 0 1-.147-5.66L8 2.133a2.74 2.74 0 0 1 2-.8 2.99 2.99 0 0 1 2.127.9 2.907 2.907 0 0 1 .1 4.087l-4.934 4.953a1.7 1.7 0 0 1-1.206.5 1.81 1.81 0 0 1-1.3-.546 1.787 1.787 0 0 1-.054-2.514L9.287 4.14a.667.667 0 0 1 .913.94L5.647 9.653a.453.453 0 0 0 .053.634.52.52 0 0 0 .353.153.37.37 0 0 0 .267-.107l4.927-4.953a1.573 1.573 0 0 0-.1-2.207 1.587 1.587 0 0 0-2.18-.1L4.04 8a2.667 2.667 0 0 0 .147 3.78 2.81 2.81 0 0 0 2 .86 2.45 2.45 0 0 0 1.74-.707l4.926-4.953a.667.667 0 0 1 .947.94l-4.927 4.953A3.77 3.77 0 0 1 6.193 14"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAttach)
const Memo = memo(ForwardRef)
export default Memo
