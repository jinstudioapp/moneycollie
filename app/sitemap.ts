import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 本番環境のURL（VercelのURLなど）
  const baseUrl = 'https://moneycollie.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // 将来、ブログやお知らせページを増やした場合はここに追加していきます
    /*
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    */
  ];
}