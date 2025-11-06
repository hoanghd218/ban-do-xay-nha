import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003d7a] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B050] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-wide relative text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold font-merriweather leading-tight">
            Sẵn sàng bắt đầu hành trình xây nhà?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Hãy để chúng tôi đồng hành cùng bạn từ ý tưởng đến hiện thực
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-strong"
            >
              Nhận tư vấn miễn phí
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFCC00] text-[#0066CC] font-semibold rounded-lg hover:bg-[#FFD700] transition-all duration-300 hover:shadow-strong"
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

