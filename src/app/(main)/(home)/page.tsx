import DateBox from "@/components/home/date-box";
import MovieBox from "@/components/home/movie-box";
import SlideBox from "@/components/home/slide-box";
import { Separator } from "@/components/ui/separator";
import ContainerWrapper from "@/components/utilities/container-wrapper";
import FlexColWrapper from "@/components/utilities/flexcol-wrapper";
import FlexRowWrapper from "@/components/utilities/flexrow-wrapper";
import GridWrapper from "@/components/utilities/grid-wrapper";
import HeadingLabel from "@/components/utilities/text-label";

export default function HomePage() {
  return (
    <ContainerWrapper>
      {/* Slider Section */}
      <SlideBox slideData={[1, 2, 3, 4, 5]}/>
      {/* Movie Section */}
      {/* Movie Label Section */}
      <FlexColWrapper className="items-start my-10 gap-10 min-h-full"> 
        <FlexRowWrapper className="gap-5">
          <HeadingLabel className="cursor-pointer">Now Showing</HeadingLabel>
          <Separator orientation="vertical" className="h-8"/>
          <HeadingLabel className="cursor-pointer">Comming Soon</HeadingLabel>
        </FlexRowWrapper>
        <FlexRowWrapper className="gap-10 w-full overflow-y-hidden overflow-x-scroll scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <DateBox day="Mon" numDay={item} month="Nov" current={item === 1} key={item}/>
          ))}
        </FlexRowWrapper>
      </FlexColWrapper>
      {/* Movie Box Section */}
      <GridWrapper className="gap-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <MovieBox 
            key={item}
            movie={{
              poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001722",
              title: "Death Whisperer 2",
              date: "2022-11-01",
              type: "4DX",
            }}
          />
        ))}
      </GridWrapper>
    </ContainerWrapper>
  );
}
