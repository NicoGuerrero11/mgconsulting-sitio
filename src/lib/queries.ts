export const postsQuery = `
*[_type == "post" && !(_id in path("drafts.**"))] | order(coalesce(pubDate, _createdAt) desc){
  title,
  "slug": slug.current,
  "pubDate": coalesce(pubDate, _createdAt),
  "author": author->name,
  "image": mainImage.asset->url,
  excerpt,
  tags
}
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  "pubDate": coalesce(pubDate, _createdAt),
  "author": author->name,
  "image": mainImage.asset->url,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "alt": coalesce(alt, "")
    }
  },
  tags
}
`;