import Slider from "@/components/home/slider";
import ContainerWrapper from "@/components/utilities/container-wrapper";

export default function HomePage() {
  return (
    <ContainerWrapper>
      {/* Slider Section */}
      <Slider slideData={[1, 2, 3, 4, 5]}/>
      {/* Movie Section */}
      <div className="my-10"> 
        <p className="text-3xl font-semibold">Now Showing</p>
        <div>

        </div>
      </div>
    </ContainerWrapper>
  );
}
