import Image from "next/image";
import { client } from "@/sanity/lib/client";
import ProjectGallery from "@/components/ProjectGallery";

// 1. Fetching logic using Sanity's GROQ query syntax
async function getProjects() {
  const query = `
    *[_type == "project"] | order(_createdAt desc) {
      title,
      status,
      coverImage,
      gallery,
      description
    }
  `;
  
  // This executes the query server-side before the page loads
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  // Call our database fetcher to get live construction data strings
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      
      {/* --- NAVIGATION BAR --- */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200 dynamic-shadow">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 sm:px-12">
          {/* Logo Section utilizing image_18c160.png */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-8 flex-shrink-0">
              <Image
                src="/images/logo.png" // Path to your image_18c160.png in the public folder
                alt="Teves Enterprise Logo Mark"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg leading-none text-zinc-950">TEVES ENTERPRISE</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-semibold">Construction | Engineering</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About Us</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:inline-block">
            <a href="#contact" className="bg-zinc-950 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-500 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="relative min-h-[85vh] flex items-center bg-zinc-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent opacity-70" />
          
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6 max-w-xl">
              <span className="inline-block bg-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">
                Welcome to Teves Enterprise
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Don't just imagine it, <span className="text-amber-500">build it</span> with Teves Enterprise.
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Leading the construction and engineering framework with unparalleled integrity, structure, and innovative execution. Let us construct your future today.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#services" className="bg-amber-500 text-zinc-950 font-bold px-6 py-3.5 rounded shadow-lg hover:bg-amber-400 transition-all flex items-center gap-2">
                  Check our services 
                  <span className="font-mono font-bold">&gt;&gt;&gt;</span>
                </a>
                <a href="#about" className="border border-zinc-700 hover:border-white px-6 py-3.5 rounded font-medium transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            
            {/* Visual Placeholder mimicking layout elements from image_192adc.png */}
            <div className="relative h-[450px] w-full lg:flex items-center justify-center hidden">
              <div className="absolute w-80 h-80 bg-amber-500 rounded-full -left-4 bottom-4 opacity-10 blur-2xl" />
              <div className="w-full h-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-bl-full opacity-40" />
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-amber-500 rounded" />
                  <p className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">Latest Insight</p>
                  <h3 className="text-xl font-bold text-white pt-2">Building Sustainability into Modern Blueprints</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Discover how engineering trends in 2026 are shifting toward adaptive materials and energy-efficient structuring.
                </p>
                <a href="#blog" className="text-amber-500 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Read article &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT US SECTION --- */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-zinc-200 h-[400px] rounded-2xl flex items-center justify-center relative overflow-hidden group">
              <Image
                src="/images/teves_team.png"
                alt="Teves Enterprise corporate team"
                fill 
                sizes="(max-w-7xl) 50vw, 100vw" 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                priority 
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300" /> 
            </div>
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600">Who We Are</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">Solid Foundations, Superior Craftsmanship</h3>
              <p className="text-zinc-600 leading-relaxed">
                At Teves Enterprise, we manage diverse structural architectural frameworks. From commercial expansions to complex engineering layouts, our team guarantees premium material selection, strict safety timelines, and visionary building styles.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-bold text-xl text-zinc-950">100%</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Safe Execution</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-bold text-xl text-zinc-950">2026</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Modern Standards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-24 bg-zinc-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600">Expertise</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">Our Construction Disciplines</h3>
              <p className="text-zinc-600 text-sm">Engineered safely, built to last. We manage your property visions comprehensively.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">01</div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3">Civil Works</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Unyielding foundations, earthworks, dynamic paving operations, structural calculations, and comprehensive site infrastructure layouts built perfectly.</p>
              </div>
              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">02</div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3">Mechanical Works</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Advanced heavy industrial tooling integration, optimized HVAC pipeline pathways, ventilation metrics, and specialized metallic frame engineering assets.</p>
              </div>
              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">03</div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3">Electrical Works</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">High-safety grid configurations, full control panels, reliable commercial lighting circuits, power distributions, and regulatory compliance infrastructure.</p>
              </div>
              {/* Service 4 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">04</div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3">Architectural Works</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Visually striking blueprint renderings, spatial optimization schemes, premium finishing touches, and customized material selections matching your exact brand aesthetics.</p>
              </div>
              {/* Service 5 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">05</div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3">Electromechanical Works</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Synchronized multi-system automation control engines, smart machinery instrumentation wiring, heavy pump circuits, and hybrid system management operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600">Portfolio</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">Recent Framework Highlights</h3>
            </div>
            <span className="text-sm font-semibold text-zinc-500">Managed via Sanity Content Lake Studio</span>
          </div>

          {/* 2. Swapping the static elements with the live ProjectGallery component */}
          {projects?.length > 0 ? (
            <ProjectGallery projects={projects} />
          ) : (
            <div className="text-center py-12 border border-dashed border-zinc-300 rounded-xl bg-zinc-50">
              <p className="text-sm text-zinc-500 font-medium">No published projects found inside your Sanity Studio dashboard.</p>
              <p className="text-xs text-zinc-400 mt-1">Visit your studio panel to upload your first architectural document record.</p>
            </div>
          )}
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-zinc-950 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500">Get In Touch</h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight">Ready to Begin Your Next Project?</h3>
            <p className="text-zinc-400 text-base max-w-xl mx-auto">
              Reach out to our engineering representatives today. Drop a message or request a specific blueprint estimate.
            </p>
            <div className="pt-4">
              <a href="mailto:info@tevesenterprise.com" className="inline-block bg-white text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-colors shadow-xl">
                Contact Our Engineers
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-zinc-900 text-zinc-500 text-xs py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>&copy; {new Date().getFullYear()} Teves Enterprise. All rights reserved.</p>
          <div className="flex gap-6 text-zinc-400">
            <a href="#home" className="hover:text-white">Back to Top</a>
            <span className="text-zinc-700">|</span>
            <p>Construction & Engineering Standards</p>
          </div>
        </div>
      </footer>

    </div>
  );
}