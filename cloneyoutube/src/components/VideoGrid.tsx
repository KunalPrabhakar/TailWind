import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Lords Thriller",
    coverImg: "https://i3.ytimg.com/vi/W_j6PHiin_0/hqdefault.jpg",
    logoImg:
      "https://yt3.ggpht.com/A6zWpa8su9C6nf_RmIrTB63wbpAdJ6-efcsp9A93mYZqVH9qmZ07PM747urcPpSiuxWiUC04=s68-c-k-c0x00ffffff-no-rj",
    channelname: "Lord's Cricket Ground",
    viewsCount: "2.3M views | 1 month ago",
  },
  {
    title: "I bought the CHEAPEST Tech in India!",
    coverImg: "https://i3.ytimg.com/vi/LdlLUogNYMw/hqdefault.jpg",
    logoImg:
      "https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s88-c-k-c0x00ffffff-no-rj",
    channelname: "Mrwhosetheboss",
    viewsCount: "8.1M views  2 weeks ago",
  },
  {
    title: "$1 vs $10,000 Commercial",
    coverImg: "https://i3.ytimg.com/vi/jaRfBM7ESfc/hqdefault.jpg",
    logoImg:
      "https://yt3.ggpht.com/J7ANRfVmkOdP44qDLCaPuUtAukopBp37ambAkNnJvNQlzSel6Ryj_ZMDcVeDEDfnZ_O9Zhc5q-s=s88-c-k-c0x00ffffff-no-rj",
    channelname: "MrBeast 2",
    viewsCount: "23,662,365 views",
  },
  {
    title: "Every Country On Earth Fights For $250,000!",
    coverImg: "https://i3.ytimg.com/vi/J_z-W4UVHkw/hqdefault.jpg",
    logoImg:
      "https://yt3.ggpht.com/J7ANRfVmkOdP44qDLCaPuUtAukopBp37ambAkNnJvNQlzSel6Ryj_ZMDcVeDEDfnZ_O9Zhc5q-s=s88-c-k-c0x00ffffff-no-rj",
    channelname: "MrBeast",
    viewsCount: "174M views | 6 month ago",
  },
];
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            coverImg={video.coverImg}
            logoImg={video.logoImg}
            channelname={video.channelname}
            viewsCount={video.viewsCount}
          />
        </div>
      ))}
    </div>
  );
};
