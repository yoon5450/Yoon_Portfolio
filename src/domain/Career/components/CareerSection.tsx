import type { CareerInfo } from "../types";
import CareerCard from "./CareerCard";

const CAREER_INFO: CareerInfo[] = [
  {
    title: "프로그래머스 데브코스",
    duration: "2025-05-24 ~ 2025-10-23",
    desc: "React, Next 기반 학습 및 내부 프로젝트 진행",
    role: "프론트엔드",
  },
    {
    title: "주식회사 에이치에너지",
    duration: "2026-01-05 ~ 재직중",
    desc: "모햇, 솔라온케어, 솔라쉐어 서비스 페이지 개발 및 백오피스 개발",
    role: "프론트엔드 개발",
  },
];

function CareerSection() {
  return (
    <div
      className="relative py-20 bg-gray-50 w-full flex flex-col px-[8%]"
      id="projects"
    >
      <h1 className="font-family-perm text-3xl font-normal">Career</h1>
      <div className="flex flex-col py-8 px-4 gap-10">
        {CAREER_INFO.map(({ title, duration, desc, role }, index) => (
          <CareerCard
            title={title}
            duration={duration}
            desc={desc}
            role={role}
            sort={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
}

export default CareerSection;
