let per_page = 12;
let pager = 1;

let name = 'Nginx';
let domain = `https://www.${name}.com`;
let api = `${domain}/wp-json/wp/v2`;
let posts = `${api}/posts?_embed&per_page=${per_page}`;
let post = `${api}/posts`;
let search = `${api}/search?_embed&per_page=${per_page}&search=`;

export default {name,domain,api,post,posts,search,pager};