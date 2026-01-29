import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { generatedArticles } from "@/lib/blog/generated-articles";
import LandingNav from "@/app/components/marketing/LandingNav";
import LandingFooter from "@/app/components/marketing/LandingFooter";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

// Category display configuration
const categoryConfig = {
  'growth-tips': {
    label: 'Growth Tips',
    bgColor: 'bg-critter-orange/10',
    textColor: 'text-critter-orange',
  },
  'case-study': {
    label: 'Case Study',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
  'news': {
    label: 'Industry News',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
  'guide': {
    label: 'How-To Guide',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
  },
  'product-update': {
    label: 'Product Update',
    bgColor: 'bg-critter-pink/30',
    textColor: 'text-critter-maroon',
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

export async function generateStaticParams() {
  return generatedArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = generatedArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Critter Blog",
    };
  }

  return {
    title: `${article.title} | Critter Blog`,
    description: article.description,
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = generatedArticles.find((a) => a.slug === params.slug);
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  if (!article) {
    notFound();
  }

  const category = categoryConfig[article.category];

  return (
    <div className="min-h-screen bg-critter-beige">
      <LandingNav />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-critter-maroon hover:text-critter-orange transition-colors font-body"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-10">
            <Badge className={`${category.bgColor} ${category.textColor} font-subtitle mb-4`}>
              {category.label}
            </Badge>

            <h1 className="font-title text-3xl sm:text-4xl md:text-5xl text-critter-maroon mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="font-body text-lg text-critter-gray mb-6">
              {article.description}
            </p>

            <div className="flex items-center gap-6 text-sm text-critter-gray">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-body">{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-body">{article.readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Article content placeholder */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 border border-critter-cream">
              <p className="font-body text-critter-gray leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="bg-critter-beige rounded-lg p-6 my-8">
                <p className="font-subtitle text-critter-maroon mb-2">Full article coming soon!</p>
                <p className="font-body text-critter-gray text-sm">
                  This is a preview of our upcoming blog content. Sign up for our newsletter to be notified when new articles are published.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-critter-cream">
              <p className="font-subtitle text-sm text-critter-maroon mb-3">Related topics:</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-critter-cream font-body">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-critter-orange rounded-xl p-8 text-center text-white">
            <h2 className="font-title text-2xl mb-3">Ready to grow your pet business?</h2>
            <p className="font-body mb-6 opacity-90">
              Start your free trial today and see how Critter can help you automate your marketing.
            </p>
            <a href={`${hubUrl}/auth/signup`}>
              <Button size="lg" className="bg-white text-critter-orange hover:bg-white/90 font-subtitle">
                Start Free Trial
              </Button>
            </a>
          </div>
        </div>
      </article>

      <LandingFooter />
    </div>
  );
}
