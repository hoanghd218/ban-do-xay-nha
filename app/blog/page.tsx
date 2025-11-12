import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 điều cần biết trước khi xây nhà năm 2024",
    excerpt: "Những kiến thức cơ bản và quan trọng nhất mà mọi chủ nhà cần nắm vững trước khi bắt đầu hành trình xây dựng ngôi nhà mơ ước.",
    author: "Kiến trúc sư Nguyễn Văn Anh",
    date: "05/11/2024",
    readTime: "8 phút",
    category: "Kiến thức cơ bản",
  },
  {
    id: 2,
    title: "Cách lập dự toán xây nhà chính xác và hiệu quả",
    excerpt: "Hướng dẫn chi tiết từng bước để bạn có thể tự lập dự toán xây nhà một cách chính xác, tránh thất thoát và vượt ngân sách.",
    author: "Kỹ sư Trần Thị Bình",
    date: "03/11/2024",
    readTime: "10 phút",
    category: "Tài chính",
  },
  {
    id: 3,
    title: "Kinh nghiệm chọn nhà thầu uy tín và chất lượng",
    excerpt: "Những tiêu chí quan trọng và lời khuyên từ chuyên gia để giúp bạn tìm được đối tác xây dựng tin cậy cho dự án của mình.",
    author: "Kiến trúc sư Phạm Thị Dung",
    date: "01/11/2024",
    readTime: "7 phút",
    category: "Tư vấn",
  },
  {
    id: 4,
    title: "Xu hướng thiết kế nội thất nhà ở hiện đại 2024",
    excerpt: "Khám phá những xu hướng thiết kế nội thất đang được ưa chuộng nhất, từ phong cách tối giản đến không gian xanh trong nhà.",
    author: "Kiến trúc sư Lê Minh Cường",
    date: "30/10/2024",
    readTime: "6 phút",
    category: "Thiết kế",
  },
  {
    id: 5,
    title: "Quy trình giám sát thi công xây dựng chuyên nghiệp",
    excerpt: "Hướng dẫn chi tiết về cách giám sát công trình xây dựng để đảm bảo chất lượng và tiến độ theo đúng kế hoạch.",
    author: "Kỹ sư Trần Thị Bình",
    date: "28/10/2024",
    readTime: "12 phút",
    category: "Giám sát",
  },
  {
    id: 6,
    title: "Những sai lầm thường gặp khi xây nhà và cách khắc phục",
    excerpt: "Tổng hợp những sai lầm phổ biến mà chủ nhà hay mắc phải và giải pháp để tránh những vấn đề không đáng có.",
    author: "Kiến trúc sư Nguyễn Văn Anh",
    date: "25/10/2024",
    readTime: "9 phút",
    category: "Kinh nghiệm",
  },
  {
    id: 7,
    title: "Làm thế nào để tối ưu hóa không gian cho nhà diện tích nhỏ",
    excerpt: "Những giải pháp thiết kế thông minh giúp tối ưu hóa công năng và thẩm mỹ cho những ngôi nhà có diện tích hạn chế.",
    author: "Kiến trúc sư Phạm Thị Dung",
    date: "22/10/2024",
    readTime: "8 phút",
    category: "Thiết kế",
  },
  {
    id: 8,
    title: "Hướng dẫn hoàn thiện thủ tục pháp lý khi xây nhà",
    excerpt: "Các bước cần thiết để hoàn thiện các thủ tục pháp lý, từ xin phép xây dựng đến hoàn công và cấp giấy chứng nhận.",
    author: "Luật sư Hoàng Văn E",
    date: "20/10/2024",
    readTime: "11 phút",
    category: "Pháp lý",
  },
  {
    id: 9,
    title: "Chi phí ẩn khi xây nhà mà bạn cần biết",
    excerpt: "Những khoản chi phí thường bị bỏ sót trong dự toán ban đầu và cách để chuẩn bị tài chính một cách toàn diện.",
    author: "Kỹ sư Trần Thị Bình",
    date: "18/10/2024",
    readTime: "7 phút",
    category: "Tài chính",
  },
];

const categories = ["Tất cả", "Kiến thức cơ bản", "Tài chính", "Thiết kế", "Giám sát", "Tư vấn", "Kinh nghiệm", "Pháp lý"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Blog Bản Đồ Xây Nhà
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Kiến thức, kinh nghiệm và xu hướng mới nhất trong lĩnh vực xây dựng
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                  BÀI VIẾT NỔI BẬT
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-6 flex-wrap gap-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Đọc bài viết
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg h-80 flex items-center justify-center">
                  <span className="text-white text-6xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Bài viết mới nhất</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center">
                  <span className="text-5xl">
                    {post.category === "Tài chính" && "💰"}
                    {post.category === "Thiết kế" && "🏠"}
                    {post.category === "Tư vấn" && "💡"}
                    {post.category === "Giám sát" && "🔍"}
                    {post.category === "Kinh nghiệm" && "⭐"}
                    {post.category === "Pháp lý" && "📋"}
                    {post.category === "Kiến thức cơ bản" && "📖"}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Đọc tiếp
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                3
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Tiếp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Đăng ký nhận tin mới nhất
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nhận những bài viết, kinh nghiệm và mẹo hay về xây dựng qua email mỗi tuần
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Đăng ký
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
          </p>
        </div>
      </section>
    </div>
  );
}





