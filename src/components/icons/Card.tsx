import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M0 14.114c0 .632.237 1.24.659 1.687s.994.699 1.591.699h13.5c.597 0 1.169-.251 1.591-.699A2.46 2.46 0 0 0 18 14.114V7.55H0zm2.652-3.239c0-.34.127-.664.353-.904s.532-.374.852-.374h1.929c.32 0 .626.134.852.374s.353.565.353.904v.852c0 .34-.127.665-.353.904-.226.24-.533.375-.852.375H3.857c-.32 0-.626-.135-.852-.375a1.32 1.32 0 0 1-.353-.904zM15.75 1.5H2.25c-.597 0-1.169.251-1.591.699A2.46 2.46 0 0 0 0 3.886v1.108h18V3.886c0-.633-.237-1.24-.659-1.687A2.19 2.19 0 0 0 15.75 1.5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCard)
const Memo = memo(ForwardRef)
export default Memo
