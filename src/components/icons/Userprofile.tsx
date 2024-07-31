import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgUserprofile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M9 9c2.525 0 4.571-2.014 4.571-4.5S11.525 0 9 0 4.429 2.014 4.429 4.5 6.475 9 9 9m3.2 1.125h-.596a6.3 6.3 0 0 1-5.208 0H5.8c-2.65 0-4.8 2.116-4.8 4.725v1.463C1 17.244 1.768 18 2.714 18h12.572c.946 0 1.714-.756 1.714-1.687V14.85c0-2.609-2.15-4.725-4.8-4.725"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUserprofile)
const Memo = memo(ForwardRef)
export default Memo
