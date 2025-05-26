import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Experience the Future of Language Learning
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch how our students master German in just 2 weeks using our revolutionary AI-powered platform.
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-video glass-panel overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            poster="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <source src="https://player.vimeo.com/external/492094493.sd.mp4?s=8d71a26f6e5fbab545ce7b773244b26577c2164a&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className={`absolute inset-0 bg-dark-500/60 backdrop-blur-sm transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="p-6 bg-primary-500/90 rounded-full text-white hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePlayClick}
              >
                <Play size={32} className={isPlaying ? 'hidden' : ''} />
              </motion.button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-dark-500 to-transparent">
              <button
                className="p-2 text-white hover:text-primary-500 transition-colors"
                onClick={handleMuteClick}
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <div className="text-white text-sm font-medium">
                {isPlaying ? 'Click to pause' : 'Click to play'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <VideoFeature
            title="Interactive Learning"
            description="Real-time feedback and personalized corrections from our AI system"
          />
          <VideoFeature
            title="Native Speaker Practice"
            description="Practice conversations with AI-powered native speaker simulations"
          />
          <VideoFeature
            title="Rapid Progress"
            description="Master German basics in just 2 weeks with our intensive program"
          />
        </div>
      </div>
    </section>
  );
};

interface VideoFeatureProps {
  title: string;
  description: string;
}

const VideoFeature: React.FC<VideoFeatureProps> = ({ title, description }) => (
  <motion.div
    className="glass-panel p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-orbitron font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default VideoSection;