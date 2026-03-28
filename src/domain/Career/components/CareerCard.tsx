import tw from "@/utils/tw";
import type { CareerInfo } from "../types";

interface Props extends CareerInfo {
  sort: string;
}

function CareerCard({ title, desc, duration, role, sort }: Props) {
  return (
    <div className={tw("flex", sort === 'left' ? 'justify-end' : '')}>
      <div className={tw("flex flex-col gap-2 min-w-140",  sort === 'left' ? 'items-end' : '')}>
        <p className="w-fit">{duration}</p>
        <p className="text-2xl font-bold w-fit">{`${title} - ${role}`}</p>
        <div className="h-0.5 bg-gray-600 w-full" />
        <p className="w-fit">{desc}</p>
      </div>
    </div>
  );
}
export default CareerCard;
