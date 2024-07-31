import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPrompt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M2.23 3.254a.73.73 0 0 1 1.106 0l3.727 4.132a.936.936 0 0 1 0 1.228l-3.727 4.132a.73.73 0 0 1-1.107 0 .936.936 0 0 1 0-1.227L5.403 8 2.229 4.481a.936.936 0 0 1 0-1.227M13.216 13H8.745c-.432 0-.782-.389-.782-.868s.35-.867.782-.867h4.472c.433 0 .783.388.783.867 0 .48-.35.868-.783.868"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPrompt)
const Memo = memo(ForwardRef)
export default Memo
