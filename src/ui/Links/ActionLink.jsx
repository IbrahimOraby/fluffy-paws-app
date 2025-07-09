function ActionLink({ text = "Link" }) {
  return (
    <a
      href="#"
      className="text-[#BE5985] font-normal p-0 min-h-[3rem] min-w-[3rem] hover:text-[#dfa4ba]"
    >
      {text}
    </a>
  );
}

export default ActionLink;
