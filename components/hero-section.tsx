import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroCarousel } from "./hero-carousel";

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-[#0066CC] via-[#0052A3] to-[#003d7a] text-white py-16 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B050] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 w-full text-center items-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-merriweather leading-tight">
              Bản Đồ Xây Nhà
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-lg">
              Hành trình xây nhà <span className="font-semibold">thông minh, minh bạch và hạnh phúc</span> cho mọi gia đình Việt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066CC] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-strong"
              >
                Khám phá dịch vụ
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/services#free"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFCC00] text-[#0066CC] font-semibold rounded-lg hover:bg-[#FFD700] transition-all duration-300 hover:shadow-strong"
              >
                Workshop miễn phí
              </Link>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative  lg:block">
            <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-[#00B050] to-[#FFCC00] opacity-20 blur-2xl"></div>
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

