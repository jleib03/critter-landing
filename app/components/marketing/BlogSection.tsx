"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Mail, Check, Loader2, Lightbulb, FileText, BookOpen, Newspaper, Zap } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

// Category display configuration (duplicated for client component)
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

type Category = keyof typeof categoryConfig;

// Format date for display
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Simplified article type for client component
interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: Category;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

interface BlogSectionProps {
  articles: ArticleSummary[];
}

function InlineNewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "https://hub.critter.pet";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      // Call the hub's API for newsletter subscription
      const response = await fetch(`${hubUrl}/api/public/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing-blog-section" }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <Check className="h-4 w-4" />
        <span className="font-subtitle text-sm">Subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative hidden sm:block">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-critter-gray" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="pl-10 pr-4 py-2 rounded-full bg-critter-beige border border-critter-cream font-body text-sm w-52 focus:outline-none focus:border-critter-orange"
        />
      </div>
      <Button
        type="submit"
        size="sm"
        disabled={status === "loading"}
        className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle rounded-full"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Subscribe
            <ArrowRight className="ml-1 h-3 w-3" />
          </>
        )}
      </Button>
    </form>
  );
}

// Placeholder for missing images
function ImagePlaceholder({ category }: { category: Category }) {
  const config = categoryConfig[category];
  const icons: Record<Category, React.ReactNode> = {
    'growth-tips': <Lightbulb className="h-12 w-12" />,
    'case-study': <FileText className="h-12 w-12" />,
    'guide': <BookOpen className="h-12 w-12" />,
    'news': <Newspaper className="h-12 w-12" />,
    'product-update': <Zap className="h-12 w-12" />,
  };

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${config.bgColor}`}>
      <div className={`${config.textColor} opacity-50`}>
        {icons[category]}
      </div>
    </div>
  );
}

function ArticleCard({ article, priority = false }: { article: ArticleSummary; priority?: boolean }) {
  const category = categoryConfig[article.category];
  const [imageError, setImageError] = useState(false);
  const hasImage = article.image && !imageError;

  return (
    <Link href={`/blog/${article.slug}`}>
      <article className="group bg-white rounded-xl overflow-hidden border border-critter-cream hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Image with category badge overlay */}
        <div className="relative aspect-[16/10] overflow-hidden bg-critter-beige">
          {hasImage ? (
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority={priority}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <ImagePlaceholder category={article.category} />
          )}
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

export default function BlogSection({ articles }: BlogSectionProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-center md:text-left">
            <h2 className="font-title text-3xl sm:text-4xl text-critter-maroon mb-2">
              Insights for Growing Pet Businesses
            </h2>
            <p className="font-body text-critter-gray">
              Fresh tips, case studies, and strategies from the experts
            </p>
          </div>
          <InlineNewsletterSignup />
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.slice(0, 3).map((article, i) => (
            <ArticleCard key={article.slug} article={article} priority={i === 0} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-critter-orange text-critter-orange hover:bg-critter-orange hover:text-white font-subtitle"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
