import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgCorporate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      fill="#4785FF"
      d="M20.903 5.389h-3.899V3.662c0-.74-.234-1.662-1.671-1.662H8.666c-1.439 0-1.619.922-1.619 1.662V5.39h-3.95C1.928 5.389 1 6.376 1 7.539v1.233l9.763 4.652c.068-.67.584-1.199 1.237-1.199s1.203.529 1.238 1.199L23 8.772V7.538c0-1.162-.928-2.15-2.097-2.15m-5.053 0H8.395V3.662c0-.352-.073-.634.27-.634h6.566c.344 0 .619.282.619.634z"
    />
    <path
      fill="#4785FF"
      d="M12.584 15.045v-1.516c0-.317-.24-.599-.584-.599s-.584.247-.584.6v1.515c0 .317.24.599.584.599a.587.587 0 0 0 .584-.6"
    />
    <path
      fill="#4785FF"
      d="M13.272 15.045c0 .704-.55 1.303-1.272 1.303s-1.272-.563-1.272-1.303v-.846L1 9.547v9.303C1 20.048 1.928 21 3.097 21h17.806C22.072 21 23 20.049 23 18.85V9.547L13.272 14.2z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCorporate)
const Memo = memo(ForwardRef)
export default Memo
