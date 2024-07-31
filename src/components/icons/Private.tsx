import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPrivate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M2 11.928c0-.801.351-1.57.976-2.137a3.52 3.52 0 0 1 2.357-.885h13.334c.884 0 1.732.319 2.357.885S22 11.127 22 11.928v7.05c0 .802-.351 1.57-.976 2.137a3.52 3.52 0 0 1-2.357.885H5.333a3.52 3.52 0 0 1-2.357-.885C2.351 20.548 2 19.78 2 18.978zm11.111 2.014a.96.96 0 0 0-.325-.712 1.17 1.17 0 0 0-.786-.295c-.295 0-.577.106-.786.295a.96.96 0 0 0-.325.712v3.022c0 .267.117.523.325.712.209.19.491.295.786.295s.577-.106.786-.295a.96.96 0 0 0 .325-.712z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M12 3.727c-.926 0-1.814.333-2.47.927-.654.593-1.022 1.399-1.022 2.238v3.022c0 .476-.426.863-.952.863s-.953-.386-.953-.863V6.892c0-1.297.569-2.542 1.58-3.46C9.197 2.516 10.57 2 12 2s2.804.515 3.816 1.433c1.012.917 1.58 2.162 1.58 3.46v3.02c0 .477-.426.864-.951.864-.527 0-.953-.386-.953-.863V6.892c0-.84-.368-1.645-1.023-2.238-.655-.594-1.543-.927-2.469-.927"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPrivate)
const Memo = memo(ForwardRef)
export default Memo
