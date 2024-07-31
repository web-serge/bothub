import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBrush = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M14.086 1q.399 0 .742.148a1.95 1.95 0 0 1 1.016 1.016q.141.336.156.75 0 .382-.14.727-.141.343-.422.625A4142 4142 0 0 0 10.71 9a2040 2040 0 0 1-4.734 4.734 2.554 2.554 0 0 1-.797 1.61 2.4 2.4 0 0 1-.766.476A2.6 2.6 0 0 1 3.5 16h-2q-.312 0-.586-.117a1.5 1.5 0 0 1-.797-.797A1.5 1.5 0 0 1 0 14.5V14h.5a.48.48 0 0 0 .352-.148A.48.48 0 0 0 1 13.5q0-.477.172-.906a2.5 2.5 0 0 1 .484-.766q.313-.336.719-.547.406-.21.89-.258Q5.634 8.656 8 6.297a2046 2046 0 0 0 4.734-4.734q.274-.274.618-.415T14.086 1M4.5 11.21q.43.188.766.524.336.337.523.766l.906-.906a3.56 3.56 0 0 0-1.289-1.29zM3.5 15q.313 0 .586-.117a1.5 1.5 0 0 0 .797-.797Q5 13.812 5 13.5q0-.313-.117-.586a1.5 1.5 0 0 0-.797-.797A1.5 1.5 0 0 0 3.5 12q-.312 0-.586.117a1.5 1.5 0 0 0-.797.797A1.5 1.5 0 0 0 2 13.5a1.49 1.49 0 0 1-.852 1.352q.14.147.352.148zM14.734 3.563A.88.88 0 0 0 15 2.914a.9.9 0 0 0-.07-.352 1 1 0 0 0-.196-.296.8.8 0 0 0-.289-.196 1.1 1.1 0 0 0-.36-.07.88.88 0 0 0-.648.266L6.134 9.578q.773.516 1.289 1.29z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBrush)
const Memo = memo(ForwardRef)
export default Memo
