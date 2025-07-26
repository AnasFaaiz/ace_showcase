import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// It's good practice to create a small component for the repeating elements.
type BlogCardProps = {
  title: string;
  summary: string;
  link: string;
};

const BlogCard = ({ title, summary, link }: BlogCardProps) => {
  return (
    <Link 
      href={link} 
      target="_blank" // Opens the link in a new tab
      className="
        block p-6 bg-[#181825] 
        rounded-lg border border-[#313244] 
        hover:border-[#cba6f7] transition-colors group
      "
    >
      <h3 className="font-bold text-[#cdd6f4] group-hover:text-[#cba6f7] transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-[#9399b2] leading-relaxed">
        {summary}
      </p>
      <div className="mt-4 flex items-center text-[#94e2d5] font-semibold">
        Read Full Article
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};


export default function BlogPage() {
  // --- Placeholder Blog Post Data ---
  // Later, this data could come from a file or an API.
  const posts = [
    {
	title:"Introducing A.C.E.: The AI Project That Solves My Headache",
	summary:"Between university assignments and personal projects, I was drowning in repetitive tasks. To fix this, I built A.C.E., a personal AI assistant that automates my entire workflow right from the terminal. It&apos;s the story of how I'm using Python and a bit of AI to build the tool I always wished I had.",
	link:"#"
    }

  ];

  return (
    <main className="min-h-screen text-[#cdd6f4] px-4 pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-3xl font-bold tracking-tighter">
            The A.C.E. Blog
          </h1>
          <p className="mt-4 text-lg text-[#9399b2]">
            The developer&apos;s diary. A look behind the scenes of how A.C.E. was built.
          </p>
        </header>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We map over our list of posts and create a BlogCard for each one. */}
          {posts.map((post) => (
            <BlogCard 
              key={post.title} 
              title={post.title} 
              summary={post.summary} 
              link={post.link} 
            />
          ))}
        </div>

      </div>
    </main>
  );
}

