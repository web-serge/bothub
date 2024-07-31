import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgXls = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#xls_svg__a)">
      <path
        fill="#00733B"
        fillRule="evenodd"
        d="M6.144 0h8.033l6.797 7.095v13.778A3.12 3.12 0 0 1 17.855 24H6.145a3.127 3.127 0 0 1-3.119-3.127V3.118A3.125 3.125 0 0 1 6.144 0"
        clipRule="evenodd"
      />
      <path fill="#000" fillRule="evenodd" d="M14.168 0v7.034h6.806z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M10.489 17.475H9.324l-.797-1.34-.797 1.34H6.556l1.384-2.33-1.217-2.024h1.173l.63 1.051.623-1.05h1.174l-1.21 2.031zm.412 0V13.12h1.112v3.408h1.892v.945zm4.844.052a1.78 1.78 0 0 1-1.157-.412c-.324-.262-.508-.595-.534-.99l.955-.28c.026.21.114.394.262.535q.237.21.526.21.237 0 .394-.105a.34.34 0 0 0 .15-.28.32.32 0 0 0-.123-.246 1.1 1.1 0 0 0-.307-.157 4 4 0 0 0-.42-.123 3 3 0 0 1-.465-.167 1.6 1.6 0 0 1-.42-.236.9.9 0 0 1-.307-.386 1.3 1.3 0 0 1-.122-.569c0-.359.148-.657.455-.893.307-.246.675-.36 1.104-.36s.805.106 1.12.307c.316.21.518.482.596.815l-.998.42a.87.87 0 0 0-.254-.446.7.7 0 0 0-.464-.167.62.62 0 0 0-.333.088.26.26 0 0 0-.114.227c0 .088.053.167.158.228.105.053.245.097.403.123a3.202 3.202 0 0 1 1.042.368c.157.087.289.236.394.429.114.201.166.438.166.71 0 .402-.157.735-.473.98-.315.246-.726.377-1.234.377"
      />
    </g>
    <defs>
      <clipPath id="xls_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgXls)
const Memo = memo(ForwardRef)
export default Memo
