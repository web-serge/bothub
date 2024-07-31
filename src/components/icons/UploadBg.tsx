import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgUploadBg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="none" ref={ref} {...props}>
    <rect width={44} height={44} fill="#0E0C15" rx={4} />
    <path
      fill="#4785FF"
      d="M20.688 27.25V16.553l-3.413 3.413-1.837-1.904L22 11.5l6.563 6.563-1.838 1.903-3.413-3.413V27.25zm-6.563 5.25q-1.083 0-1.853-.77a2.53 2.53 0 0 1-.772-1.855v-3.937h2.625v3.937h15.75v-3.937H32.5v3.937q0 1.083-.77 1.855a2.52 2.52 0 0 1-1.855.77z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUploadBg)
const Memo = memo(ForwardRef)
export default Memo
