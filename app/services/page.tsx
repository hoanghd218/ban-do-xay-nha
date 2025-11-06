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
    <div className="bg-white rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border">
      {badge && (
        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <div className="w-14 h-14 bg-light-gray rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">{title}</h3>
      <p className="text-foreground mb-6 leading-relaxed">{description}</p>
      {price && (
        <p className="text-2xl font-bold text-primary mb-6">{price}</p>
      )}
      {cta && ctaLink && (
        <Link
          href={ctaLink}
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-[#0052A3] transition-all duration-300 shadow-subtle hover:shadow-medium"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0066CC] via-[#0052A3] to-[#003d7a] text-white section-padding overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B050] rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="container-wide relative text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-merriweather leading-tight">
            Dịch vụ của chúng tôi
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Chọn gói dịch vụ phù hợp với nhu cầu của bạn
          </p>
        </div>
      </section>

      {/* Free Offers Section */}
      <section id="free" className="section-padding bg-linear-to-b from-[#00B050]/10 to-[#0066CC]/10">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-secondary text-white rounded-full mb-4">
              <Gift className="w-5 h-5 mr-2" />
              <span className="font-semibold">MIỄN PHÍ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-merriweather">
              Workshop & Zoom Sessions
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
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
            <div className="bg-white rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border">
              <div className="flex items-center mb-6">
                <Calendar className="text-secondary mr-2" size={24} />
                <h3 className="text-xl font-bold text-foreground font-merriweather">Lịch Zoom hàng tuần</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Thứ 3, 8/11/2024 - 20:00</p>
                  <p className="text-sm text-foreground">Giới thiệu Bản Đồ Xây Nhà</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Thứ 5, 10/11/2024 - 20:00</p>
                  <p className="text-sm text-foreground">Giai đoạn Ý tưởng & Thiết kế</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="font-semibold text-foreground">Thứ 7, 12/11/2024 - 10:00</p>
                  <p className="text-sm text-foreground">Quản lý Thi công & Giám sát</p>
                </div>
              </div>
              <Link
                href="#zoom"
                className="mt-4 inline-flex items-center justify-center w-full px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-[#008b3d] transition-all duration-300 shadow-subtle hover:shadow-medium"
              >
                Xem lịch đầy đủ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Entry Offers */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-merriweather">
              Sản phẩm & Khóa học
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
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
      <section id="coaching" className="py-16 bg-linear-to-b from-purple-50 to-pink-50">
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
                  className="inline-flex items-center justify-center px-10 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-lg"
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
      <section id="membership" className="py-16 bg-linear-to-b from-yellow-50 to-orange-50">
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
                  1,000,000đ<span className="text-xl text-gray-600">/tháng</span>
                </p>
                <p className="text-gray-600 mb-6">Hoặc 10,000,000đ/năm (tiết kiệm 20%)</p>
                <Link
                  href="#membership-form"
                  className="inline-flex items-center justify-center px-10 py-4 bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all text-lg"
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

      {/* Premium 1-1 Coaching */}
      <section id="premium-coaching" className="py-16 bg-linear-to-b from-red-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-full mb-4">
              <Crown className="w-5 h-5 mr-2" />
              <span className="font-semibold">PREMIUM OFFER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Chương Trình Coaching 1-1
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Dịch Vụ Tư Vấn Bản Đồ Xây Nhà Trọn Gói
                </h3>
                <p className="text-xl text-gray-600">
                  Chương trình tư vấn đồng hành chuyên sâu 1-1, cá nhân hóa cùng chủ nhà
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Bạn sẽ nhận được:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      Coaching 1-1 riêng với chuyên gia
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      Tư vấn cá nhân hóa dựa trên tình huống cụ thể
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      Bản đồ xây nhà chi tiết cho dự án của bạn
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      Hỗ trợ liên tục suốt quá trình xây dựng
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      Giải đáp mọi thắc mắc trong quá trình thực hiện
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      Tránh những sai lầm phổ biến khi xây dựng
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Phù hợp với:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Chủ nhà dự án lớn, phức tạp
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Người muốn tư vấn chi tiết từng bước
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Dự án cần giám sát toàn bộ quy trình
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2">•</span>
                      Tìm kiếm mentor chuyên nghiệp tin cậy
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-red-600 mb-2">
                  Liên hệ tư vấn
                </p>
                <p className="text-gray-600 mb-6">Giá được tùy chỉnh theo nhu cầu dự án</p>
                <Link
                  href="#consulting"
                  className="inline-flex items-center justify-center px-10 py-4 bg-linear-to-r from-red-600 to-rose-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-rose-700 transition-all text-lg"
                >
                  Yêu cầu tư vấn
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  Tư vấn miễn phí 30 phút để đánh giá nhu cầu của bạn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-linear-to-br from-[#0066CC] via-[#0052A3] to-[#003d7a] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B050] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-wide relative text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold font-merriweather leading-tight">
              Cần tư vấn để chọn gói phù hợp?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn
            </p>
            <div>
              <Link
                href="/consulting"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-strong"
              >
                Nhận tư vấn miễn phí
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


