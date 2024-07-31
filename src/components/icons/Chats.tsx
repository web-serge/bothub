import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgChats = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} y={0.5} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M18.487 16.208a5 5 0 0 0-3.889-7.171 5 5 0 1 0-9.085 4.171l-.479 1.676a.875.875 0 0 0 1.082 1.082l1.676-.48a5 5 0 0 0 1.61.478 5 5 0 0 0 6.806 2.523l1.676.479a.875.875 0 0 0 1.082-1.082zm-1.016.084.471 1.65-1.65-.471a.5.5 0 0 0-.375.042 4.003 4.003 0 0 1-5.395-1.54 4.995 4.995 0 0 0 4.397-5.866 4 4 0 0 1 2.594 5.808.5.5 0 0 0-.042.377"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgChats)
const Memo = memo(ForwardRef)
export default Memo
