import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTxt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#txt_svg__a)">
      <path
        fill="#0263D1"
        fillRule="evenodd"
        d="M6.15 0h8.024l6.8 7.088v13.788A3.12 3.12 0 0 1 17.857 24H6.15a3.12 3.12 0 0 1-3.124-3.124V3.124A3.12 3.12 0 0 1 6.15 0"
        clipRule="evenodd"
      />
      <path fill="#000" fillRule="evenodd" d="M14.168 0v7.034h6.807z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M7.56 17.523v-3.412H6.311v-.948h3.604v.948H8.675v3.412zm6.41 0H12.8l-.797-1.337-.798 1.337H10.03l1.385-2.327-1.211-2.033h1.17l.63 1.056.623-1.056h1.175l-1.211 2.04zm1.355 0v-3.412h-1.241v-.948h3.604v.948h-1.247v3.412z"
      />
    </g>
    <defs>
      <clipPath id="txt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTxt)
const Memo = memo(ForwardRef)
export default Memo
