import Link from "next/link";
import { Video, BookOpen, FileText, ClipboardCheck, Calendar, Users, Crown, Gift } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  cta?: string;
  ctaLink?: string;
  price?: string;
}

function ServiceCard({ title, description, icon, badge, cta, ctaLink, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
      {badge && (
        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {price && (
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
      )}
      {cta && ctaLink && (
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Chọn gói dịch vụ phù hợp với nhu cầu của bạn
            </p>
          </div>
        </div>
      </section>

      {/* Free Offers Section */}
      <section id="free" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-full mb-4">
              <Gift className="w-5 h-5 mr-2" />
              <span className="font-semibold">MIỄN PHÍ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Workshop & Zoom Sessions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bắt đầu hành trình của bạn với các buổi workshop miễn phí
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title='Workshop "Bản Đồ Xây Nhà qua Zoom"'
              description="Workshop hàng tuần chia sẻ kiến thức về tầm quan trọng và phương pháp xây dựng Bản Đồ Xây Nhà. Học cách tạo bản nháp đầu tiên của bản đồ bằng framework độc quyền."
              icon={<Video className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 1"
              cta="Đăng ký Zoom miễn phí"
              ctaLink="#zoom"
            />
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Calendar className="text-green-600 mr-2" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Lịch Zoom hàng tuần</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Thứ 3, 8/11/2024 - 20:00</p>
                  <p className="text-sm text-gray-600">Giới thiệu Bản Đồ Xây Nhà</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Thứ 5, 10/11/2024 - 20:00</p>
                  <p className="text-sm text-gray-600">Giai đoạn Ý tưởng & Thiết kế</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">Thứ 7, 12/11/2024 - 10:00</p>
                  <p className="text-sm text-gray-600">Quản lý Thi công & Giám sát</p>
                </div>
              </div>
              <Link
                href="#zoom"
                className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Xem lịch đầy đủ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Entry Offers */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm & Khóa học
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Các công cụ và kiến thức chuyên sâu cho từng giai đoạn xây nhà
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title='Sách "Bản Đồ Xây Nhà"'
              description="Phiên bản sách in của hướng dẫn toàn diện về Bản Đồ Xây Nhà. Kiến thức từ A-Z cho chủ nhà."
              icon={<BookOpen className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.1"
              price="299,000đ"
              cta="Đặt mua ngay"
              ctaLink="#book"
            />

            <ServiceCard
              title="Khóa Mini Course Online"
              description="Khóa học online với video và templates giúp bạn tự xây dựng Bản Đồ Xây Nhà của riêng mình."
              icon={<Video className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.3"
              price="1,999,000đ"
              cta="Đăng ký ngay"
              ctaLink="#course"
            />

            <ServiceCard
              title="Khóa OFFLINE 2 DAY"
              description="Ngày 1: Học cách tạo bản đồ. Ngày 2: Tham quan thực tế công trình xây dựng."
              icon={<Users className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.4"
              price="4,999,000đ"
              cta="Đăng ký workshop"
              ctaLink="#offline"
            />

            <ServiceCard
              title="Bộ Bản Đồ Ý Tưởng & Thiết Kế"
              description="Sách in và mini app hỗ trợ chủ nhà trong giai đoạn lên ý tưởng và thiết kế."
              icon={<FileText className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.5"
              price="499,000đ"
              cta="Mua ngay"
              ctaLink="#idea"
            />

            <ServiceCard
              title="Bộ Hợp Đồng Thi Công"
              description="Tài liệu soft copy cho chủ nhà sử dụng khi đàm phán và ký hợp đồng với nhà thầu."
              icon={<FileText className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.6"
              price="399,000đ"
              cta="Tải về ngay"
              ctaLink="#contract"
            />

            <ServiceCard
              title="Sổ Tay Giám Sát Xây Nhà"
              description="Sách in và mini app giúp chủ nhà giám sát và theo dõi tiến độ công trình."
              icon={<ClipboardCheck className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.7"
              price="599,000đ"
              cta="Đặt mua"
              ctaLink="#monitor"
            />

            <ServiceCard
              title="Sổ Tay Nhật Ký Công Trình"
              description="Sách in và mini app để chủ nhà ghi chép nhật ký công trình xây dựng."
              icon={<BookOpen className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.8"
              price="299,000đ"
              cta="Mua ngay"
              ctaLink="#diary"
            />

            <ServiceCard
              title="Bộ Biên Bản Nghiệm Thu"
              description="Tài liệu soft copy cho chủ nhà sử dụng trong giai đoạn nghiệm thu và bảo hành."
              icon={<FileText className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.9"
              price="399,000đ"
              cta="Tải về"
              ctaLink="#acceptance"
            />

            <ServiceCard
              title="Bộ Hồ Sơ Hoàn Công"
              description="Tài liệu soft copy cho quá trình hoàn công và bàn giao dự án."
              icon={<FileText className="text-blue-600" size={24} />}
              badge="ENTRY OFFER 2.10"
              price="499,000đ"
              cta="Tải về"
              ctaLink="#completion"
            />
          </div>
        </div>
      </section>

      {/* Core Offer */}
      <section id="coaching" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-full mb-4">
              <Crown className="w-5 h-5 mr-2" />
              <span className="font-semibold">CORE OFFER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Group Coaching Program
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Bản Đồ Xây Nhà 7 Day Challenge
                </h3>
                <p className="text-xl text-gray-600">
                  Chương trình coaching 7 ngày giúp bạn xây dựng Bản Đồ Xây Nhà hoàn chỉnh
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Bạn sẽ nhận được:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      7 buổi coaching trực tuyến với chuyên gia
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Bản đồ xây nhà hoàn chỉnh cho riêng bạn
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Templates và công cụ quản lý dự án
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Hỗ trợ 1-1 từ mentor
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Phù hợp với:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      Chủ nhà chuẩn bị xây nhà mới
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      Người đang trong quá trình xây dựng
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      Người muốn nâng cấp/sửa chữa nhà
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      Người muốn học kiến thức xây dựng
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-6">
                  9,999,000đ
                </p>
                <Link
                  href="#coaching-form"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-lg"
                >
                  Đăng ký ngay
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  Chỉ còn 5 suất cho khóa tháng 11
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuity Offer */}
      <section id="membership" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-full mb-4">
              <Crown className="w-5 h-5 mr-2" />
              <span className="font-semibold">CONTINUITY OFFER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Membership
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Cộng Đồng Bản Đồ Xây Nhà
                </h3>
                <p className="text-xl text-gray-600">
                  Membership cộng đồng với hỗ trợ liên tục và cập nhật kiến thức mới nhất
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Quyền lợi thành viên:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4 flex items-start">
                    <span className="text-orange-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Truy cập group kín độc quyền</span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex items-start">
                    <span className="text-orange-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Cập nhật xu hướng mới hàng tháng</span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex items-start">
                    <span className="text-orange-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Case study từ dự án thực tế</span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex items-start">
                    <span className="text-orange-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Live Q&A với chuyên gia hàng tuần</span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex items-start">
                    <span className="text-orange-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Tư vấn ưu tiên khi cần</span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex items-start">
                    <span className="text-orange-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Kết nối với cộng đồng chủ nhà</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600 mb-2">
                  299,000đ<span className="text-xl text-gray-600">/tháng</span>
                </p>
                <p className="text-gray-600 mb-6">Hoặc 2,999,000đ/năm (tiết kiệm 20%)</p>
                <Link
                  href="#membership-form"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all text-lg"
                >
                  Tham gia cộng đồng
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  7 ngày dùng thử miễn phí • Hủy bất cứ lúc nào
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Cần tư vấn để chọn gói phù hợp?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
}

