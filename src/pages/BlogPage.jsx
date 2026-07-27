import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { posts } from '../data/posts';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div className="pb-0" data-component="blog-page">
      <div className="bg-[var(--color-bg-alt)] border-b border-gray-100">
        <div className="section-container !py-24">
          <SectionHeading 
            title="Technical Insights"
            subtitle="Deep research and industry analysis from our mineralogy specialists."
            centered={false}
          />
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {posts.map((post) => (
            <article key={post.id} className="bg-white group overflow-hidden flex flex-col p-10 hover:bg-[var(--color-bg-alt)]">
              <div className="flex items-center space-x-6 mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {post.category}
                </span>
                <div className="h-px flex-grow bg-gray-100"></div>
                <div className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-black mb-6 leading-tight text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-10 line-clamp-3 font-medium">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary)]">
                  Read Report
                  <ArrowRight className="w-3 h-3 ml-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* Newsletter / Subscription */}
      <div className="mt-32 p-12 bg-[var(--color-primary)] rounded-[var(--radius-base)] text-white flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-2 text-white">Subscribe to Technical Updates</h3>
          <p className="opacity-80">Receive the latest mineral analysis and industry reports directly in your inbox.</p>
        </div>
        <div className="flex w-full lg:w-auto">
          <input 
            type="email" 
            placeholder="Professional Email" 
            className="px-6 py-3 rounded-l-[var(--radius-base)] text-[var(--color-text-main)] w-full lg:w-80 outline-none"
          />
          <button className="btn-primary rounded-l-none whitespace-nowrap">
            Join List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
