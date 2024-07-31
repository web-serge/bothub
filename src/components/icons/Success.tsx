import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSuccess = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#success_svg__a)">
      <path
        fill="#1ABB34"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.81 7.19a1.5 1.5 0 0 1 0 2.12l-8.25 8.25a1.5 1.5 0 0 1-2.12 0l-3.75-3.75a1.5 1.5 0 0 1 2.12-2.12l2.69 2.689 7.19-7.19a1.5 1.5 0 0 1 2.12 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="success_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSuccess)
const Memo = memo(ForwardRef)
export default Memo
