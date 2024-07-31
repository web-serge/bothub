import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgDark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <g clipPath="url(#dark_svg__a)">
      <path
        fill="#616D8D"
        d="M6.453.908a9.552 9.552 0 1 0 12.64 12.64c.316-.701-.403-1.42-1.103-1.104A7.885 7.885 0 0 1 6.86 5.256c0-1.135.24-2.235.697-3.245.316-.7-.403-1.42-1.103-1.103M5.28 3.604l.065-.055-.002.015q-.15.839-.15 1.691c0 5.275 4.277 9.552 9.552 9.552l.343-.006q.512-.019 1.015-.09l.348-.057-.054.066A7.885 7.885 0 1 1 5.279 3.604"
      />
    </g>
    <defs>
      <clipPath id="dark_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgDark)
const Memo = memo(ForwardRef)
export default Memo
