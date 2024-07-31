import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgOrganization = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M18.279 7.185H15.2V5.997a.92.92 0 0 0-.921-.921h-4.63a.92.92 0 0 0-.922.921v1.188H5.721c-.824 0-1.479.679-1.479 1.479v.848l6.885 3.2c.049-.46.412-.824.873-.824.46 0 .848.364.873.824l6.885-3.2v-.848c0-.8-.655-1.48-1.48-1.48m-3.564 0H9.212V5.997c0-.242.194-.436.436-.436h4.63c.243 0 .437.194.437.436z"
    />
    <path
      fill="#4785FF"
      d="M12.412 13.827v-1.042a.41.41 0 0 0-.412-.412.395.395 0 0 0-.412.412v1.042c0 .219.17.412.412.412a.41.41 0 0 0 .412-.412"
    />
    <path
      fill="#4785FF"
      d="M12.897 13.827a.895.895 0 0 1-.897.897.88.88 0 0 1-.897-.897v-.582l-6.86-3.2v6.4a1.47 1.47 0 0 0 1.478 1.48H18.28a1.47 1.47 0 0 0 1.479-1.48v-6.4l-6.861 3.2z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgOrganization)
const Memo = memo(ForwardRef)
export default Memo
