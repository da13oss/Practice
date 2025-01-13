import React, { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoList } from './components/VideoList';
import { CommentSection } from './components/CommentSection';
import { AuthForm } from './components/AuthForm';
import { ProfilePage } from './components/ProfilePage';
import { sampleVideos } from './data/sampleVideos';
import { Video, User, Comment } from './types';
import { User as UserIcon, LogOut } from 'lucide-react';

function App() {
  // State management
  const [currentVideo, setCurrentVideo] = useState<Video>(sampleVideos[0]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const [comments, setComments] = useState<Comment[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Handle authentication
  const handleAuth = (data: { email: string; password: string; username?: string }) => {
    // In a real app, this would make an API call
    if (authType === 'register') {
      setCurrentUser({
        id: Math.random().toString(),
        username: data.username!,
        email: data.email,
      });
    } else {
      setCurrentUser({
        id: Math.random().toString(),
        username: 'User',
        email: data.email,
      });
    }
    setShowAuth(false);
  };

  // Handle profile updates
  const handleProfileUpdate = (updates: Partial<User>, newPassword?: string) => {
    if (currentUser) {
      // In a real app, this would make an API call
      setCurrentUser({
        ...currentUser,
        ...updates,
      });
      setShowProfile(false);
    }
  };

  // Handle adding comments
  const handleAddComment = (content: string) => {
    if (currentUser) {
      const newComment: Comment = {
        id: Math.random().toString(),
        videoId: currentVideo.id,
        userId: currentUser.id,
        username: currentUser.username,
        content,
        createdAt: new Date().toISOString(),
      };
      setComments([newComment, ...comments]);
    }
  };

  // Handle sign out
  const handleSignOut = () => {
    setCurrentUser(null);
    setShowUserMenu(false);
  };

  if (showAuth) {
    return (
      <AuthForm
        type={authType}
        onSubmit={handleAuth}
        onToggle={() => setAuthType(authType === 'login' ? 'register' : 'login')}
      />
    );
  }

  if (showProfile && currentUser) {
    return (
      <ProfilePage
        user={currentUser}
        onUpdate={handleProfileUpdate}
        onClose={() => setShowProfile(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">BeepBop</h1>
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-medium">
                    {currentUser.username[0].toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-600 hidden sm:inline">
                  {currentUser.username}
                </span>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <button
                    onClick={() => {
                      setShowProfile(true);
                      setShowUserMenu(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <UserIcon size={16} />
                    Profile Settings
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VideoPlayer video={currentVideo} />
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-900">{currentVideo.title}</h2>
              <p className="mt-2 text-gray-600">{currentVideo.description}</p>
            </div>
            <CommentSection
              videoId={currentVideo.id}
              currentUser={currentUser}
              comments={comments.filter(c => c.videoId === currentVideo.id)}
              onAddComment={handleAddComment}
              onSignInClick={() => setShowAuth(true)}
            />
          </div>
          
          <div className="lg:col-span-1">
            <VideoList
              videos={sampleVideos}
              onVideoSelect={setCurrentVideo}
              currentVideo={currentVideo}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;