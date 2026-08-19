export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@matchingweb.com",
};
