/**
 * Static snapshot of Google Reviews captured from bulldogztowing.com
 *
 * NOTE: Customer last names have been reduced to last initial for privacy.
 * The live site sources these from a Google Reviews widget — replaced with a
 * static snapshot because JavaScript-driven widgets do not run on the
 * static export. Review text snapshot date: 2026-05-14. Aggregate rating
 * re-checked 2026-06-09 against the Google Business profile: 5.0 / 51 reviews.
 */

export interface Review {
  name: string
  rating: number
  text: string
}

export const REVIEWS: Review[] = [
  {
    name: 'Layne S.',
    rating: 5,
    text: 'Impressive response time, friendly interaction, skillful and considerate work at a fair price. Had a total break down at a busy main light and was loaded onto a truck minutes after calling.',
  },
  {
    name: 'Anne L.',
    rating: 5,
    text: 'He was there in 15 minutes. I am a 33yo woman with an 8yo son and not once did I feel uncomfortable or unsafe! Cannot recommend this towing company enough!',
  },
  {
    name: 'JoAnn R.',
    rating: 5,
    text: 'James was there in 15 minutes! He got my car loaded and to the shop in no time. James was very kind and courteous.',
  },
  {
    name: 'Joanne T.',
    rating: 5,
    text: 'Excellent customer service! Super friendly, prompt delivery — they even offered us a ride to pick up our truck.',
  },
  {
    name: 'Trevor B.',
    rating: 5,
    text: "My Dad's car broke down on 83 and James came to the rescue quickly and efficiently.",
  },
  {
    name: 'Steph S.',
    rating: 5,
    text: 'James was there within 15 minutes after I called. He made sure we were safe and was very personable.',
  },
  {
    name: 'Jared J.',
    rating: 5,
    text: 'Showed up within 15 minutes, got my vehicle hooked up and off he went! Extremely professional.',
  },
  {
    name: 'William H.',
    rating: 5,
    text: 'Fast, honest and reliable. Called when my car got stuck in the mud and they were out within the hour!',
  },
  {
    name: 'Kayla M.',
    rating: 5,
    text: 'Came within 15 minutes. Affordable towing and great conversation on the ride home.',
  },
  {
    name: 'Janene O.',
    rating: 5,
    text: 'James was so kind and concerned, got me out of the road quickly, and even waited with me at the garage.',
  },
  {
    name: 'Chelsea S.',
    rating: 5,
    text: 'Was there within 20 minutes, extremely nice and reasonably priced. Definitely recommend!',
  },
  {
    name: 'Jonathan M.',
    rating: 5,
    text: 'Very professional, courteous, and prompt. Had to have a car towed — was there in 20 minutes.',
  },
]

export const AGGREGATE_RATING = {
  rating: 5.0,
  reviewCount: 51,
  source: 'Google',
}
