import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgStarUnfilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#374151"
      d="M9.077 2.22c.341-.821 1.505-.821 1.846 0l1.488 3.575a1 1 0 0 0 .843.613l3.86.31c.887.07 1.246 1.177.57 1.756l-2.94 2.52a1 1 0 0 0-.322.99l.898 3.768c.206.865-.735 1.549-1.494 1.085l-3.305-2.019a1 1 0 0 0-1.042 0l-3.305 2.019c-.76.464-1.7-.22-1.494-1.085l.899-3.767a1 1 0 0 0-.323-.992l-2.94-2.519c-.676-.579-.317-1.685.57-1.756l3.86-.31a1 1 0 0 0 .844-.613z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStarUnfilled)
const Memo = memo(ForwardRef)
export default Memo
