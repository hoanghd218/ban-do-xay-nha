import Link from "next/link";
import { Facebook, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Bản Đồ Xây Nhà</h3>
            <p className="text-sm mb-4">
              Đồng hành cùng bạn trong hành trình xây dựng ngôi nhà mơ ước với kiến thức, công nghệ và hệ sinh thái toàn diện.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bandoxaynha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@BanDoXayNha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.tiktok.com/@bandoxaynha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.8-2.4 2.4 2.4 0 0 1 3.82 2.4V8.56a8.05 8.05 0 0 0-5.02 7.9v4.5a4.83 4.83 0 0 0 4.83 4.83 4.83 4.83 0 0 0 4.83-4.83V10.5a6.72 6.72 0 0 0 3.8-6.81z"/>
                </svg>
              </a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </a>
              <a href="https://www.skool.com/ban-o-xay-nha-9953/about?ref=22235d29035345b79b919f7f380df96c" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8H4V6h16m0 10H4v-2h16m0 6H4v-2h16M2 4v16h20V4H2z"/>
                </svg>
              </a>
              <a href="mailto:contact@bandoxaynha.com" className="hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-blue-400 transition-colors">
                  Tư vấn
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#free" className="hover:text-blue-400 transition-colors">
                  Workshop miễn phí
                </Link>
              </li>
              <li>
                <Link href="/services#courses" className="hover:text-blue-400 transition-colors">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link href="/services#coaching" className="hover:text-blue-400 transition-colors">
                  Group Coaching
                </Link>
              </li>
              <li>
                <Link href="/services#membership" className="hover:text-blue-400 transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>0988302984 (Mr. Phương)</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@bandoxaynha.com" className="hover:text-blue-400 transition-colors">
                  contact@bandoxaynha.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 Bản Đồ Xây Nhà. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


