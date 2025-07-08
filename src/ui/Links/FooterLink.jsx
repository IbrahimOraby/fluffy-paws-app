
function FooterLink({ text = "Footer Link" }) {
  return (
    <a
      href="#"
      className="text-gray-400 font-normal p-0 min-h-[3rem] min-w-[3rem] hover:text-[#BE5985]"
    >
      {text}
    </a>
  )
}

export default FooterLink