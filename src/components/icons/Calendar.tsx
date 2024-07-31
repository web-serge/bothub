import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#848798"
      d="M10 11.6a.74.74 0 0 1-.554-.23.78.78 0 0 1-.224-.57q0-.34.224-.57A.74.74 0 0 1 10 10q.33 0 .555.23a.79.79 0 0 1 .223.57.79.79 0 0 1-.223.57.74.74 0 0 1-.555.23m-3.111 0a.74.74 0 0 1-.555-.23.79.79 0 0 1-.223-.57q0-.34.223-.57A.74.74 0 0 1 6.89 10q.33 0 .554.23a.79.79 0 0 1 .224.57.79.79 0 0 1-.224.57.74.74 0 0 1-.554.23m6.222 0a.74.74 0 0 1-.554-.23.78.78 0 0 1-.224-.57q0-.34.224-.57a.74.74 0 0 1 .554-.23q.33 0 .554.23t.224.57a.78.78 0 0 1-.224.57.74.74 0 0 1-.554.23M10 14.8a.74.74 0 0 1-.554-.23.78.78 0 0 1-.224-.57q0-.34.224-.57A.74.74 0 0 1 10 13.2q.33 0 .555.23a.79.79 0 0 1 .223.57.79.79 0 0 1-.223.57.74.74 0 0 1-.555.23m-3.111 0a.74.74 0 0 1-.555-.23.79.79 0 0 1-.223-.57q0-.34.223-.57a.74.74 0 0 1 .555-.23q.33 0 .554.23a.79.79 0 0 1 .224.57.79.79 0 0 1-.224.57.74.74 0 0 1-.554.23m6.222 0a.74.74 0 0 1-.554-.23.78.78 0 0 1-.224-.57q0-.34.224-.57a.74.74 0 0 1 .554-.23.74.74 0 0 1 .554.23q.224.23.224.57a.78.78 0 0 1-.224.57.74.74 0 0 1-.554.23M4.556 18a1.48 1.48 0 0 1-1.1-.47A1.57 1.57 0 0 1 3 16.4V5.2q0-.66.457-1.13.456-.47 1.099-.47h.777V2H6.89v1.6h6.222V2h1.556v1.6h.777q.642 0 1.1.47Q17 4.54 17 5.2v11.2q0 .66-.457 1.13-.456.47-1.099.47zm0-1.6h10.888v-8H4.556z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCalendar)
const Memo = memo(ForwardRef)
export default Memo
