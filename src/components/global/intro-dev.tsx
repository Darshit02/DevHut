import ShineBorder from "@/components/magicui/shine-border";

export function IntroDev() {
  return (

    <ShineBorder
      className="text-center text-sm px-7 font-medium capitalize "
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <p className="">🎉 <span className="font-thin"> | {" "}</span>Welcome to devhut</p>
    </ShineBorder>
  );
}
