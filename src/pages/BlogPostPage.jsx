import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowLeft, Calendar, Mail, Share2 } from 'lucide-react';

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
    <div className="pb-0 bg-[var(--color-bg-base)]" data-component="blog-post-page">
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="section-container !py-20 max-w-4xl">
           <Link to="/blog" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] mb-12">
            <ArrowLeft className="w-4 h-4 mr-3" />
            Back to Technical Blog
          </Link>

          <header>
            <div className="flex items-center space-x-6 mb-8">
              <span className="bg-[var(--color-primary)] text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em]">
                <Calendar className="w-4 h-4 mr-3" />
                {post.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[var(--color-text-heavy)] mb-12 leading-tight tracking-tighter uppercase">
              {post.title}
            </h1>
          </header>
        </div>
      </div>

      <div className="section-container !py-24 max-w-4xl">
        <div className="aspect-video w-full overflow-hidden border border-[var(--color-border)] shadow-2xl mb-24 bg-white">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-[var(--color-text-main)] leading-relaxed blog-content font-medium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer / Call to Action */}
        <footer className="mt-32 pt-20 border-t border-[var(--color-border)]">
          <div className="bg-[var(--color-text-heavy)] p-16 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 mb-10 md:mb-0">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase">Interested in this technology?</h3>
              <p className="text-gray-400 font-bold max-w-md">Our engineering team can provide detailed analysis reports for your specific use case.</p>
            </div>
            <Link to="/contact" className="bg-white text-[var(--color-text-heavy)] px-10 py-5 text-[10px] font-black uppercase tracking-widest relative z-10 hover:bg-gray-100 transition-colors">
              Contact Technical Team
            </Link>
          </div>
        </footer>
      </div>

      {/* Global Style for Blog Content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h4 {
          font-weight: 900;
          font-size: 1.75rem;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-heavy);
          text-transform: uppercase;
          letter-spacing: -0.05em;
        }
        .blog-content p {
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }
        .blog-content ul {
          margin-bottom: 2rem;
          list-style-type: square;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 1rem;
        }
        .blog-content strong {
          color: var(--color-text-heavy);
          font-weight: 900;
        }
      `}} />
    </div>
  );
};

export default BlogPostPage;
