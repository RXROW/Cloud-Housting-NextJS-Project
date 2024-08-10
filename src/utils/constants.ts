export const ARTICLE_PER_PAGE = 6;

const PRODUCTION_DOMAIN = "https://cloud-housting-next-4ul5kepth-eslams-projects-b3899e24.vercel.app/";
const DEVELOPMENT_DOMAIN = "http://localhost:3000";

// Set DOMAIN based on the environment
export const DOMAIN = process.env.NODE_ENV === 'production' 
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;
