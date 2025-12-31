import React from 'react';
import GlitchText from '../components/GlitchText';
import ShatteredCard from '../components/ShatteredCard';
import { CERTIFICATIONS_DATA, SOCIAL_LINKS } from '../constants';
import { Download, Award, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const handleDownloadCV = () => {
    // Trigger download of the static PDF file
    // NOTE: Ensure 'Chirag_Koyande_Resume.pdf' exists in your public/root directory
    const link = document.createElement('a');
    link.href = '/Chirag_Koyande_Resume.pdf';
    link.download = 'Chirag_Koyande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full flex flex-col items-center pt-24 pb-64 px-4 overflow-y-auto">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        
        {/* Top Section: Profile & Bio */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          
          {/* Profile Image Simulation */}
          <div className="relative w-full md:w-64 h-64 shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 border-2 border-green-500/30 rotate-3 animate-[pulse_4s_infinite]"></div>
            <div className="absolute inset-0 border-2 border-purple-500/30 -rotate-3 animate-[pulse_3s_infinite_reverse]"></div>
            <div className="absolute inset-2 bg-black overflow-hidden grayscale contrast-125 brightness-75 group">
               {/* Using a placeholder */}
               <img src="https://picsum.photos/seed/chirag/400/400?grayscale" alt="Chirag Koyande" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
               {/* Facial Recog Overlay */}
               <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-green-500/80"></div>
               <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-green-500/80"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6 w-full">
             <ShatteredCard>
                <div className="flex justify-between items-start mb-4">
                  <GlitchText text="CHIRAG_KOYANDE" as="h2" className="text-2xl font-display font-bold text-green-400" />
                  <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">IT_ENG_STUDENT</span>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    <span className="text-purple-400 mr-2">{'>'}</span> 
                    I am a <span className="text-white font-bold">Builder + Breaker</span>. Unlike typical freshers who focus only on surface-level development, I build production-grade full-stack systems and understand exactly how to secure them.
                  </p>
                  <p>
                    <span className="text-purple-400 mr-2">{'>'}</span> 
                    My mindset aligns with DevSecOps: I design features, deploy them, analyze their attack surface, and harden them against real threats.
                  </p>
                  <p>
                     <span className="text-purple-400 mr-2">{'>'}</span> 
                     Currently bridging the gap between <span className="text-white">React/Node.js</span> development and <span className="text-white">Security/Forensics</span>.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-gray-500 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1"><Terminal size={12}/> STUDENT: BHARATI_VIDYAPEETH</div>
                  <div>FOCUS: SECURE_ENGINEERING</div>
                  <div>LOC: PUNE/MUMBAI</div>
                </div>
             </ShatteredCard>
          </div>
        </div>

        {/* Bottom Section: Certifications & CV */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Certs Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Award className="text-purple-400" size={24} />
              <GlitchText text="CREDENTIALS" as="h3" className="text-xl font-display font-bold text-white" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <ShatteredCard key={cert.id} intensity="low" className="group cursor-default">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-green-400 font-display text-sm group-hover:text-white transition-colors">
                      {cert.title}
                    </h4>
                    <span className={`text-[10px] px-1.5 py-0.5 border ${
                      cert.level === 'Expert' ? 'border-red-500/50 text-red-400' : 
                      'border-purple-500/50 text-purple-400'
                    }`}>
                      {cert.level.toUpperCase()}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between items-end text-xs font-mono text-gray-500">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </ShatteredCard>
              ))}
            </div>
          </div>

          {/* CV Download Column */}
          <div className="md:col-span-1 flex flex-col gap-4">
             <div className="flex items-center gap-3 mb-2">
              <Download className="text-green-400" size={24} />
              <GlitchText text="DATA_EXTRACTION" as="h3" className="text-xl font-display font-bold text-white" />
            </div>

            <ShatteredCard className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
              <p className="text-xs font-mono text-gray-400">
                INITIATE SECURE DOWNLOAD PROTOCOL TO RETRIEVE CHIRAG'S PROFILE.
              </p>
              
              <button 
                onClick={handleDownloadCV}
                className="group relative px-6 py-3 bg-green-900/20 border border-green-500/50 overflow-hidden w-full transition-all hover:bg-green-500/10 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20">
                   <div className="w-[200%] h-[200%] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#00ff00_10px,#00ff00_20px)] animate-[spin_4s_linear_infinite]"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center gap-2 text-green-400 font-display font-bold tracking-wider group-hover:text-green-300">
                  <Download size={18} />
                  <span>DOWNLOAD_CV</span>
                </div>
              </button>
              
              <div className="text-[10px] font-mono text-gray-600">
                FORMAT: .PDF (STATIC)<br/>
                SIZE: -- KB
              </div>
            </ShatteredCard>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;