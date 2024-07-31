import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLoaderCircular = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#loader-circular_svg__a)">
      <circle cx={8} cy={8} r={7} stroke="#9EAFDE" strokeWidth={2} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.073 9h-.001M.063 9a8 8 0 0 0 11.959 5.913l-1.005-1.726-.002-.001a6 6 0 0 1-8.93-4.19C1.993 8.45 1.553 8 1 8s-1.007.452-.938 1"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="loader-circular_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLoaderCircular)
const Memo = memo(ForwardRef)
export default Memo
