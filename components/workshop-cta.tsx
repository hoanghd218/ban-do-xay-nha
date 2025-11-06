import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function WorkshopCTA() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-[#00B050] via-[#009940] to-[#006b30] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFCC00] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-wide relative">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Calendar className="w-16 h-16 text-yellow-300" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-merriweather leading-tight">
            Workshop Miễn Phí Qua Zoom
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Tham gia workshop hàng tuần để học cách xây dựng <span className="font-semibold">Bản Đồ Xây Nhà</span> cho riêng bạn. Hoàn toàn miễn phí!
          </p>
          <div className="pt-4">
            <Link
              href="/services#free"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#00B050] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-strong"
            >
              Đăng ký ngay
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

