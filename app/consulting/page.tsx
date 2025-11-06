"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, Calendar, CheckCircle2, ChevronDown } from "lucide-react";

export default function ConsultingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFAQs, setOpenFAQs] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQs(openFAQs === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-[#0066CC] via-[#0052A3] to-[#003d7a] text-white section-padding overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B050] rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="container-wide relative text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-merriweather leading-tight">
            Tư vấn miễn phí
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn trong hành trình xây dựng ngôi nhà
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-merriweather">
              Bạn sẽ nhận được gì?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-merriweather">Đánh giá dự án</h3>
              <p className="text-foreground leading-relaxed">
                Phân tích nhu cầu và đưa ra lộ trình phù hợp với dự án của bạn
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-merriweather">Lập kế hoạch</h3>
              <p className="text-foreground leading-relaxed">
                Xây dựng timeline chi tiết cho từng giai đoạn của dự án
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-merriweather">Giải đáp thắc mắc</h3>
              <p className="text-foreground leading-relaxed">
                Tư vấn chuyên môn về mọi vấn đề liên quan đến xây dựng
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-merriweather">Hỗ trợ liên tục</h3>
              <p className="text-foreground leading-relaxed">
                Luôn sẵn sàng đồng hành và hỗ trợ trong suốt quá trình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-strong p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-merriweather">
                Đăng ký tư vấn miễn phí
              </h2>
              <p className="text-foreground text-lg">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center">
                <CheckCircle2 className="text-secondary mr-3" size={24} />
                <p className="text-secondary font-medium">
                  Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung cần tư vấn <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Hãy cho chúng tôi biết nội dung cần tư vấn, những thắc mắc hoặc mong muốn..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-[#0052A3] transition-all duration-300 shadow-subtle hover:shadow-medium"
              >
                Gửi yêu cầu tư vấn
              </button>

              <p className="text-sm text-foreground text-center">
                Bằng cách gửi form, bạn đồng ý với{" "}
                <a href="#" className="text-primary hover:underline">
                  Chính sách bảo mật
                </a>{" "}
                của chúng tôi
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-merriweather">
              Hoặc liên hệ trực tiếp
            </h2>
            <p className="text-lg text-foreground">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-merriweather">Điện thoại</h3>
              <p className="text-foreground mb-2">Gọi cho chúng tôi</p>
              <a href="tel:0123456789" className="text-primary font-semibold hover:underline">
                0123 456 789
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-secondary" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-merriweather">Email</h3>
              <p className="text-foreground mb-2">Gửi email cho chúng tôi</p>
              <a href="mailto:contact@bandoxaynha.vn" className="text-primary font-semibold hover:underline">
                contact@bandoxaynha.vn
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-merriweather">Chat</h3>
              <p className="text-foreground mb-2">Nhắn tin qua Facebook</p>
              <a href="#" className="text-primary font-semibold hover:underline">
                Facebook Messenger
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-merriweather">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Dịch vụ tư vấn có mất phí không?",
                answer: "Buổi tư vấn đầu tiên hoàn toàn miễn phí. Chúng tôi sẽ đánh giá dự án của bạn và đưa ra lời khuyên phù hợp."
              },
              {
                question: "Tôi sẽ được tư vấn trong bao lâu?",
                answer: "Buổi tư vấn thường kéo dài từ 30-60 phút, tùy thuộc vào mức độ phức tạp của dự án."
              },
              {
                question: "Tôi cần chuẩn bị gì trước buổi tư vấn?",
                answer: "Nếu có, hãy chuẩn bị các thông tin như: diện tích đất, vị trí, ngân sách dự kiến, ý tưởng thiết kế, và bất kỳ câu hỏi nào bạn muốn được giải đáp."
              },
              {
                question: "Sau khi tư vấn, tôi có phải mua dịch vụ của các bạn không?",
                answer: "Hoàn toàn không. Buổi tư vấn không ràng buộc bạn phải sử dụng dịch vụ của chúng tôi. Chúng tôi chỉ muốn giúp bạn hiểu rõ hơn về dự án của mình."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-light-gray transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground text-left font-merriweather">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary shrink-0 ml-4 transition-transform ${
                      openFAQs === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQs === index && (
                  <div className="px-6 py-4 bg-light-gray border-t border-border">
                    <p className="text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


