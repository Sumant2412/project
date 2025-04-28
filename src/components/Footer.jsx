import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-primary/10 mt-24 text-gray-800 font-sans">
      {/* Main Footer Content */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-gray-300/30">
        
        {/* Left Side: Logo on top, then text below */}
        <div className="flex flex-col items-start gap-4">
          <img className="w-32" src={assets.logo} alt="Logo" />
          <p className="text-lg md:text-xl max-w-xs leading-relaxed">
            Fresh groceries and essentials at your doorstep. Fast, easy, and trusted by thousands.
          </p>
        </div>

        {/* Right Side: Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-10">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col min-w-[120px]">
              <h3 className="text-gray-900 font-semibold mb-2 text-sm md:text-base">{section.title}</h3>
              <ul className="space-y-1 text-xs md:text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-indigo-600 transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="py-4 text-center text-xs text-gray-500 md:text-sm">
        © {new Date().getFullYear()} Sumanthatti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
