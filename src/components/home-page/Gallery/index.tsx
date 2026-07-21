import React from 'react'
import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { GALLERY } from '@/data/bulldogz/gallery'

const Gallery: React.FC = () => {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-neutral-950 py-20 text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red">
            Our fleet & work
          </p>
          <h2
            id="gallery-heading"
            className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Gallery
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A look at the trucks and the jobs we tackle every day.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3">
          {GALLERY.map((image, index) => (
            <li
              key={image.src}
              className="group relative overflow-hidden rounded-md bg-neutral-900"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={assetPath(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Gallery
