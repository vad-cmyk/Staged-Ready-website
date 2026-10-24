import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

// Canonical, indexable pages only — no /thank-you (noindex).
const routes = [
  { path: '', priority: 1 },
  { path: '/home-staging', priority: 0.9 },
  { path: '/developer-home-staging', priority: 0.9 },
  { path: '/hmo-furniture-packages', priority: 0.9 },
  { path: '/serviced-accommodation-furniture-packages', priority: 0.9 },
  { path: '/portfolio', priority: 0.7 },
  { path: '/faq', priority: 0.6 },
  { path: '/privacy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
  { path: '/cookies', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    priority,
  }));
}
