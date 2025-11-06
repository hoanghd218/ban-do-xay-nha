import Link from "next/link";
import { BookOpen, Users, Calendar, FileText, CheckCircle } from "lucide-react";

interface ProductCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  price?: string;
  link: string;
  buttonText: string;
  category: "product" | "service";
}

export function ProductServiceListing() {
  const products: ProductCard[] = [
    {
      id: "book",
      title: 'Sách "Bản Đồ Xây Nhà"',
      description: "Phiên bản sách in của hướng dẫn toàn diện về Bản Đồ Xây Nhà. Kiến thức từ A-Z cho chủ nhà.",
      icon: <BookOpen className="text-blue-600" size={28} />,
      price: "299,000đ",
      link: "/services#book",
      buttonText: "Đặt mua",
      category: "product",
    },
    {
      id: "course",
      title: "Khóa Mini Course Online",
      description: "Khóa học online với video và templates giúp bạn tự xây dựng Bản Đồ Xây Nhà của riêng mình.",
      icon: <Users className="text-green-600" size={28} />,
      price: "1,999,000đ",
      link: "/services#course",
      buttonText: "Đăng ký",
      category: "service",
    },
    {
      id: "workshop-offline",
      title: "Khóa OFFLINE 2 DAY",
      description: "Ngày 1: Học cách tạo bản đồ. Ngày 2: Tham quan thực tế công trình xây dựng.",
      icon: <Calendar className="text-yellow-600" size={28} />,
      price: "4,999,000đ",
      link: "/services#offline",
      buttonText: "Đăng ký",
      category: "service",
    },
    {
      id: "toolkit",
      title: "Bộ Công Cụ Quản Lý Dự Án",
      description: "Tập hợp các template, biểu mẫu và công cụ giúp bạn quản lý dự án xây dựng hiệu quả.",
      icon: <FileText className="text-purple-600" size={28} />,
      price: "499,000đ",
      link: "/services#toolkit",
      buttonText: "Mua ngay",
      category: "product",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-merriweather">
            Sản Phẩm & Dịch Vụ Phổ Biến
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Các công cụ và kiến thức thiết yếu để bắt đầu hành trình xây nhà của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-border overflow-hidden shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 bg-light-gray rounded-xl flex items-center justify-center mb-6">
                  {product.icon}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 font-merriweather">
                  {product.title}
                </h3>

                <p className="text-sm text-foreground mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>

                {product.price && (
                  <div className="mb-6">
                    <p className="text-xl font-bold text-primary">
                      {product.price}
                    </p>
                  </div>
                )}

                <Link
                  href={product.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-[#0052A3] transition-all duration-300 w-full shadow-subtle hover:shadow-medium"
                >
                  {product.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-[#0052A3] text-white font-semibold rounded-lg hover:shadow-medium transition-all duration-300"
          >
            <CheckCircle className="mr-2" size={20} />
            Xem tất cả dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductServiceListing;

