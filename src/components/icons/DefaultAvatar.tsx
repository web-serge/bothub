import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgDefaultAvatar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} fill="none" ref={ref} {...props}>
    <g clipPath="url(#default-avatar_svg__a)">
      <path
        fill="#313E62"
        d="M32 16.5c0 8.837-7.163 16-16 16s-16-7.163-16-16S7.163.5 16 .5s16 7.163 16 16"
      />
      <path
        fill="#fff"
        d="M16 17.625A5.062 5.062 0 1 0 16 7.5a5.062 5.062 0 0 0 0 10.125m-3.33 1.125A5.67 5.67 0 0 0 7 24.42c0 .598.485 1.08 1.08 1.08h15.84A1.08 1.08 0 0 0 25 24.42a5.67 5.67 0 0 0-5.67-5.67z"
      />
    </g>
    <defs>
      <clipPath id="default-avatar_svg__a">
        <path fill="#fff" d="M0 .5h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgDefaultAvatar)
const Memo = memo(ForwardRef)
export default Memo
