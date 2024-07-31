import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPlus1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 1.077A5.915 5.915 0 0 1 14.923 9 5.915 5.915 0 0 1 9 14.923 5.915 5.915 0 0 1 3.077 9 5.915 5.915 0 0 1 9 3.077m-.538 2.692v2.693H5.769v1.076h2.693v2.693h1.076V9.538h2.693V8.462H9.538V5.769z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPlus1)
const Memo = memo(ForwardRef)
export default Memo
