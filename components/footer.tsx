import Link from "next/link";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

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
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
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
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>contact@bandoxaynha.vn</span>
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

