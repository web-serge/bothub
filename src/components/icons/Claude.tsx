import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgClaude = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#fff" rx={12} />
    <path
      fill="#121825"
      d="M15.097 7h-2.143l3.902 10H19zM8.903 7 5 17h2.188l.787-2.1h4.095l.796 2.1h2.188L11.143 7zm-.21 6.042 1.33-3.517 1.338 3.517z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClaude)
const Memo = memo(ForwardRef)
export default Memo
