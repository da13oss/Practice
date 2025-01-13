import React, { useState } from 'react';
import { User, Comment } from '../types';

interface CommentSectionProps {
  videoId: string;
  currentUser: User | null;
  comments: Comment[];
  onAddComment: (content: string) => void;
  onSignInClick: () => void;
}

export function CommentSection({ 
  videoId, 
  currentUser, 
  comments, 
  onAddComment,
  onSignInClick 
}: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  if (!currentUser) {
    return (
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm text-center">
        <p className="text-gray-600 mb-4">Sign in to join the conversation</p>
        <button
          onClick={onSignInClick}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Comments</h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium">
                {currentUser.username[0].toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex-grow">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              rows={3}
            />
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                disabled={!newComment.trim()}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  {comment.username[0].toUpperCase()}
                </span>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">
                  {comment.username}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-1 text-gray-600">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}