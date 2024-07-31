import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgError = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#error_svg__a)">
      <path
        fill="#FE4242"
        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8m0 8.8c-.44 0-.8-.36-.8-.8V4.8c0-.44.36-.8.8-.8s.8.36.8.8V8c0 .44-.36.8-.8.8m.8 3.2H7.2v-1.6h1.6z"
      />
    </g>
    <defs>
      <clipPath id="error_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgError)
const Memo = memo(ForwardRef)
export default Memo
