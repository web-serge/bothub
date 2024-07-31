import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTrashBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} fill="none" ref={ref} {...props}>
    <rect width={54} height={54} fill="#313E62" rx={6} />
    <path
      fill="#FE4242"
      d="M40.333 12.185h-6.666l-1.905-1.852h-9.524l-1.905 1.852h-6.666v3.704h26.666M15.571 39.963c0 .982.402 1.924 1.116 2.619a3.87 3.87 0 0 0 2.694 1.085h15.238c1.01 0 1.98-.39 2.694-1.085a3.65 3.65 0 0 0 1.116-2.619V17.741H15.57z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTrashBig)
const Memo = memo(ForwardRef)
export default Memo
