"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Defining the strict types for our Sanity data properties
interface Project {
  title: string;
  status: string;
  coverImage: any;
  gallery?: any[];
  description?: string;
}

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  // Tracking which project modal is open, and which gallery image index is currently selected
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  // Helper to open modal cleanly
  const openLightbox = (project: Project) => {
    setActiveProject(project);
    setCurrentImgIndex(0); // Always start at the first image
  };

  // Safe navigation controls for cycling through pictures
  const nextImage = (e: React.MouseEvent, total: number) => {
    e.stopPropagation(); // Stops the modal background from clicking closed
    setCurrentImgIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent, total: number) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <>
      {/* --- LIVE PORTFOLIO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group cursor-pointer bg-white rounded-xl p-4 border border-zinc-200/60 shadow-sm hover:shadow-md transition-all"
            onClick={() => openLightbox(project)}
          >
            <div className="bg-zinc-100 aspect-[16/10] rounded-lg overflow-hidden relative mb-4">
              <Image
                src={urlFor(project.coverImage).url()}
                alt={project.title}
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-white px-2.5 py-1 rounded">
                Click to view gallery ({project.gallery?.length || 0 + 1})
              </div>
            </div>
            <h4 className="text-lg font-bold text-zinc-950 group-hover:text-amber-500 transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-zinc-500 capitalize mt-1">
              {project.status.replace("-", " ")}
            </p>
          </div>
        ))}
      </div>

      {/* --- INTERACTIVE LIGHTBOX MODAL OVERLAY --- */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-4 sm:p-10 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveProject(null)} // Click darkened background to exit
        >
          {/* Close Trigger Button */}
          <button 
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all text-xl font-mono"
            onClick={() => setActiveProject(null)}
          >
            ✕
          </button>

          {/* Core Layout Window Card */}
          <div className="max-w-5xl w-full flex flex-col md:flex-row bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
            
            {/* Left Side: Dynamic Image Canvas Frame */}
            <div className="relative flex-1 bg-black aspect-[4/3] md:aspect-auto min-h-[300px] sm:min-h-[450px] flex items-center justify-center group/nav">
              
              {/* Compile cover image along with extra gallery images into a fallback collection array */}
              {(() => {
                const mediaCollection = [
                  activeProject.coverImage,
                  ...(activeProject.gallery || [])
                ];
                const currentMedia = mediaCollection[currentImgIndex];
                const totalImages = mediaCollection.length;

                return (
                  <>
                    <Image
                      src={urlFor(currentMedia).url()}
                      alt={`${activeProject.title} image layout asset`}
                      fill
                      priority
                      className="object-contain p-2"
                    />

                    {/* Cycle Navigation Arrows (Only displays if more than 1 image exists) */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={(e) => prevImage(e, totalImages)}
                          className="absolute left-4 bg-zinc-950/50 text-white p-3 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-colors font-mono font-bold"
                        >
                          &lt;
                        </button>
                        <button
                          onClick={(e) => nextImage(e, totalImages)}
                          className="absolute right-4 bg-zinc-950/50 text-white p-3 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-colors font-mono font-bold"
                        >
                          &gt;
                        </button>
                        
                        {/* Frame Counter Badge */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950/80 px-3 py-1 rounded-full text-xs font-mono text-zinc-400">
                          {currentImgIndex + 1} / {totalImages}
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </div>

            {/* Right Side: Structured Details Sidebar Panel */}
            <div className="w-full md:w-[320px] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 text-white bg-zinc-900/50">
              <div className="space-y-4">
                <span className="inline-block bg-amber-500 text-zinc-950 font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 rounded font-mono">
                  {activeProject.status.replace("-", " ")}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                  {activeProject.title}
                </h3>
                <div className="h-0.5 w-10 bg-amber-500 rounded" />
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {activeProject.description || "No project tracking narrative summary logged for this specific build file."}
                </p>
              </div>
              
              <div className="pt-8 text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
                Teves Enterprise Portfolio
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}