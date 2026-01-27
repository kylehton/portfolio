'use client';
import { useState, useEffect } from 'react';

import { ArrowDownToLine } from 'lucide-react';
import { Button } from '@/components/ui/resumebutton';
import { ResumeTerminal } from './ResumeTerminal';


// Main component that combines the anchor button and modal
export default function ResumeDownloadButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
    setDownloadTriggered(false);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };

  // Detect if user is on iOS (Safari is weird with downloads)
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };

  // Handle the resume download at the right moment
  useEffect(() => {
    let downloadTimer;
    let closeModalTimer;

    if (isOpen && !downloadTriggered) {
      // Set timer to download just before the final success message
      // This will happen around the time "Uploaded 1 file" appears
      downloadTimer = setTimeout(() => {
        downloadResume();
        setDownloadTriggered(true);
        closeModalTimer = setTimeout(() => {
            closeModal();
          }, 1500); // Wait 1.5 seconds after download before closing
      }, 8500); // Download at 5300ms, before the download message
    }
    
    return () => {
      if (downloadTimer) clearTimeout(downloadTimer);
    };
  }, [isOpen, downloadTriggered]);
  
  const downloadResume = () => {
    const resumePath = '/resume/Resume_SWE_KyleTon.pdf';
    if (isIOS()) {
      // For iOS devices, open in a new tab
      window.open(resumePath, '_blank');
      console.log('Resume opened in new tab for iOS!');
    } else {
      // For other devices, use the download method
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Resume_KyleTon.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Resume download triggered!');
    }
    
    console.log('Resume download triggered!');
  };

    return (
        <div className="font-sans">
            <Button onClick={openModal} className="bg-white text-black font-semibold py-2 px-4 lg:py-2 lg:px-5 border-2 border-black rounded-md 
                shadow-[3px_3px_0px_0px_black] hover:shadow-[1px_1px_0px_0px_white] hover:translate-x-[2px] 
                hover:translate-y-[2px] mt-6 hover:scale-[1.02] hover:bg-[#E9D7FF] transition-all">
                    <ArrowDownToLine className='' />
                        my resume
            </Button>
          
          {isOpen && (
            <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center align-center z-50">
                <div className="p-10">
                  <ResumeTerminal />
                </div>
            </div>
          )}
        </div>
      );
    }

