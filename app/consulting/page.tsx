"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, Calendar, CheckCircle2 } from "lucide-react";

export default function ConsultingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Tư vấn miễn phí
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn trong hành trình xây dựng ngôi nhà
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bạn sẽ nhận được gì?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Đánh giá dự án</h3>
              <p className="text-gray-600">
                Phân tích nhu cầu và đưa ra lộ trình phù hợp với dự án của bạn
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lập kế hoạch</h3>
              <p className="text-gray-600">
                Xây dựng timeline chi tiết cho từng giai đoạn của dự án
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Giải đáp thắc mắc</h3>
              <p className="text-gray-600">
                Tư vấn chuyên môn về mọi vấn đề liên quan đến xây dựng
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hỗ trợ liên tục</h3>
              <p className="text-gray-600">
                Luôn sẵn sàng đồng hành và hỗ trợ trong suốt quá trình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Đăng ký tư vấn miễn phí
              </h2>
              <p className="text-gray-600">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle2 className="text-green-600 mr-3" size={24} />
                <p className="text-green-800 font-medium">
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
                  Loại dự án <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Chọn loại dự án</option>
                  <option value="new">Xây mới</option>
                  <option value="renovation">Sửa chữa/Nâng cấp</option>
                  <option value="extension">Mở rộng</option>
                  <option value="interior">Nội thất</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ngân sách dự kiến
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn mức ngân sách</option>
                    <option value="under500">Dưới 500 triệu</option>
                    <option value="500-1000">500 triệu - 1 tỷ</option>
                    <option value="1000-2000">1 tỷ - 2 tỷ</option>
                    <option value="2000-5000">2 tỷ - 5 tỷ</option>
                    <option value="over5000">Trên 5 tỷ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thời gian dự kiến
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn thời gian</option>
                    <option value="immediate">Ngay lập tức</option>
                    <option value="1-3months">1-3 tháng</option>
                    <option value="3-6months">3-6 tháng</option>
                    <option value="6-12months">6-12 tháng</option>
                    <option value="over1year">Trên 1 năm</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mô tả chi tiết về dự án
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Hãy cho chúng tôi biết thêm về dự án của bạn, những thắc mắc hoặc mong muốn..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Gửi yêu cầu tư vấn
              </button>

              <p className="text-sm text-gray-600 text-center">
                Bằng cách gửi form, bạn đồng ý với{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Chính sách bảo mật
                </a>{" "}
                của chúng tôi
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoặc liên hệ trực tiếp
            </h2>
            <p className="text-lg text-gray-600">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Điện thoại</h3>
              <p className="text-gray-600 mb-2">Gọi cho chúng tôi</p>
              <a href="tel:0123456789" className="text-blue-600 font-semibold hover:underline">
                0123 456 789
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Gửi email cho chúng tôi</p>
              <a href="mailto:contact@bandoxaynha.vn" className="text-blue-600 font-semibold hover:underline">
                contact@bandoxaynha.vn
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chat</h3>
              <p className="text-gray-600 mb-2">Nhắn tin qua Facebook</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Facebook Messenger
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Dịch vụ tư vấn có mất phí không?
              </h3>
              <p className="text-gray-600">
                Buổi tư vấn đầu tiên hoàn toàn miễn phí. Chúng tôi sẽ đánh giá dự án của bạn và đưa ra lời khuyên phù hợp.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Tôi sẽ được tư vấn trong bao lâu?
              </h3>
              <p className="text-gray-600">
                Buổi tư vấn thường kéo dài từ 30-60 phút, tùy thuộc vào mức độ phức tạp của dự án.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Tôi cần chuẩn bị gì trước buổi tư vấn?
              </h3>
              <p className="text-gray-600">
                Nếu có, hãy chuẩn bị các thông tin như: diện tích đất, vị trí, ngân sách dự kiến, ý tưởng thiết kế, và bất kỳ câu hỏi nào bạn muốn được giải đáp.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sau khi tư vấn, tôi có phải mua dịch vụ của các bạn không?
              </h3>
              <p className="text-gray-600">
                Hoàn toàn không. Buổi tư vấn không ràng buộc bạn phải sử dụng dịch vụ của chúng tôi. Chúng tôi chỉ muốn giúp bạn hiểu rõ hơn về dự án của mình.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

