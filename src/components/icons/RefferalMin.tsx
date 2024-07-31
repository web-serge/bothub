import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRefferalMin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M8.625 2.25a3.38 3.38 0 0 1 3.252 2.469l.039.154 1.402-.35a.75.75 0 0 1 .925.63l.007.097v1.358c.423.405.77.883 1.023 1.411l.104.231h.373a.75.75 0 0 1 .745.662L16.5 9v2.25a.75.75 0 0 1-.334.624l-.08.046-.877.44a4.9 4.9 0 0 1-1.515 1.743l-.194.13V15a.75.75 0 0 1-.662.745l-.088.005H10.5a.75.75 0 0 1-.745-.662L9.75 15H9a.75.75 0 0 1-.662.745l-.088.005H6a.75.75 0 0 1-.745-.662L5.25 15v-.767a4.88 4.88 0 0 1-2.14-3.075 2.25 2.25 0 0 1-1.605-2.02L1.5 9v-.375a.75.75 0 0 1 1.495-.088L3 8.625V9q.001.168.067.311a4.88 4.88 0 0 1 2.204-3.308A3.375 3.375 0 0 1 8.625 2.25m3.375 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-3.375-4.5a1.875 1.875 0 0 0-1.859 1.627 5 5 0 0 1 1.109-.127h2.533l.052-.013A1.875 1.875 0 0 0 8.625 3.75"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRefferalMin)
const Memo = memo(ForwardRef)
export default Memo
