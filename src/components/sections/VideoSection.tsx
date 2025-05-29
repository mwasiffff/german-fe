import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';
import videoSrc2 from '../../images/vid2.mp4';

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
   controls              // ✅ Shows native controls (play, pause, seek, etc.)
      muted={false}         // ✅ Start unmuted or set to true if needed
      autoPlay              // ✅ Starts automatically
      loop                  // ✅ Loops forever
      playsInline
          >
            <source src={videoSrc2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

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
