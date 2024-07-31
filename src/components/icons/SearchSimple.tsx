import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSearchSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="m21.694 20.493-4.534-4.534a8.38 8.38 0 0 0 1.678-5.04c0-4.642-3.777-8.419-8.419-8.419S2 6.277 2 10.92s3.777 8.418 8.42 8.418a8.38 8.38 0 0 0 5.039-1.678l4.534 4.534a1.205 1.205 0 0 0 1.7-1.701M4.404 10.919a6.014 6.014 0 1 1 6.014 6.014 6.02 6.02 0 0 1-6.014-6.014"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearchSimple)
const Memo = memo(ForwardRef)
export default Memo
