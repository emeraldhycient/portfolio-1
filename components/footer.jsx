import React from "react";

function Footer() {
  const d = new Date();

  return (
    <section className="bg-gray-200 h-10 mt-8">
      <div className="w-full h-10 flex justify-center items-center">
        <p>made with ❤️ Igweze hycient © {d.getFullYear()} </p>
      </div>
    </section>
  );
}

export default Footer;
