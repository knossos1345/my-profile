import HoverImage from "@/components/HoverImages";
import RandomAbout from "@/components/RandomAbout";
import RandomNameChanger from "@/components/RandomNameChanger";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import TreeComponent from "@/components/Tree";

import { getMarkdownContent } from '@/lib/markdown';



const createImageArray = (count: number) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/images/${i}.jpg`);
  }
  return images;
}

const images = createImageArray(11);

const HomePage = async () => {

  const { contentHtml } = await getMarkdownContent('content/experience.md');

  return (
    <div className="main-container">
      <div className="top-level">
        <div className="top-one">
          <h2>About Me</h2>
          <RandomAbout/>
        </div>
        <div className="top-two">
          <div className="top-two-one">
            <div className="experience" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
          <div className="top-two-two">
            <RandomNameChanger />
            <div className="flex gap-1">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map((tech) => (
                <span key={tech} className="text-xs rounded-md bg-slate-900 px-2 py-1 ">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="top-three">
          <TreeComponent />
        </div>
      </div>
      <div className="bottom-level">
        <div className="bottom-one">
          <h2>Education</h2>
          <ul>
            <li>Pangasinan State University</li>
            <li>BS Information Technology</li>
            <li>2014-2018</li>
          </ul>
        </div>
        <div className="bottom-two">
          <div className="bottom-two-one">
            <h2>More About me</h2>
            <HoverImage images={images} alt="Random Image" width={400} height={400} />
          </div>
          <SpotifyPlayer className="bottom-two-two"/>
        </div>
        <div className="bottom-three"><h2>Works</h2></div>
      </div>
    </div>
  );
};

export default HomePage;
