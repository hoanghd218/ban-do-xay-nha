import { BookOpen, Users, Home, Award } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <BookOpen size={32} />,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Kiến thức toàn diện",
      description: "Hệ thống kiến thức xây dựng từ A-Z, dễ hiểu và thực tế",
    },
    {
      icon: <Users size={32} />,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Chuyên gia đồng hành",
      description: "Đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm sẵn sàng hỗ trợ",
    },
    {
      icon: <Home size={32} />,
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Công cụ thực tế",
      description: "Biểu mẫu, template và công cụ giúp bạn quản lý dự án hiệu quả",
    },
    {
      icon: <Award size={32} />,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Cộng đồng hỗ trợ",
      description: "Kết nối với hàng trăm chủ nhà cùng chia sẻ kinh nghiệm",
    },
  ];

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-merriweather">
            Tại sao chọn Bản Đồ Xây Nhà?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Những lợi ích cốt lõi giúp bạn xây nhà thành công
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div
                className={`w-16 h-16 ${feature.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <div className={feature.iconColor}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">
                {feature.title}
              </h3>
              <p className="text-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

