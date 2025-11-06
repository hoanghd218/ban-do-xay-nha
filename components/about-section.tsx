"use client";

import { Users, Award, Shield, CheckCircle2, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl opacity-30"></div>

            <img
              src="/team-photo.jpg"
              alt="Đội ngũ Bản Đồ Xây Nhà"
              className="relative rounded-2xl shadow-2xl ring-4 ring-white"
            />

            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 rounded-2xl border-2 border-accent/20 bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">100%</p>
                  <p className="text-xs text-foreground">Hài lòng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 space-y-8 lg:order-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Users className="h-4 w-4" />
                <span>Về chúng tôi</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                Ai đứng sau Bản Đồ Xây Nhà?
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-xl">
                Bản Đồ Xây Nhà được kiến tạo bởi đội ngũ chuyên gia đầu ngành
                trong lĩnh vực kiến trúc – xây dựng – nội thất, với 10 đến hơn
                20 năm kinh nghiệm đồng hành cùng hàng ngàn gia chủ trên khắp
                Việt Nam.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Chuyên gia hàng đầu ngành
                  </h3>
                  <p className="text-sm text-foreground">
                    Với hơn 20 năm kinh nghiệm trong kiến trúc, xây dựng và nội
                    thất
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Hàng ngàn gia đình tin tưởng
                  </h3>
                  <p className="text-sm text-foreground">
                    Đã đồng hành và hỗ trợ hàng ngàn gia chủ trên khắp Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Kinh nghiệm thực tiễn
                  </h3>
                  <p className="text-sm text-foreground">
                    Giải pháp được áp dụng thực tế từ hàng ngàn dự án xây dựng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

