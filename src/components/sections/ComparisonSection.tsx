import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    { 
      feature: "Adaptive AI Learning", 
      futureLern: true, 
      duolingo: false, 
      youtube: false, 
      localTutor: false 
    },
    { 
      feature: "Personalized Feedback", 
      futureLern: true, 
      duolingo: true, 
      youtube: false, 
      localTutor: true 
    },
    { 
      feature: "24/7 Availability", 
      futureLern: true, 
      duolingo: true, 
      youtube: true, 
      localTutor: false 
    },
    { 
      feature: "Structured Curriculum", 
      futureLern: true, 
      duolingo: true, 
      youtube: false, 
      localTutor: true 
    },
    { 
      feature: "Voice Recognition", 
      futureLern: true, 
      duolingo: true, 
      youtube: false, 
      localTutor: false 
    },
    { 
      feature: "Business German", 
      futureLern: true, 
      duolingo: false, 
      youtube: false, 
      localTutor: true 
    },
    { 
      feature: "Official Certification", 
      futureLern: true, 
      duolingo: false, 
      youtube: false, 
      localTutor: false 
    },
    { 
      feature: "Lifetime Access", 
      futureLern: true, 
      duolingo: false, 
      youtube: true, 
      localTutor: false 
    }
  ];
  
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Why Choose FuturLern?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how our platform compares to other learning methods and discover why we're the most effective way to master German.
          </p>
        </motion.div>
        
        <div className="overflow-x-auto glass-panel rounded-xl">
          <table className="w-full min-w-[768px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-gray-300 font-medium">Features</th>
                <th className="py-4 px-6 text-primary-500 font-orbitron font-bold">FuturLern</th>
                <th className="py-4 px-6 text-gray-300 font-medium">Duolingo</th>
                <th className="py-4 px-6 text-gray-300 font-medium">YouTube</th>
                <th className="py-4 px-6 text-gray-300 font-medium">Local Tutor</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {row.futureLern ? (
                      <CheckCircle size={20} className="text-primary-500 mx-auto" />
                    ) : (
                      <XCircle size={20} className="text-gray-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.duolingo ? (
                      <CheckCircle size={20} className="text-success-500 mx-auto" />
                    ) : (
                      <XCircle size={20} className="text-gray-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.youtube ? (
                      <CheckCircle size={20} className="text-success-500 mx-auto" />
                    ) : (
                      <XCircle size={20} className="text-gray-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.localTutor ? (
                      <CheckCircle size={20} className="text-success-500 mx-auto" />
                    ) : (
                      <XCircle size={20} className="text-gray-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;