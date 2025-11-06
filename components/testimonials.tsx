"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    location: "Hà Nội",
    service: "CORE OFFER",
    quote: "Chương trình 7 Day Challenge đã giúp tôi hiểu rõ từng bước xây nhà. Giờ đây tôi tự tin hơn rất nhiều khi trao đổi với nhà thầu.",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Thị B",
    location: "TP. Hồ Chí Minh",
    service: "ENTRY OFFER 2.3",
    quote: "Khóa học online rất chi tiết và dễ hiểu. Các template rất hữu ích, giúp tôi tiết kiệm được rất nhiều thời gian.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Minh C",
    location: "Đà Nẵng",
    service: "ENTRY OFFER 2.7",
    quote: "Sổ tay giám sát là cứu cánh của tôi. Nó giúp tôi theo dõi tiến độ công trình một cách chuyên nghiệp, không bỏ sót chi tiết nào.",
    rating: 5,
  },
  {
    id: 4,
    name: "Phạm Thị D",
    location: "Cần Thơ",
    service: "ENTRY OFFER 2.4",
    quote: "Workshop offline 2 ngày thực sự tuyệt vời! Được tham quan công trình thực tế giúp tôi học hỏi rất nhiều kinh nghiệm quý báu.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    location: "Hải Phòng",
    service: "CONTINUITY OFFER",
    quote: "Cộng đồng Bản Đồ Xây Nhà rất nhiệt tình. Tôi luôn nhận được sự hỗ trợ kịp thời từ các chuyên gia và các thành viên khác.",
    rating: 5,
  },
  {
    id: 6,
    name: "Võ Thị F",
    location: "Nha Trang",
    service: "ENTRY OFFER 2.1",
    quote: "Cuốn sách Bản Đồ Xây Nhà là kim chỉ nam cho hành trình xây nhà của gia đình tôi. Nội dung rất thực tế và dễ áp dụng.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<string>("all");

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.service === filter);

  const services = ["all", ...Array.from(new Set(testimonials.map(t => t.service)))];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-lg text-gray-600">
            Hàng trăm gia đình đã xây dựng ngôi nhà mơ ước với sự hỗ trợ của Bản Đồ Xây Nhà
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setFilter(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === service
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {service === "all" ? "Tất cả" : service}
            </button>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-blue-600 mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

