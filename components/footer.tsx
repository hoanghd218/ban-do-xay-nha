import Link from "next/link";
import { Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  Bản Đồ Xây Nhà
                </h2>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Đồng hành cùng bạn trong hành trình xây dựng ngôi nhà mơ ước với kiến thức, công nghệ và hệ sinh thái toàn diện.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-4">
                <a
                  href="https://www.facebook.com/bandoxaynha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@BanDoXayNha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@bandoxaynha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.8-2.4 2.4 2.4 0 0 1 3.82 2.4V8.56a8.05 8.05 0 0 0-5.02 7.9v4.5a4.83 4.83 0 0 0 4.83 4.83 4.83 4.83 0 0 0 4.83-4.83V10.5a6.72 6.72 0 0 0 3.8-6.81z" />
                  </svg>
                </a>
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Zalo"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.skool.com/ban-o-xay-nha-9953/about?ref=22235d29035345b79b919f7f380df96c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Skool"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8H4V6h16m0 10H4v-2h16m0 6H4v-2h16M2 4v16h20V4H2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3"></span>
                  Liên kết
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/", label: "Trang chủ" },
                  { href: "/about", label: "Giới thiệu" },
                  { href: "/services", label: "Dịch vụ" },
                  { href: "/consulting", label: "Tư vấn" },
                  { href: "/blog", label: "Blog" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3"></span>
                  Dịch vụ
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/services#free", label: "Workshop miễn phí" },
                  { href: "/services#courses", label: "Khóa học" },
                  { href: "/services#coaching", label: "Group Coaching" },
                  { href: "/services#membership", label: "Membership" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-3"></span>
                  Liên hệ
                </h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start group cursor-pointer">
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300 mr-3 mt-1 flex-shrink-0">
                    <MapPin size={16} className="text-gray-400 group-hover:text-white" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Hà Nội, Việt Nam</span>
                </li>
                <li className="flex items-center group cursor-pointer">
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300 mr-3 flex-shrink-0">
                    <Phone size={16} className="text-gray-400 group-hover:text-white" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">0988302984</span>
                </li>
                <li className="flex items-center group">
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300 mr-3 flex-shrink-0">
                    <Mail size={16} className="text-gray-400 group-hover:text-white" />
                  </div>
                  <a
                    href="mailto:contact@bandoxaynha.com"
                    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 break-all"
                  >
                    contact@bandoxaynha.com
                  </a>
                </li>
              </ul>
            </div>
          </div>


      
        </div>
      </div>
    </footer>
  );
}


