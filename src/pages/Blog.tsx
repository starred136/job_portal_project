import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const SAMPLE_POSTS = [
  {
    id: 1,
    title: 'How to Prepare for Your Legal Internship Interview',
    excerpt:
      'Essential tips and strategies to help law students ace their internship interviews...',
    author: 'Dr. Julia Weber',
    date: '2024-03-15',
    image: 'https://picsum.photos/seed/legal1/800/400',
  },
  {
    id: 2,
    title: 'The Future of Legal Tech in Germany',
    excerpt:
      'Exploring how technology is transforming the legal industry and creating new opportunities...',
    author: 'Prof. Marcus Schmidt',
    date: '2024-03-10',
    image: 'https://picsum.photos/seed/legal2/800/400',
  },
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Legal Career Insights</h1>
        <p className="mt-2 text-lg text-gray-600">
          Expert advice and industry insights for law students and professionals
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_POSTS.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}