// This file contains pre-generated article data for the landing page
// In production, these would be generated at build time from CMS content

export interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "growth-tips" | "case-study" | "news" | "guide" | "product-update";
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const generatedArticles: ArticleSummary[] = [
  {
    slug: "email-marketing-tips-pet-business",
    title: "10 Email Marketing Tips That Actually Work for Pet Businesses",
    description: "Discover proven email strategies that help pet sitters, groomers, and dog walkers increase open rates and drive more bookings.",
    category: "growth-tips",
    author: "Critter Team",
    publishedAt: "2026-01-15",
    image: "",
    imageAlt: "Pet business owner checking email campaigns on laptop",
    tags: ["email marketing", "automation", "customer retention"],
    readingTime: 5,
    featured: true,
    excerpt: "Email marketing remains one of the most effective ways to stay connected with pet parents and drive repeat bookings. But sending generic newsletters won't cut it..."
  },
  {
    slug: "case-study-happy-paws-grooming",
    title: "How Happy Paws Grooming Increased Repeat Bookings by 47%",
    description: "Learn how one pet grooming business used automated lifecycle marketing to transform their customer retention and grow revenue.",
    category: "case-study",
    author: "Critter Team",
    publishedAt: "2026-01-10",
    image: "",
    imageAlt: "Happy Paws Grooming storefront with dogs in window",
    tags: ["case study", "grooming", "customer retention", "automation"],
    readingTime: 8,
    featured: true,
    excerpt: "When Jennifer Martinez opened Happy Paws Grooming in Austin, Texas, she thought great service would be enough. Her groomers were skilled, her prices fair..."
  },
  {
    slug: "complete-guide-customer-retention-pet-business",
    title: "The Complete Guide to Customer Retention for Pet Businesses",
    description: "Everything you need to know about keeping pet parents coming back: from lifecycle stages to loyalty programs and win-back campaigns.",
    category: "guide",
    author: "Critter Team",
    publishedAt: "2026-01-05",
    image: "",
    imageAlt: "Dog walker with happy clients and their dogs",
    tags: ["customer retention", "lifecycle management", "loyalty", "strategy"],
    readingTime: 12,
    featured: true,
    excerpt: "Acquiring new customers costs 5-7x more than retaining existing ones. Yet most pet businesses spend 80% of their marketing budget on acquisition and only 20% on retention..."
  }
];

export const generatedFeaturedArticles: ArticleSummary[] = generatedArticles.filter(
  (article) => article.featured
);
