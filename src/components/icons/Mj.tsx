import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMj = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" ref={ref} {...props}>
    <rect width={32} height={32} fill="url(#mj_svg__a)" rx={6} />
    <g fill="#fff" fillRule="evenodd" clipPath="url(#mj_svg__b)" clipRule="evenodd">
      <path d="M5.33 24.345c-.161.025-.275.068-.327.224l-.001-.002v.155c.07.176.194.271.35.239l.017-.004c.168-.034.34-.07.49-.157l.16-.092c.24-.138.479-.275.7-.442a7 7 0 0 1 .965-.604c.172-.09.334-.099.502.011.209.137.405.29.6.442l.237.183c.34.258.697.485 1.12.603.475.133.93.083 1.37-.119.3-.137.569-.326.824-.532.2-.16.42-.29.642-.418l.012-.006a.7.7 0 0 1 .314-.084c.28-.023.512.079.727.238q.174.129.343.264.209.167.424.323c.373.266.771.449 1.25.401.05-.005.101-.002.153 0 .085.003.17.007.252-.022.256-.09.509-.185.724-.36q.126-.101.256-.198.12-.09.237-.182c.187-.15.378-.295.602-.388.278-.116.56-.113.835.008.243.108.447.275.65.44l.055.045c.413.336.827.66 1.406.67.432.008.84-.027 1.211-.279.177-.12.346-.25.515-.38q.203-.157.41-.307c.548-.388 1.02-.357 1.49-.025.192.136.37.29.546.445l.09.08c.363.314.762.52 1.264.468.162.03.213-.077.251-.2v-.154a.54.54 0 0 0-.312-.188c-.436-.078-.76-.335-1.073-.62-.334-.303-.7-.554-1.162-.652-.405-.086-.778-.003-1.135.163-.335.157-.622.39-.9.63-.314.272-.665.452-1.099.42l-.045-.002c-.12-.008-.241-.016-.358-.048-.101-.027-.142-.114-.15-.198-.009-.091.093-.111.156-.114.079-.004.135-.043.191-.081a1 1 0 0 1 .083-.051 30 30 0 0 0 1.772-.953c.66-.383 1.285-.815 1.894-1.27q.101-.076.207-.149c.193-.135.387-.27.543-.45.167-.193.165-.262-.027-.429a.27.27 0 0 0-.203-.06l-.11.004a3 3 0 0 0-.328.022c-.566.077-1.137.101-1.707.125-.531.023-1.063.045-1.591.11-.322.04-.648.047-.973.054l-.109.002c-.29.006-.577.031-.866.056a18 18 0 0 1-1.08.066c-.322.012-.644.025-.965.055-.634.06-1.268.095-1.903.13q-.575.03-1.149.07a89 89 0 0 1-1.894.117c-.244.012-.488.033-.731.054-.277.023-.555.047-.833.058q-.048 0-.095.003c-.428.016-.856.031-1.284.073q-.795.075-1.596.105l-.114.005c-.437.016-.874.033-1.307.11-.225.04-.317.21-.199.402q.06.1.11.205c.041.081.082.162.132.239.07.105.124.222.178.338l.053.112c.059.122.043.217-.086.3a29 29 0 0 0-.68.45l-.262.178-.035.024c-.194.13-.392.264-.625.3m2.61-1.376h.04c.282.05.559.184.81.372q.166.126.328.257c.22.175.44.35.68.497.493.303 1.009.395 1.543.096q.334-.186.631-.424c.287-.228.58-.436.944-.548.56-.17 1.043-.035 1.498.281.165.116.323.243.479.371.365.302.741.56 1.263.487.178-.026.34-.05.496-.154.163-.108.314-.231.466-.355.23-.187.459-.375.728-.506.296-.144.613-.235.948-.201.424.041.805.205 1.128.473.163.135.304.117.47.034q.136-.068.275-.132l.24-.115.161-.08c.192-.094.384-.188.571-.29l.086-.047c.4-.22.802-.439 1.191-.677.464-.284.914-.586 1.34-.922l.016-.013c.044-.032.094-.07.06-.137-.027-.054-.075-.045-.121-.036l-.033.006q-.135.015-.27.034a8 8 0 0 1-.506.057c-.294.021-.588.033-.882.045-.427.017-.854.035-1.28.08-.399.041-.8.057-1.2.073-.436.017-.87.034-1.304.085-.346.04-.695.05-1.043.062q-.253.006-.507.02c-.224.01-.447.035-.67.06-.302.032-.604.065-.908.066-.558.002-1.112.046-1.667.09-.425.033-.85.067-1.276.082-.393.013-.786.041-1.18.07q-.31.022-.62.042-.537.032-1.073.061l-.384.021c-.198.011-.395.03-.593.047-.349.032-.698.064-1.05.058a2 2 0 0 0-.303.023l-.056.007c-.083.01-.162.064-.102.139.052.065.087.136.121.208q.03.064.065.125c.095.162.197.309.425.21q.006-.004.026-.003M9.993 7.807c-.536-.3-1.084-.58-1.66-.804h-.126c-.185.168-.208.286-.094.51q.122.236.248.471c.169.316.338.631.482.959q.067.148.14.294c.083.168.166.336.227.511q.074.213.153.424c.088.237.176.475.25.717l.052.173c.082.268.164.536.231.809.13.527.228 1.06.268 1.6.076 1.008-.028 2.003-.226 2.993q-.115.572-.294 1.124-.22.692-.563 1.337c-.241.452-.503.89-.846 1.277l-.086.089a.9.9 0 0 0-.167.203c-.083.153-.034.346.106.37a.58.58 0 0 0 .397-.054 11 11 0 0 1 1.594-.785c.433-.169.867-.325 1.318-.44.693-.175 1.389-.298 2.112-.297.99.002 1.97.03 2.94.253l.026.006c.355.081.71.164 1.057.269l.253.074c.302.087.605.174.886.322.086.045.19.047.291.043.181-.007.244-.066.242-.243-.003-.598-.18-1.162-.357-1.722l-.049-.158q-.23-.734-.557-1.437l-.046-.1c-.132-.284-.263-.568-.41-.846-.21-.398-.423-.793-.663-1.175a21 21 0 0 0-.95-1.404 19 19 0 0 0-3.28-3.397c-.534-.433-1.096-.827-1.657-1.22l-.134-.094a10 10 0 0 0-.881-.527zm1.99 11.067c.63-.122 1.27-.206 1.855-.156.913-.033 1.746.091 2.578.252.357.07.709.16 1.06.25l.193.05c.11.028.215.063.322.097.115.038.23.076.348.104.192.047.248-.005.196-.193a23 23 0 0 0-.395-1.302 14 14 0 0 0-.73-1.714 20 20 0 0 0-.926-1.622 16.4 16.4 0 0 0-1.624-2.176c-.787-.888-1.634-1.716-2.58-2.445-.59-.455-1.195-.89-1.826-1.286a18 18 0 0 0-.81-.469q-.228-.127-.454-.256c-.07-.041-.095-.016-.11.045-.013.052.01.095.036.14v.002c.16.286.296.582.421.883q.218.522.428 1.047.089.226.168.456l.016.045c.055.156.095.317.136.479q.043.173.093.343c.236.78.338 1.58.373 2.389.016.35-.01.7-.034 1.051l-.02.285c-.048.781-.203 1.54-.415 2.29a8 8 0 0 1-.43 1.176l-.074.168a3.7 3.7 0 0 1-.326.621l-.021.028c-.032.04-.065.08-.026.134.053.072.128.055.198.024.209-.093.423-.171.637-.25l.256-.095c.484-.183.985-.297 1.488-.395" />
      <path d="m21.254 19.745.116-.004c.608 0 1.266.168 1.725.425.213.121.37.05.428-.188a.45.45 0 0 0-.02-.272 12 12 0 0 1-.12-.319c-.069-.185-.136-.37-.22-.547a21 21 0 0 1-.212-.475c-.112-.256-.224-.512-.353-.762l-.21-.412c-.198-.388-.395-.776-.615-1.152a17 17 0 0 0-1.135-1.716 15 15 0 0 0-.91-1.095c-.723-.785-1.48-1.537-2.315-2.21l-.12-.096c-.346-.28-.691-.559-1.072-.797l-.169-.106a9 9 0 0 0-.583-.35 6 6 0 0 0-.853-.368 1.25 1.25 0 0 0-.473-.079c-.18.01-.26.101-.252.28.009.166.13.245.25.323l.018.011c.58.38 1.107.824 1.604 1.3.515.494.99 1.024 1.393 1.615.217.316.431.633.632.959.179.29.343.59.502.892l.226.432.248.474c.096.183.182.37.268.557l.112.243v.001c.133.281.266.564.372.855q.093.256.19.511c.124.326.247.651.352.984l.09.28q.091.29.18.58c.066.212.18.305.407.267.181-.03.364-.036.52-.041m1.31-.398c.085.024.144.025.151-.087l-.003-.012q-.006-.019-.014-.041a20 20 0 0 0-.563-1.253c-.157-.324-.314-.649-.492-.964a27 27 0 0 1-.225-.408c-.16-.294-.32-.589-.503-.869-.54-.829-1.126-1.623-1.83-2.333a47 47 0 0 0-2.104-2.004l-.03-.03c-.04-.043-.088-.093-.133-.053-.05.046-.003.086.04.123q.02.015.033.03.008.008.012.021.004.01.01.018.168.232.35.454c.187.232.373.464.528.719q.136.22.279.436c.104.16.21.319.306.482.194.324.373.655.552.987l.022.04q.198.362.375.733.098.21.19.423c.066.151.131.302.203.45q.236.497.427 1.01a98 98 0 0 1 .37 1.003q.048.135.092.273c.047.145.094.291.155.432l.026.061c.068.163.072.172.299.174h.316l.422.001c.186.003.358.06.53.118q.104.035.209.066" />
    </g>
    <defs>
      <linearGradient id="mj_svg__a" x1={16} x2={16} y1={0} y2={32} gradientUnits="userSpaceOnUse">
        <stop stopColor="#1054A3" />
        <stop offset={1} stopColor="#03315A" />
      </linearGradient>
      <clipPath id="mj_svg__b">
        <path fill="#fff" d="M5 7h22v18H5z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMj)
const Memo = memo(ForwardRef)
export default Memo
