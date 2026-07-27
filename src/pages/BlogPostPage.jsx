import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowLeft, Calendar, Tag, Share2, Mail } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="section-container text-center py-40">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-[var(--color-primary)] hover:underline flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="section-container max-w-4xl" data-component="blog-post-page">
      <Link to="/blog" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Technical Blog
      </Link>

      <article>
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center text-sm text-[var(--color-text-muted)]">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="aspect-video w-full rounded-[var(--radius-base)] overflow-hidden border border-[var(--color-border)] shadow-sm">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-[var(--color-text-main)] leading-relaxed blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer / Call to Action */}
        <footer className="mt-20 pt-12 border-t border-[var(--color-border)]">
          <div className="bg-[var(--color-bg-base)] p-10 rounded-[var(--radius-base)] border border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 text-center md:text-left">Interested in this technology?</h3>
              <p className="text-sm text-[var(--color-text-muted)] text-center md:text-left">Our engineering team can provide detailed analysis reports for your specific use case.</p>
            </div>
            <Link to="/contact" className="btn-primary flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Contact Technical Team
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] flex items-center text-sm font-medium">
              <Share2 className="w-4 h-4 mr-2" /> Share Article
            </button>
          </div>
        </footer>
      </article>

      {/* Global Style for Blog Content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h4 {
          font-weight: 700;
          font-size: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content ul {
          margin-bottom: 1.5rem;
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content strong {
          color: var(--color-primary);
        }
      `}} />
    </div>
  );
};

export default BlogPostPage;
