import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMythomax = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#mythomax_svg__a)">
      <path
        fill="#735FFA"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12"
      />
      <path
        fill="#fff"
        d="M15.7 9.822h-.074l-.994 1.59L12 15.196l-2.632-3.782-.994-1.59h-.073V17H6V7h2.742l3.295 4.885h.073L15.368 7H18v10h-2.3z"
      />
    </g>
    <defs>
      <clipPath id="mythomax_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMythomax)
const Memo = memo(ForwardRef)
export default Memo
