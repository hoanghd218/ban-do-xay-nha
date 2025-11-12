import { Users, Award, BookOpen, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Kiến trúc sư Nguyễn Văn Anh",
    role: "Founder & CEO",
    bio: "15 năm kinh nghiệm trong lĩnh vực kiến trúc và xây dựng. Đồng sáng lập Bản Đồ Xây Nhà với sứ mệnh giúp mọi gia đình Việt có được ngôi nhà mơ ước.",
    icon: Target,
  },
  {
    name: "Kỹ sư Trần Thị Bình",
    role: "Head of Consulting",
    bio: "10 năm kinh nghiệm quản lý dự án xây dựng. Chuyên gia tư vấn hàng đầu về quy trình xây dựng và giám sát công trình.",
    icon: Users,
  },
  {
    name: "Tiến sĩ Lê Minh Cường",
    role: "Education Director",
    bio: "Chuyên gia đào tạo với hơn 8 năm kinh nghiệm. Thiết kế và phát triển các khóa học và chương trình coaching cho chủ nhà.",
    icon: BookOpen,
  },
  {
    name: "Kiến trúc sư Phạm Thị Dung",
    role: "Chief Architect",
    bio: "12 năm kinh nghiệm thiết kế và thi công. Đam mê tạo ra những không gian sống hoàn hảo cho từng gia đình Việt.",
    icon: Award,
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Đội ngũ chuyên gia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đội ngũ chuyên gia giàu kinh nghiệm, tâm huyết và luôn sẵn sàng đồng hành cùng bạn trong hành trình xây dựng ngôi nhà
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





