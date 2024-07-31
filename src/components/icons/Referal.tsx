import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgReferal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} y={0.5} fill="#222B44" rx={4} />
    <g clipPath="url(#referal_svg__a)">
      <path
        fill="#4785FF"
        fillRule="evenodd"
        d="M11.667 6.5a3 3 0 0 1 2.89 2.195l.035.136 1.247-.311a.666.666 0 0 1 .822.56l.006.087v1.206c.376.36.684.786.909 1.255l.092.205H18a.667.667 0 0 1 .662.589l.005.078v2a.67.67 0 0 1-.297.555l-.072.041-.779.39a4.35 4.35 0 0 1-1.346 1.55l-.173.116v.681a.666.666 0 0 1-.589.662l-.078.005h-2a.667.667 0 0 1-.662-.589l-.004-.078H12a.666.666 0 0 1-.589.662l-.078.005h-2a.667.667 0 0 1-.662-.589l-.004-.078v-.681a4.34 4.34 0 0 1-1.903-2.734 2 2 0 0 1-1.427-1.795l-.004-.123v-.333a.666.666 0 0 1 1.329-.078l.005.078v.333a.7.7 0 0 0 .06.277 4.34 4.34 0 0 1 1.958-2.941A3 3 0 0 1 11.667 6.5m3 5.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334m-3-4a1.67 1.67 0 0 0-1.652 1.446q.486-.112.985-.112h2.251l.047-.012a1.666 1.666 0 0 0-1.631-1.322"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="referal_svg__a">
        <path fill="#fff" d="M4 4.5h16v16H4z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgReferal)
const Memo = memo(ForwardRef)
export default Memo
