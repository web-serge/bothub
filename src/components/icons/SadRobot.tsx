import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSadRobot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M41.353 19.884v-5.913a3.88 3.88 0 0 0-1.224-2.811 4.3 4.3 0 0 0-2.956-1.165H24.635V7.387c.638-.544 1.045-1.328 1.045-2.206 0-.79-.33-1.55-.918-2.108a3.22 3.22 0 0 0-2.216-.874c-.832 0-1.63.314-2.217.874a2.9 2.9 0 0 0-.918 2.108c0 .878.407 1.662 1.045 2.206v2.608H7.918a4.3 4.3 0 0 0-2.956 1.165 3.88 3.88 0 0 0-1.224 2.81v5.96l-.15.01c-.527.036-1.02.26-1.38.628-.36.367-.56.851-.56 1.354v3.975c0 .527.22 1.033.613 1.406.391.372.923.582 1.477.582v9.939a3.88 3.88 0 0 0 1.224 2.81A4.3 4.3 0 0 0 7.918 41.8h29.255a4.3 4.3 0 0 0 2.956-1.164 3.88 3.88 0 0 0 1.224-2.811v-9.94c.554 0 1.086-.209 1.478-.581a1.94 1.94 0 0 0 .612-1.406v-3.852a1.9 1.9 0 0 0-.15-.905c-.423-.97-1.328-1.202-1.94-1.256m-28.705 2.038c0-2.195.853-4.873 2.584-4.873 1.73 0 2.366 2.678 2.366 4.873 0 2.194-.636 4.477-2.366 4.477s-2.584-2.283-2.584-4.477m18.256 10.402c-.002.842-.674 1.402-1.47 1.128-1.651-.57-4.277-1.553-6.889-1.553-2.356 0-4.7.614-6.304 1.153-.973.327-2.054-.382-2.054-1.408 0-.52.286-.995.76-1.208 1.389-.625 4.482-1.836 7.599-1.837 2.62 0 5.257 1.116 6.91 1.759.784.305 1.45 1.124 1.448 1.966M29.86 26.4c-1.73 0-2.362-2.283-2.362-4.477s.631-4.873 2.361-4.873 2.59 2.678 2.59 4.873c0 2.194-.86 4.477-2.59 4.477"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSadRobot)
const Memo = memo(ForwardRef)
export default Memo
