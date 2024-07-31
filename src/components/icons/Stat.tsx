import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgStat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M18 17.5H6v-1.333h12zm-8.667-7.333H6.667v4.666h2.666zm4-2.667h-2.666v7.333h2.666zm4-2h-2.666v9.333h2.666z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStat)
const Memo = memo(ForwardRef)
export default Memo
