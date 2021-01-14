import sanityClient from 'part:@sanity/base/client';

function slugFormatter(input, type) {
    return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200);
}