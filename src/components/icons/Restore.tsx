import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRestore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M10.286 1C8.24 1 6.278 1.843 4.83 3.343A8.15 8.15 0 0 0 2.57 9H0l3.429 3.556L6.857 9H4.286c0-1.65.632-3.233 1.757-4.4a5.9 5.9 0 0 1 4.243-1.822c1.591 0 3.117.655 4.242 1.822A6.34 6.34 0 0 1 16.286 9c0 1.65-.632 3.233-1.758 4.4a5.9 5.9 0 0 1-4.242 1.822c-1.286 0-2.495-.444-3.48-1.155l-1.235 1.28A7.63 7.63 0 0 0 10.286 17c2.046 0 4.008-.843 5.455-2.343A8.15 8.15 0 0 0 18 9a8.15 8.15 0 0 0-2.26-5.657C14.295 1.843 12.333 1 10.287 1M12 9c0-.472-.18-.924-.502-1.257a1.68 1.68 0 0 0-1.212-.52c-.455 0-.891.187-1.212.52A1.8 1.8 0 0 0 8.57 9c0 .472.181.924.503 1.257.321.334.757.52 1.212.52s.89-.186 1.212-.52C11.819 9.924 12 9.472 12 9"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRestore)
const Memo = memo(ForwardRef)
export default Memo
