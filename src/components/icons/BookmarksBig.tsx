import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBookmarksBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} y={0.5} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M6 19.833V9.167q0-.55.392-.942.392-.393.941-.392H14q.55 0 .942.392t.391.942v10.666l-4.666-2zm10.667-2V6.5H8V5.167h8.667q.549 0 .942.392Q18 5.95 18 6.5v11.333z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarksBig)
const Memo = memo(ForwardRef)
export default Memo
