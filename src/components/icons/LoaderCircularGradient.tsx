import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLoaderCircularGradient = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#loader-circular-gradient_svg__a)">
      <path
        fill="url(#loader-circular-gradient_svg__b)"
        fillRule="evenodd"
        d="M2.99 11.302a6 6 0 0 0 6.281 2.562c.54-.117 1.121.123 1.326.636s-.044 1.102-.578 1.241A8 8 0 0 1 1.682 3.093c.339-.437.978-.433 1.368-.043s.383 1.02.062 1.47a6 6 0 0 0-.122 6.782"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="loader-circular-gradient_svg__b"
        x1={3}
        x2={10.5}
        y1={6.5}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <clipPath id="loader-circular-gradient_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLoaderCircularGradient)
const Memo = memo(ForwardRef)
export default Memo
