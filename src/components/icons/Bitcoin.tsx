import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBitcoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <g clipPath="url(#bitcoin_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.821 17.73A8.998 8.998 0 0 0 11.175.27 8.996 8.996 0 0 0 .27 6.824 8.997 8.997 0 0 0 6.82 17.73m4.165-12.283c1.247.43 2.158 1.073 1.98 2.27-.13.878-.616 1.302-1.261 1.45.886.462 1.336 1.17.907 2.396-.533 1.523-1.8 1.652-3.483 1.333l-.409 1.638-.988-.246.404-1.616a38 38 0 0 1-.787-.204l-.405 1.623-.986-.246.408-1.64-.286-.075-.418-.108-1.285-.32.49-1.13s.728.193.718.179c.28.069.404-.114.453-.235l.645-2.59.076.02.029.007a1 1 0 0 0-.103-.033l.46-1.849c.013-.21-.06-.474-.46-.574.016-.01-.717-.178-.717-.178l.263-1.055 1.362.34-.001.005q.308.076.63.148l.405-1.622.987.247-.396 1.59q.4.09.79.186l.395-1.58.987.246zm-3.124 5.882c.806.213 2.567.678 2.847-.447.287-1.15-1.421-1.534-2.255-1.72q-.14-.032-.242-.057l-.543 2.174q.084.02.193.05m.76-3.177c.671.18 2.137.57 2.392-.452.261-1.046-1.163-1.361-1.859-1.515l-.204-.047L8.46 8.11z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bitcoin_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgBitcoin)
const Memo = memo(ForwardRef)
export default Memo
