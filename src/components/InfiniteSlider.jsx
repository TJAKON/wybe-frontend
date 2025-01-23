import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";

  import mockData from "../components/mockData";

  
  const LOGOS = [
    <FigmaLogoIcon width={24} height={24} className="text-slate-800" />,
    <FramerLogoIcon width={24} height={24} className="text-slate-800" />,
    <SketchLogoIcon width={24} height={24} className=" text-slate-800" />,
    <TwitterLogoIcon width={24} height={24} className="text-slate-800" />,
    <GitHubLogoIcon width={24} height={24} className="text-slate-800" />,
    <VercelLogoIcon width={24} height={24} className="text-slate-800" />,
    <NotionLogoIcon width={24} height={24} className="text-slate-800" />,
    <DiscordLogoIcon width={24} height={24} className="text-slate-800" />,
    <InstagramLogoIcon width={24} height={24} className="text-slate-800" />,
    <LinkedInLogoIcon width={24} height={24} className="text-slate-800" />,
  ];
  
  export const InfiniteSlider = () => {
    return (
      <div className="relative bg-transparent m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(800px*20)]">
          {mockData.map((coin, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center"
              key={index}
            >
                <img src={coin.image} className="w-12 h-12" alt="" />
              {/* {coin.image} */}
            </div>
          ))}
          {mockData.map((coin, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center"
              key={index}
            >
                <img src={coin.image} className="w-12 h-12" alt="" />

              {/* {coin.image} */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  