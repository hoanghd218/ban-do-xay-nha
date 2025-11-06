"use client";

import { Star, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import contract photos
import contractPhoto1 from "@/public/ảnh ký hợp đồng/1.png";
import contractPhoto2 from "@/public/ảnh ký hợp đồng/2.png";
import contractPhoto3 from "@/public/ảnh ký hợp đồng/3.png";
import contractPhoto4 from "@/public/ảnh ký hợp đồng/4.png";
import contractPhoto5 from "@/public/ảnh ký hợp đồng/5.png";
import contractPhoto6 from "@/public/ảnh ký hợp đồng/6.png";
import contractPhoto7 from "@/public/ảnh ký hợp đồng/7.png";
import contractPhoto8 from "@/public/ảnh ký hợp đồng/8.png";
import contractPhoto9 from "@/public/ảnh ký hợp đồng/9.png";
import contractPhoto10 from "@/public/ảnh ký hợp đồng/10.png";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  project: string;
  image: any;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Trước khi gặp đội ngũ Bản Đồ Xây Nhà, tôi cứ nghĩ xây nhà chỉ cần chọn thầu tốt. Đọc bản đồ này xong mới thấy, xây đúng từ đầu mới là bí quyết tiết kiệm thật sự!",
    author: "Anh Hòa",
    location: "Bắc Giang",
    project: "Biệt thự 2 tầng",
    image: contractPhoto1,
  },
  {
    quote:
      "Nhờ 7 bước này mà tôi tránh được phát sinh gần 300 triệu. Nếu ai chuẩn bị xây nhà, nhất định phải đọc!",
    author: "Anh Trang",
    location: "Quảng Ninh",
    project: "Nhà phố 3 tầng",
    image: contractPhoto2,
  },
  {
    quote:
      "Ebook này như một người bạn đồng hành đáng tin cậy. Mỗi bước đều có hướng dẫn cụ thể, giúp tôi tự tin hơn rất nhiều khi làm việc với KTS.",
    author: "Anh Minh",
    location: "Đồng Nai",
    project: "Nhà vườn 1 tầng",
    image: contractPhoto3,
  },
  {
    quote:
      "Tôi đã đọc nhiều tài liệu về xây nhà nhưng chưa tài liệu nào rõ ràng và thực tế như bản đồ này. Đặc biệt là phần checklist, vô cùng hữu ích!",
    author: "Anh Sơn",
    location: "Hải Phòng",
    project: "Biệt thự 2 tầng",
    image: contractPhoto4,
  },
  {
    quote:
      "Nhờ có bản đồ 7 bước mà tôi biết cách kiểm soát ngân sách từ đầu. Không bị thầu 'chặt chém' phát sinh như nhiều người khác!",
    author: "Anh Tuấn",
    location: "Đà Nẵng",
    project: "Villa cao cấp",
    image: contractPhoto5,
  },
  {
    quote:
      "Ebook viết rất dễ hiểu, phù hợp với người không chuyên như tôi. Giờ tôi biết mình cần chuẩn bị gì trước khi bắt đầu xây.",
    author: "Anh Mạnh",
    location: "Nghệ An",
    project: "Nhà cấp 4 nông thôn",
    image: contractPhoto6,
  },
  {
    quote:
      "Nếu biết sớm hơn, tôi đã tiết kiệm được ít nhất 200 triệu! May mắn vẫn kịp áp dụng cho giai đoạn hoàn thiện.",
    author: "Anh Đức",
    location: "Bình Dương",
    project: "Nhà phố 2 tầng",
    image: contractPhoto7,
  },
  {
    quote:
      "Bản đồ này không chỉ giúp xây nhà đúng kỹ thuật mà còn giúp tôi hiểu rõ quyền lợi của mình. Rất đáng để đọc!",
    author: "Anh Khánh",
    location: "Hà Nội",
    project: "Nhà phố 4 tầng",
    image: contractPhoto8,
  },
  {
    quote:
      "Xây nhà ven biển có nhiều điều đặc thù. Ebook này giúp tôi tránh được những sai lầm về nền móng và chống ẩm.",
    author: "Anh Hải",
    location: "Khánh Hòa",
    project: "Villa biển 2 tầng",
    image: contractPhoto9,
  },
  {
    quote:
      "Checklist trong ebook giúp tôi làm việc với nhà thầu một cách chuyên nghiệp hơn. Họ cũng nghiêm túc hơn khi thấy mình chuẩn bị kỹ.",
    author: "Anh Long",
    location: "Lâm Đồng",
    project: "Nhà núi view đẹp",
    image: contractPhoto10,
  },
];

export const SocialProofSection = () => {
  return (
    <section
      id="proof"
      className="section-spacing bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden py-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-800 font-semibold text-sm mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>Được tin dùng bởi hàng trăm gia đình</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              837+ gia chủ
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl font-semibold mt-2">
              đã xây nhà đúng ngay từ đầu nhờ{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                bản đồ xây nhà
              </span>
            </span>
            <span className="block text-base md:text-lg font-normal text-muted-foreground mt-2">
              <span className="font-semibold">Còn bạn thì sao?</span>
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Những câu chuyện thật từ những gia đình đã áp dụng thành công
          </p>
        </div>

        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                      <img
                        src={testimonial.image.src}
                        alt={`Công trình ${testimonial.project} - ${testimonial.location}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-grow">
                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-foreground mb-4 italic text-sm leading-relaxed flex-grow">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-start justify-between pt-4 mt-auto border-t border-border">
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.project}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-accent/20 px-2 py-1 rounded-full ml-2 whitespace-nowrap">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-12 md:-left-16 top-1/3" />
            <CarouselNext className="-right-12 md:-right-16 top-1/3" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

