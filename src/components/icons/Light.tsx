import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <g clipPath="url(#light_svg__a)">
      <path
        fill="#fff"
        d="M10 15.833a.833.833 0 0 1 .833.834v1.666a.834.834 0 0 1-1.666 0v-1.666a.833.833 0 0 1 .833-.834m-4.15-1.68a.833.833 0 0 1 .07 1.1l-.07.078-1.177 1.178a.834.834 0 0 1-1.248-1.1l.07-.078 1.178-1.178a.833.833 0 0 1 1.178 0m9.478 0 1.178 1.178a.835.835 0 0 1-.586 1.433.83.83 0 0 1-.592-.255l-1.179-1.178a.833.833 0 0 1 1.179-1.178M10 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10M3.333 9.167a.833.833 0 1 1 0 1.666H1.667a.834.834 0 0 1 0-1.666zm15 0a.833.833 0 1 1 0 1.666h-1.666a.834.834 0 0 1 0-1.666zM4.594 3.425l.079.07L5.85 4.671a.833.833 0 0 1-1.1 1.248l-.078-.07-1.179-1.178a.833.833 0 0 1 1.1-1.247m11.912.07a.833.833 0 0 1 0 1.177l-1.178 1.179a.833.833 0 0 1-1.179-1.179l1.179-1.178a.833.833 0 0 1 1.178 0M10 .832a.834.834 0 0 1 .828.736l.005.098v1.666a.833.833 0 0 1-1.66.098l-.006-.098V1.667A.833.833 0 0 1 10 .833"
      />
    </g>
    <defs>
      <clipPath id="light_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLight)
const Memo = memo(ForwardRef)
export default Memo
