import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <mask id="square_svg__a" fill="#fff">
      <rect width={16} height={16} x={1} y={1} rx={1} />
    </mask>
    <rect
      width={16}
      height={16}
      x={1}
      y={1}
      stroke="#fff"
      strokeWidth={4}
      mask="url(#square_svg__a)"
      rx={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSquare)
const Memo = memo(ForwardRef)
export default Memo
