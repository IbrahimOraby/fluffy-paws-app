import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-100 border-t border-base-300 p-4 min-h-[4rem]">
      <Paragraph className="text-paragraph-sm text-paragraph-color">
        Copyright © {new Date().getFullYear()} - Fluffy Paws
      </Paragraph>
    </footer>
  );
}

export default Footer;
