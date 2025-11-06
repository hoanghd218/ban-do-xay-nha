import { Target, Heart, Users, Lightbulb, Shield, TrendingUp } from "lucide-react";
import Team from "@/components/team";

export default function AboutPage() {
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
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Đồng hành cùng giấc mơ ngôi nhà của mọi gia đình Việt
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-merriweather">
              Sứ mệnh của chúng tôi
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                <span className="font-bold text-primary">Bản Đồ Xây Nhà</span> ra đời từ niềm tin rằng mỗi gia đình Việt Nam đều xứng đáng có một ngôi nhà hoàn hảo, 
                được xây dựng với sự minh bạch, chất lượng và niềm vui.
              </p>
              <p>
                Chúng tôi không chỉ cung cấp kiến thức và công cụ, mà còn xây dựng một hệ sinh thái kết nối chủ nhà với các chuyên gia, 
                nhà thầu uy tín và cộng đồng những người cùng đam mê. Mục tiêu của chúng tôi là biến hành trình xây nhà từ một thử thách 
                đầy lo lắng thành một trải nghiệm thú vị và đáng nhớ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-wide">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-accent" size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-merriweather">
              Tầm nhìn
            </h2>
            <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-primary">Bản Đồ Xây Nhà</span> hướng tới việc trở thành nền tảng số 1 Việt Nam 
              cho chủ nhà trong suốt hành trình xây dựng ngôi nhà. Chúng tôi mong muốn tạo ra một hệ sinh thái toàn diện, 
              nơi kiến thức được chia sẻ minh bạch, công nghệ giúp đơn giản hóa quy trình, và cộng đồng luôn sẵn sàng hỗ trợ lẫn nhau.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-merriweather">
              Giá trị cốt lõi
            </h2>
            <p className="text-lg text-foreground">
              Những nguyên tắc định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-linear-to-b from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">Minh bạch</h3>
              <p className="text-foreground leading-relaxed">
                Cung cấp thông tin rõ ràng, trung thực về mọi khía cạnh của quá trình xây dựng
              </p>
            </div>

            <div className="bg-linear-to-b from-green-50 to-green-100 rounded-xl p-8 text-center shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">Tâm huyết</h3>
              <p className="text-foreground leading-relaxed">
                Đặt lợi ích của chủ nhà lên hàng đầu, đồng hành với tâm huyết và trách nhiệm
              </p>
            </div>

            <div className="bg-linear-to-b from-purple-50 to-purple-100 rounded-xl p-8 text-center shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">Cộng đồng</h3>
              <p className="text-foreground leading-relaxed">
                Xây dựng cộng đồng hỗ trợ lẫn nhau, chia sẻ kinh nghiệm và học hỏi từ nhau
              </p>
            </div>

            <div className="bg-linear-to-b from-yellow-50 to-yellow-100 rounded-xl p-8 text-center shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">Đổi mới</h3>
              <p className="text-foreground leading-relaxed">
                Không ngừng cải tiến và áp dụng công nghệ để mang lại trải nghiệm tốt nhất
              </p>
            </div>

            <div className="bg-linear-to-b from-red-50 to-red-100 rounded-xl p-8 text-center shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">Chất lượng</h3>
              <p className="text-foreground leading-relaxed">
                Cam kết cung cấp kiến thức, dịch vụ và hỗ trợ với chất lượng cao nhất
              </p>
            </div>

            <div className="bg-linear-to-b from-indigo-50 to-indigo-100 rounded-xl p-8 text-center shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-merriweather">Tăng trưởng</h3>
              <p className="text-foreground leading-relaxed">
                Hỗ trợ chủ nhà và đối tác phát triển, học hỏi và đạt được mục tiêu của mình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Story Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center font-merriweather">
              Câu chuyện của chúng tôi
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Bản Đồ Xây Nhà được thành lập vào năm 2025, xuất phát từ những trải nghiệm thực tế của đội ngũ sáng lập khi xây dựng nhà cho chính gia đình mình. 
                Chúng tôi đã trải qua những khó khăn, lo lắng và nhiều sai lầm đáng tiếc do thiếu kiến thức và không có người hướng dẫn đúng đắn.
              </p>
              <p>
                Từ những trải nghiệm đó, chúng tôi nhận ra rằng hàng triệu gia đình Việt Nam đang đối mặt với những thách thức tương tự. 
                Thị trường xây dựng thiếu tính minh bạch, thông tin rải rác và khó tiếp cận, chủ nhà thường cảm thấy bất lực và lo lắng 
                trong suốt quá trình xây dựng ngôi nhà mơ ước của mình.
              </p>
              <p>
                Với sứ mệnh thay đổi điều này, <span className="font-semibold text-primary">Bản Đồ Xây Nhà</span> ra đời như một giải pháp toàn diện. 
                Chúng tôi tập hợp đội ngũ chuyên gia giàu kinh nghiệm, xây dựng hệ thống kiến thức có cấu trúc, phát triển các công cụ hỗ trợ 
                và tạo ra một cộng đồng nơi mọi người có thể học hỏi, chia sẻ và hỗ trợ lẫn nhau.
              </p>
              <p>
                Đến nay, chúng tôi đã đồng hành cùng hàng trăm gia đình trong hành trình xây dựng ngôi nhà. Mỗi câu chuyện thành công của khách hàng 
                là động lực để chúng tôi tiếp tục phát triển và hoàn thiện sứ mệnh của mình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-padding bg-linear-to-br from-[#0066CC] via-[#0052A3] to-[#003d7a] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B050] rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-wide relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">500+</div>
              <div className="text-blue-100 text-lg">Gia đình đã đồng hành</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">1000+</div>
              <div className="text-blue-100 text-lg">Buổi tư vấn</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">50+</div>
              <div className="text-blue-100 text-lg">Workshop đã tổ chức</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">4.9/5</div>
              <div className="text-blue-100 text-lg">Đánh giá từ khách hàng</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


