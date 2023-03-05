import SanityClient from '@sanity/client';
export default SanityClient({
    projectId: "t0sn0qg1",
    // apiVersion:'2022-02-01', // CHG API VERSION TO AVOID BREAKING
    dataset: "production"
})


// // sanity.js
// import {createClient} from '@sanity/client'
// // Import using ESM URL imports in environments that supports it:
// // import {createClient} from 'https://esm.sh/@sanity/client'

// export const client = createClient({
//   projectId: "t0sn0qg1",
//   dataset: 'production',
//   useCdn: true, // set to `true` to fetch from edge cache
//   apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// })