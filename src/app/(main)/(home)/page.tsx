import Slider from "@/components/home/slider";
import ContainerWrapper from "@/components/utilities/container-wrapper";

export default function Home() {
  return (
    <ContainerWrapper>
      {/* Slider Section */}
      <Slider slideData={[1, 2, 3, 4, 5]}/>
    </ContainerWrapper>
  );
}
