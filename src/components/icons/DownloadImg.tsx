import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgDownloadImg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M8.719.969a1 1 0 0 1 1 1v7.358l2.841-2.486a1 1 0 0 1 1.317 1.505l-4.5 3.938a1 1 0 0 1-1.317 0l-4.5-3.938a1 1 0 1 1 1.317-1.505L7.72 9.327V1.97a1 1 0 0 1 1-1M2.656 14.906a1 1 0 0 1 1-1h10.125a1 1 0 0 1 0 2H3.656a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDownloadImg)
const Memo = memo(ForwardRef)
export default Memo
