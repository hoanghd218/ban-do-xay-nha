import Link from "next/link";
import { ArrowRight, Home, Users, BookOpen, Award, Calendar } from "lucide-react";
import Testimonials from "@/components/testimonials";
import { SocialProofSection } from "@/components/social-proof-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Bản Đồ Xây Nhà
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Hành trình xây nhà thông minh, minh bạch và hạnh phúc cho mọi gia đình Việt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Khám phá dịch vụ
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/services#free"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors border-2 border-white"
              >
                Workshop miễn phí
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tầm nhìn của chúng tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-blue-600">Bản Đồ Xây Nhà</span> hướng tới tạo nên một hành trình xây nhà <span className="font-semibold">thông minh, minh bạch và hạnh phúc</span> cho mọi gia đình Việt Nam. 
              Chúng tôi cung cấp bản đồ kiến thức, công nghệ và hệ sinh thái kết nối chủ nhà - nhà thầu - kiến trúc sư - nhà cung cấp, 
              giúp mỗi ngôi nhà trở thành một hành trình thực hiện ước mơ.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn Bản Đồ Xây Nhà?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kiến thức toàn diện</h3>
              <p className="text-gray-600">
                Hệ thống kiến thức xây dựng từ A-Z, dễ hiểu và thực tế
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chuyên gia đồng hành</h3>
              <p className="text-gray-600">
                Đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm sẵn sàng hỗ trợ
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Công cụ thực tế</h3>
              <p className="text-gray-600">
                Biểu mẫu, template và công cụ giúp bạn quản lý dự án hiệu quả
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cộng đồng hỗ trợ</h3>
              <p className="text-gray-600">
                Kết nối với hàng trăm chủ nhà cùng chia sẻ kinh nghiệm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Workshop CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Workshop Miễn Phí Qua Zoom
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Tham gia workshop hàng tuần để học cách xây dựng Bản Đồ Xây Nhà cho riêng bạn. 
              Hoàn toàn miễn phí!
            </p>
            <Link
              href="/services#free"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Đăng ký ngay
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Carousel */}
      <SocialProofSection />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu hành trình xây nhà?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn từ ý tưởng đến hiện thực
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Nhận tư vấn miễn phí
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
