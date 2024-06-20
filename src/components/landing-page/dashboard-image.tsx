import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export function DashboardImage() {
  return (
    <div className="relative rounded-xl mt-10">
      <Image
      src={"/assets/dashboard-dark.png"}
        alt="Dashboard"
        width={500}
        height={500}
        className="rounded-xl md:w-full md:h-full object-cover"
      />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
