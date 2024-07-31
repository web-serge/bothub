import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMythomax1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#mythomax-1_svg__a)">
      <circle cx={12} cy={12} r={12} fill="#1C64F2" />
      <path
        fill="#fff"
        d="M17.778 8.26a.12.12 0 0 0 .062-.109.13.13 0 0 0-.062-.108L13.005 5.27a2 2 0 0 0-2.01 0L6.223 8.043a.125.125 0 0 0 0 .216l5.715 3.362a.13.13 0 0 0 .126 0zm-12.09.85a.125.125 0 0 0-.188.109v5.434a1.5 1.5 0 0 0 .745 1.293l5.068 3.039a.124.124 0 0 0 .17-.046.12.12 0 0 0 .017-.062v-6.305a.13.13 0 0 0-.062-.108zm6.812 3.484v6.281a.125.125 0 0 0 .188.108l5.067-3.038a1.5 1.5 0 0 0 .745-1.292V9.219a.125.125 0 0 0-.187-.108l-5.75 3.375a.13.13 0 0 0-.063.108"
      />
    </g>
    <defs>
      <clipPath id="mythomax-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMythomax1)
const Memo = memo(ForwardRef)
export default Memo
