import { Target, Heart, Users, Lightbulb, Shield, TrendingUp } from "lucide-react";
import Team from "@/components/team";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Về Chúng Tôi
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Đồng hành cùng giấc mơ ngôi nhà của mọi gia đình Việt
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-blue-600">Bản Đồ Xây Nhà</span> ra đời từ niềm tin rằng mỗi gia đình Việt Nam đều xứng đáng có một ngôi nhà hoàn hảo, 
              được xây dựng với sự minh bạch, chất lượng và niềm vui.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chúng tôi không chỉ cung cấp kiến thức và công cụ, mà còn xây dựng một hệ sinh thái kết nối chủ nhà với các chuyên gia, 
              nhà thầu uy tín và cộng đồng những người cùng đam mê. Mục tiêu của chúng tôi là biến hành trình xây nhà từ một thử thách 
              đầy lo lắng thành một trải nghiệm thú vị và đáng nhớ.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-purple-600" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tầm nhìn
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-purple-600">Bản Đồ Xây Nhà</span> hướng tới việc trở thành nền tảng số 1 Việt Nam 
              cho chủ nhà trong suốt hành trình xây dựng ngôi nhà. Chúng tôi mong muốn tạo ra một hệ sinh thái toàn diện, 
              nơi kiến thức được chia sẻ minh bạch, công nghệ giúp đơn giản hóa quy trình, và cộng đồng luôn sẵn sàng hỗ trợ lẫn nhau.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-lg text-gray-600">
              Những nguyên tắc định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Minh bạch</h3>
              <p className="text-gray-700">
                Cung cấp thông tin rõ ràng, trung thực về mọi khía cạnh của quá trình xây dựng
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tâm huyết</h3>
              <p className="text-gray-700">
                Đặt lợi ích của chủ nhà lên hàng đầu, đồng hành với tâm huyết và trách nhiệm
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cộng đồng</h3>
              <p className="text-gray-700">
                Xây dựng cộng đồng hỗ trợ lẫn nhau, chia sẻ kinh nghiệm và học hỏi từ nhau
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Đổi mới</h3>
              <p className="text-gray-700">
                Không ngừng cải tiến và áp dụng công nghệ để mang lại trải nghiệm tốt nhất
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chất lượng</h3>
              <p className="text-gray-700">
                Cam kết cung cấp kiến thức, dịch vụ và hỗ trợ với chất lượng cao nhất
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tăng trưởng</h3>
              <p className="text-gray-700">
                Hỗ trợ chủ nhà và đối tác phát triển, học hỏi và đạt được mục tiêu của mình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Câu chuyện của chúng tôi
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                Bản Đồ Xây Nhà được thành lập vào năm 2020, xuất phát từ những trải nghiệm thực tế của đội ngũ sáng lập khi xây dựng nhà cho chính gia đình mình. 
                Chúng tôi đã trải qua những khó khăn, lo lắng và nhiều sai lầm đáng tiếc do thiếu kiến thức và không có người hướng dẫn đúng đắn.
              </p>
              <p className="mb-6 leading-relaxed">
                Từ những trải nghiệm đó, chúng tôi nhận ra rằng hàng triệu gia đình Việt Nam đang đối mặt với những thách thức tương tự. 
                Thị trường xây dựng thiếu tính minh bạch, thông tin rải rác và khó tiếp cận, chủ nhà thường cảm thấy bất lực và lo lắng 
                trong suốt quá trình xây dựng ngôi nhà mơ ước của mình.
              </p>
              <p className="mb-6 leading-relaxed">
                Với sứ mệnh thay đổi điều này, <span className="font-semibold text-blue-600">Bản Đồ Xây Nhà</span> ra đời như một giải pháp toàn diện. 
                Chúng tôi tập hợp đội ngũ chuyên gia giàu kinh nghiệm, xây dựng hệ thống kiến thức có cấu trúc, phát triển các công cụ hỗ trợ 
                và tạo ra một cộng đồng nơi mọi người có thể học hỏi, chia sẻ và hỗ trợ lẫn nhau.
              </p>
              <p className="leading-relaxed">
                Đến nay, chúng tôi đã đồng hành cùng hàng trăm gia đình trong hành trình xây dựng ngôi nhà. Mỗi câu chuyện thành công của khách hàng 
                là động lực để chúng tôi tiếp tục phát triển và hoàn thiện sứ mệnh của mình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-lg">Gia đình đã đồng hành</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-100 text-lg">Buổi tư vấn</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-lg">Workshop đã tổ chức</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100 text-lg">Đánh giá từ khách hàng</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

