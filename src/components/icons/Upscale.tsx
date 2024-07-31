import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgUpscale = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M2 2h4v1.333H4.308l3.229 3.229-.944.943-3.26-3.26V6H2zm0 12h4v-1.333H4.25L7.538 9.38l-.944-.942-3.26 3.26V10H2zm8 0h4v-4h-1.333v1.683L9.422 8.439l-.943.942 3.286 3.286H10zm4-12h-4v1.333h1.708L8.479 6.562l.943.943 3.245-3.245V6H14z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUpscale)
const Memo = memo(ForwardRef)
export default Memo
