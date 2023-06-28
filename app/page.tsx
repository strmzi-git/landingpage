import Container from "./components/Container";
import Header from "./components/Header";
import HeaderLeft from "./components/Header/HeaderLeft";
import HeaderRight from "./components/Header/HeaderRight";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#15CB92] bg-opacity-50 ">
        <Container>
          <Header />
          <div className="mt-6 w-full flex flex-col md:flex-row h-[1000px] md:h-[750px] lg:h-[500px] gap-4">
            <HeaderLeft />
            <HeaderRight />
          </div>
        </Container>
      </div>
    </div>
  );
}
