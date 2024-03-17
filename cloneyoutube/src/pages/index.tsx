import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Lords Thriller"}
        coverImg={
          "https://i.ytimg.com/vi/W_j6PHiin_0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-EBNSIr9Tq2bhmkCAtExgyLAzsw"
        }
        logoImg={
          "https://yt3.ggpht.com/A6zWpa8su9C6nf_RmIrTB63wbpAdJ6-efcsp9A93mYZqVH9qmZ07PM747urcPpSiuxWiUC04=s68-c-k-c0x00ffffff-no-rj"
        }
        channelname={"Lord's Cricket Ground"}
        viewsCount={"2.3M views | 1 month ago"}
      />
    </div>
  );
}
