import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBlog = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#blog_svg__a)">
      <circle cx={12} cy={12} r={12} fill="#fff" />
      <path
        fill="#000"
        d="M6.413 19q-.603 0-1.008-.404A1.37 1.37 0 0 1 5 17.586V6.414q0-.603.405-1.008T6.413 5h8.717L19 8.87v8.717q0 .603-.404 1.008-.405.405-1.01.405zm1.65-3.5h7.874v-.875H8.064zm0-3.062h7.874v-.876H8.064zM14 10l4.125-.625-3.5-3.5zm-5.937-.625H12V8.5H8.063z"
      />
    </g>
    <defs>
      <clipPath id="blog_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgBlog)
const Memo = memo(ForwardRef)
export default Memo
