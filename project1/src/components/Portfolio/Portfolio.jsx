import p1 from "../../assets/port1.png";
import p2 from "../../assets/port2.png";
import p3 from "../../assets/port3.png";
import Star from "../Star/Star";

export default function Portfolio() {
  return (
    <section className="py-6 min-h-[80vh] bg-slate-900">
      <div className="mb-6 text-center text-white">
        <h1 className="text-4xl font-bold uppercase">portfolio component</h1>
        <Star />
      </div>
      <div className="container w-4/5 mx-auto">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row 1 */}
          <div className="relative overflow-hidden group rounded-2xl">
            <img src={p1} alt="portfolio item"/>
            <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 bg-sky-300 hover:opacity-80">
              <i className="text-6xl text-white fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-2xl">
            <img src={p2} alt="portfolio item" className="rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 bg-sky-300 hover:opacity-80">
              <i className="text-6xl text-white fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-2xl">
            <img src={p3} alt="portfolio item"/>
            <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 bg-sky-300 hover:opacity-80">
              <i className="text-6xl text-white fa-solid fa-plus"></i>
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative overflow-hidden group rounded-2xl">
            <img src={p1} alt="portfolio item"/>
            <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 bg-sky-300 hover:opacity-80">
              <i className="text-6xl text-white fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-2xl">
            <img src={p2} alt="portfolio item"/>
            <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 bg-sky-300 hover:opacity-80">
              <i className="text-6xl text-white fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="relative overflow-hidden group rounded-2xl">
            <img src={p3} alt="portfolio item"/>
            <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 bg-sky-300 hover:opacity-80">
              <i className="text-6xl text-white fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
