import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBookmarks = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M2 15.333V4.667q0-.55.392-.942t.941-.392H10q.55 0 .942.392t.391.942v10.666l-4.666-2zm10.667-2V2H4V.667h8.667q.549 0 .942.392Q14 1.45 14 2v11.333z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarks)
const Memo = memo(ForwardRef)
export default Memo
