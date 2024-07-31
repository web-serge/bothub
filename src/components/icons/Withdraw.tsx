import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgWithdraw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} y={0.5} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 2.667a.666.666 0 1 1 0-1.333.666.666 0 0 1 0 1.333m-.473-9.14a.7.7 0 0 1 .22-.14.63.63 0 0 1 .506 0q.124.049.22.14L14 7.027a.688.688 0 0 1-.973.973l-.36-.393V10a.667.667 0 0 1-1.334 0V7.607l-.36.393A.688.688 0 0 1 10 7.027zM16.667 14a.667.667 0 1 0-1.334 0 .667.667 0 0 0 1.334 0m.666-4.667h-2a.667.667 0 1 0 0 1.334h2a.667.667 0 0 1 .667.666v5.334a.667.667 0 0 1-.667.666H6.667A.667.667 0 0 1 6 16.667v-5.334a.667.667 0 0 1 .667-.666h2a.667.667 0 0 0 0-1.334h-2a2 2 0 0 0-2 2v5.334a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2v-5.334a2 2 0 0 0-2-2M7.333 14a.667.667 0 1 0 1.334 0 .667.667 0 0 0-1.334 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWithdraw)
const Memo = memo(ForwardRef)
export default Memo
