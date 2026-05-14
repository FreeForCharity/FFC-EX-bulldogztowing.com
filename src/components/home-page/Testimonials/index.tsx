import React from 'react'
import { Star } from 'lucide-react'
import { REVIEWS, AGGREGATE_RATING } from '@/data/bulldogz/reviews'

const StarRow: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-4 w-4 ${
            i < rating ? 'fill-bulldog-yellow text-bulldog-yellow' : 'text-neutral-300'
          }`}
        />
      ))}
    </div>
  )
}

const Testimonials: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-neutral-50 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-bulldog-red">
            What customers say
          </p>
          <h2
            id="reviews-heading"
            className="text-3xl font-black uppercase tracking-tight text-bulldog-ink sm:text-4xl md:text-5xl"
          >
            Reviews
          </h2>
          <div className="mt-5 inline-flex flex-col items-center gap-2 rounded-lg bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-bulldog-ink">
                {AGGREGATE_RATING.rating.toFixed(1)}
              </span>
              <StarRow rating={Math.round(AGGREGATE_RATING.rating)} />
            </div>
            <p className="text-sm text-neutral-600">
              Based on {AGGREGATE_RATING.reviewCount} {AGGREGATE_RATING.source} reviews
            </p>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm text-neutral-500">
            Reviewer last names abbreviated for privacy. Reviews captured from the live Google
            Business profile.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li
              key={review.name + review.text.slice(0, 20)}
              className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <StarRow rating={review.rating} />
              <blockquote className="mt-3 flex-1 text-base leading-relaxed text-neutral-700">
                <p>&ldquo;{review.text}&rdquo;</p>
              </blockquote>
              <footer className="mt-4 border-t border-neutral-100 pt-3 text-sm font-semibold text-bulldog-ink">
                {review.name}
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials
