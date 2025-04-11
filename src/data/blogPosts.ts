
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-ai-first-marketing-wins-2025",
    title: "Why AI-First Marketing Wins in 2025",
    excerpt: "Discover how AI is reshaping the marketing landscape and why traditional approaches are falling behind.",
    date: "2025-04-10",
    author: "Team Maximally",
    content: `
      <p>The marketing landscape has dramatically shifted. AI isn't just a buzzword anymore—it's the backbone of successful marketing strategies in 2025.</p>
      <h2>The AI Advantage</h2>
      <p>Companies leveraging AI in their marketing efforts are seeing 3-5x better engagement rates and up to 40% reduction in customer acquisition costs.</p>
      <h2>Real-Time Personalization</h2>
      <p>AI enables hyper-personalization at scale, something traditional marketing could never achieve. Every customer interaction becomes an opportunity for deeper engagement.</p>
    `
  },
  {
    slug: "5-growth-hacks-startups-overlook",
    title: "5 Growth Hacks Startups Overlook",
    excerpt: "Learn the under-utilized growth strategies that could 10x your startup's growth trajectory.",
    date: "2025-04-08",
    author: "Team Maximally",
    content: `
      <p>While everyone chases the latest marketing trends, some of the most effective growth strategies often go unnoticed.</p>
      <h2>1. Micro-Community Engagement</h2>
      <p>Building deep relationships in niche communities often yields better results than broad, shallow marketing campaigns.</p>
      <h2>2. AI-Powered Content Optimization</h2>
      <p>Using AI to optimize content for specific user segments can increase conversion rates by up to 80%.</p>
    `
  },
  {
    slug: "anatomy-high-converting-funnel",
    title: "The Anatomy of a High-Converting Funnel",
    excerpt: "Break down the elements of a modern marketing funnel that converts at 3x the industry average.",
    date: "2025-04-05",
    author: "Team Maximally",
    content: `
      <p>A high-converting funnel in 2025 looks vastly different from what worked even a year ago. Let's break down the key components.</p>
      <h2>The Awareness Stage</h2>
      <p>AI-driven content distribution ensures your message reaches the right audience at the perfect time.</p>
      <h2>The Consideration Phase</h2>
      <p>Personalized nurture sequences that adapt in real-time based on user behavior are the new standard.</p>
    `
  }
];
