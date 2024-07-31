import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTxtBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={46} fill="none" ref={ref} {...props}>
    <g clipPath="url(#txt-big_svg__a)">
      <circle cx={23} cy={23} r={23} fill="#1A347C" />
      <path
        fill="#0263D1"
        fillRule="evenodd"
        d="M15.687 8h10.03l8.501 8.86v17.234A3.9 3.9 0 0 1 30.32 38H15.687a3.903 3.903 0 0 1-3.905-3.906V11.906A3.903 3.903 0 0 1 15.687 8"
        clipRule="evenodd"
      />
      <path fill="#000" fillRule="evenodd" d="M25.71 8v8.793h8.508z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M17.449 29.904v-4.265h-1.56v-1.185h4.506v1.185h-1.552v4.265zm8.013 0h-1.461l-.997-1.672-.997 1.672h-1.47l1.732-2.908-1.514-2.542h1.462l.787 1.32.78-1.32h1.469l-1.515 2.549zm1.695 0v-4.265h-1.552v-1.185h4.505v1.185h-1.559v4.265z"
      />
    </g>
    <defs>
      <clipPath id="txt-big_svg__a">
        <path fill="#fff" d="M0 0h46v46H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTxtBig)
const Memo = memo(ForwardRef)
export default Memo
