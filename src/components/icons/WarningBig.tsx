import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgWarningBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" ref={ref} {...props}>
    <rect width={30} height={30} fill="#222B44" rx={4} />
    <path
      fill="#F29C1C"
      d="m22.771 19.486-6.246-10.63a1.75 1.75 0 0 0-.646-.627 1.8 1.8 0 0 0-1.757 0c-.268.15-.49.366-.647.626L7.23 19.486a1.62 1.62 0 0 0 0 1.66c.154.263.377.48.645.63s.572.227.88.224h12.493c.308.003.611-.075.88-.225.267-.15.489-.367.643-.628a1.62 1.62 0 0 0 .001-1.66M14.43 13.6c0-.149.06-.291.167-.396a.58.58 0 0 1 .808 0 .55.55 0 0 1 .168.396v2.8c0 .149-.06.29-.168.396a.577.577 0 0 1-.808 0 .55.55 0 0 1-.167-.396zM15 19.76a.87.87 0 0 1-.476-.142.84.84 0 0 1-.315-.377.825.825 0 0 1 .185-.915.86.86 0 0 1 .934-.182c.157.064.29.171.385.31a.83.83 0 0 1-.107 1.06.87.87 0 0 1-.606.246"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWarningBig)
const Memo = memo(ForwardRef)
export default Memo
