import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import "./index.css";

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="z-10 p-4 py-20 h-fit w-full flex scroll-mt-14 bg-[#070b0d]"
    >
      <div className="md:hidden size-full flex overflow-hidden">
        <MobileView />
      </div>
      <div className="max-md:hidden size-full overflow-hidden">
        <DesktopView />
      </div>
    </div>
  );
}
