import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSettings = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M15.726 8.664q.005-.165 0-.33l1.14-1.425a.61.61 0 0 0 .113-.54 8.2 8.2 0 0 0-.831-2.006.61.61 0 0 0-.459-.3l-1.813-.203a6 6 0 0 0-.23-.229l-.214-1.818a.61.61 0 0 0-.3-.458 8.2 8.2 0 0 0-2.007-.83.61.61 0 0 0-.54.113L9.164 1.772h-.33L7.409.634a.61.61 0 0 0-.54-.113 8.2 8.2 0 0 0-2.006.831.61.61 0 0 0-.3.459L4.36 3.627q-.12.114-.229.23l-1.818.208a.61.61 0 0 0-.458.301 8.2 8.2 0 0 0-.831 2.007.61.61 0 0 0 .114.54l1.134 1.42v.331l-1.138 1.425a.61.61 0 0 0-.113.54c.187.702.467 1.377.831 2.006a.61.61 0 0 0 .459.3l1.813.202q.114.12.23.23l.211 1.817a.61.61 0 0 0 .301.459 8.2 8.2 0 0 0 2.007.83.61.61 0 0 0 .54-.113l1.42-1.134q.165.005.331 0l1.425 1.14a.61.61 0 0 0 .54.113 8.2 8.2 0 0 0 2.006-.831.61.61 0 0 0 .3-.459l.202-1.813a6 6 0 0 0 .23-.23l1.817-.214a.61.61 0 0 0 .459-.3c.364-.63.644-1.305.83-2.007a.61.61 0 0 0-.113-.54zm-6.727 2.893a3.057 3.057 0 1 1 0-6.115 3.057 3.057 0 0 1 0 6.115"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSettings)
const Memo = memo(ForwardRef)
export default Memo
