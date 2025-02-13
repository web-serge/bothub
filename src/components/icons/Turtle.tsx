import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTurtle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M7.124 3c-2.473 0-4.04 1.642-4.643 3.503l-.08.25H.666a.7.7 0 0 0-.47.183.6.6 0 0 0-.196.44c0 .855.253 1.658.696 2.263.156.212.34.408.553.571l-.399.905a1.29 1.29 0 0 0 .138 1.279c.133.186.313.339.524.444.212.106.447.16.687.16h1.43c.565 0 1.08-.304 1.32-.783l.404-.804a15.3 15.3 0 0 0 3.66 0l.404.804c.24.48.755.785 1.319.785h1.417c.24 0 .476-.055.688-.16s.392-.258.525-.445a1.286 1.286 0 0 0 .135-1.281l-.269-.612h1.286c.822 0 1.482-.654 1.482-1.412v-.774c0-1.173-.978-2.183-2.252-2.183h-1.951C11.085 4.405 9.407 3 7.124 3m5.656 6.255-.577-1.874h1.545a.93.93 0 0 1 .92.936v.773a.17.17 0 0 1-.055.121.14.14 0 0 1-.095.044zm-.873 1.514.361.82a.11.11 0 0 1-.011.11.1.1 0 0 1-.045.039.13.13 0 0 1-.06.013h-1.415a.13.13 0 0 1-.068-.018.12.12 0 0 1-.046-.049l-.252-.5a16 16 0 0 0 1.536-.415m-7.912.415-.253.5a.12.12 0 0 1-.046.05.13.13 0 0 1-.067.019h-1.43a.13.13 0 0 1-.06-.014.1.1 0 0 1-.044-.039.11.11 0 0 1-.012-.11l.362-.823q.766.249 1.55.417M1.998 8l-.27.836A2.5 2.5 0 0 1 1.395 8zm1.759-1.136c.489-1.51 1.656-2.617 3.367-2.617 1.738 0 3.052 1.135 3.532 2.614l.84 2.72c-2.79.92-5.83.92-8.619.004z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTurtle)
const Memo = memo(ForwardRef)
export default Memo
