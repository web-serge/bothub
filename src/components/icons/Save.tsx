import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M5.182 2H4.068A2.07 2.07 0 0 0 2 4.068v9.864a2.07 2.07 0 0 0 1.91 2.062v-5.562A1.43 1.43 0 0 1 5.34 9h7.32a1.43 1.43 0 0 1 1.43 1.432v5.562A2.07 2.07 0 0 0 16 13.932v-8.25a2.07 2.07 0 0 0-.606-1.463l-1.613-1.613A2.07 2.07 0 0 0 12.318 2h-.136v3.66a1.43 1.43 0 0 1-1.432 1.43H6.614a1.43 1.43 0 0 1-1.432-1.43zm6.045 0h-5.09v3.66c0 .263.213.476.477.476h4.136a.477.477 0 0 0 .477-.477zm1.91 14v-5.568a.477.477 0 0 0-.478-.477H5.341a.477.477 0 0 0-.477.477V16z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSave)
const Memo = memo(ForwardRef)
export default Memo
