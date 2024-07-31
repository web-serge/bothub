import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSearchCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <g clipPath="url(#search-circle_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12m3.612-10.079 3.173 3.174a.844.844 0 0 1-1.19 1.19l-3.174-3.173a5.86 5.86 0 0 1-3.528 1.175A5.9 5.9 0 0 1 5 10.893 5.9 5.9 0 0 1 10.893 5a5.9 5.9 0 0 1 5.894 5.893 5.86 5.86 0 0 1-1.175 3.528M7.393 8.555a4.21 4.21 0 1 0 7 4.677 4.21 4.21 0 0 0-7-4.677"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="search-circle_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSearchCircle)
const Memo = memo(ForwardRef)
export default Memo
