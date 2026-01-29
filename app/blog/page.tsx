import Link from "next/link";
import { Clock, Lightbulb, FileText, BookOpen, Newspaper, Zap } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { generatedArticles, ArticleSummary } from "@/lib/blog/generated-articles";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";

export const metadata = {
  title: "Blog - Growth Tips & Insights for Pet Businesses | Critter",
  description: "Expert advice, case studies, and growth strategies for pet sitters, dog walkers, groomers, and pet care professionals.",
};

// Category display configuration
const categoryConfig = {
  'growth-tips': {
    label: 'Growth Tips',
    bgColor: 'bg-critter-orange/10',
    textColor: 'text-critter-orange',
    icon: Lightbulb,
  },
  'case-study': {
    label: 'Case Study',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
    icon: FileText,
  },
  'news': {
    label: 'Industry News',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    icon: Newspaper,
  },
  'guide': {
    label: 'How-To Guide',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
    icon: BookOpen,
  },
  'product-update': {
    label: 'Product Update',
    bgColor: 'bg-critter-pink/30',
    textColor: 'text-critter-maroon',
    icon: Zap,
  },
} as const;

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ArticleCard({ article }: { article: ArticleSummary }) {
  const category = categoryConfig[article.category];
  const Icon = category.icon;

  return (
    <Link href={`/blog/${article.slug}`}>
      <article className="group bg-white rounded-xl overflow-hidden border border-critter-cream hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Image placeholder with category icon */}
        <div className="relative aspect-[16/10] overflow-hidden bg-critter-beige">
          <div className={`absolute inset-0 flex items-center justify-center ${category.bgColor}`}>
            <Icon className={`h-12 w-12 ${category.textColor} opacity-50`} />
          </div>
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge className={`${category.bgColor} ${category.textColor} font-subtitle text-xs`}>
              {category.label}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-subtitle text-lg text-critter-maroon mb-2 line-clamp-2 group-hover:text-critter-orange transition-colors">
            {article.title}
          </h3>
          <p className="font-body text-sm text-critter-gray mb-4 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs mt-auto">
            <span className="font-body text-critter-gray">
              {formatDate(article.publishedAt)}
            </span>
            <div className="flex items-center gap-1 text-critter-gray">
              <Clock className="h-3.5 w-3.5" />
              <span className="font-body">{article.readingTime} min read</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-title text-4xl sm:text-5xl text-critter-maroon mb-4">
              Insights for Growing Pet Businesses
            </h1>
            <p className="font-body text-lg text-critter-gray max-w-2xl mx-auto">
              Expert advice, case studies, and growth strategies to help you build a thriving pet care business.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Link href="/blog">
              <Button variant="secondary" className="bg-critter-orange text-white font-subtitle">
                All
              </Button>
            </Link>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <Link key={key} href={`/blog/category/${key}`}>
                <Button variant="outline" className="border-critter-cream font-subtitle">
                  {config.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generatedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Empty state if no articles */}
          {generatedArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-critter-gray">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
