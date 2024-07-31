import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgWordBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={46} fill="none" ref={ref} {...props}>
    <g clipPath="url(#word-big_svg__a)">
      <circle cx={23} cy={23} r={23} fill="#1A347C" />
      <path
        fill="#0263D1"
        d="M15.68 8h10.04l8.5 8.863V34.1c0 2.153-1.748 3.901-3.906 3.901H15.68a3.903 3.903 0 0 1-3.9-3.9V11.9c0-2.152 1.748-3.9 3.9-3.9"
      />
      <path fill="#000" fillRule="evenodd" d="M25.71 8v8.794h8.51z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M26.956 23.609h-7.912a.663.663 0 0 1-.663-.658c0-.364.3-.658.663-.658h7.912a.657.657 0 1 1 0 1.316m-2.637 7.91h-5.275a.663.663 0 0 1-.663-.657c0-.363.3-.658.663-.658h5.275a.658.658 0 1 1 0 1.316m2.637-2.636h-7.912a.663.663 0 0 1-.663-.658c0-.363.3-.658.663-.658h7.912a.657.657 0 1 1 0 1.316m0-2.637h-7.912a.663.663 0 0 1-.663-.658c0-.364.3-.658.663-.658h7.912a.657.657 0 1 1 0 1.316"
      />
    </g>
    <defs>
      <clipPath id="word-big_svg__a">
        <path fill="#fff" d="M0 0h46v46H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgWordBig)
const Memo = memo(ForwardRef)
export default Memo
