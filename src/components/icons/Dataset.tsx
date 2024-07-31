import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgDataset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#0E0C15" rx={4} />
    <path
      fill="#4785FF"
      d="M15 7h2.5v11.5h-11V7H9v1h6zm-6.5 5h7v-1h-7zm0 4h7v-1h-7zM10 7V5.5h4V7z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDataset)
const Memo = memo(ForwardRef)
export default Memo
