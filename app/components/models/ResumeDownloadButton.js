'use client';
import { useState, useEffect } from 'react';

import { ArrowDownToLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmailTerminal } from '../models/EmailTerminal';


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
            setIsOpen(false);
          }, 1500); // Wait 1.5 seconds after download before closing
      }, 8500); // Download at 5300ms, before the download message
    }
    
    return () => {
      if (downloadTimer) clearTimeout(downloadTimer);
    };
  }, [isOpen, downloadTriggered]);
  
  const downloadResume = () => {
    // Create and trigger download link
    const link = document.createElement('a');
    link.href = '/other/Resume_KyleTon.pdf'; // Update with your actual resume path
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Resume download triggered!');
  };

    return (
        <div className="font-sans">
            <Button onClick={openModal} className="bg-white text-black font-semibold py-2 px-4 lg:py-2 lg:px-5 border-2 border-black rounded-md 
                shadow-[3px_3px_0px_0px_black] hover:shadow-[1px_1px_0px_0px_white] hover:translate-x-[2px] 
                hover:translate-y-[2px] mt-6 hover:scale-[1.02] hover:bg-[#E9D7FF] transition-all">
                    <ArrowDownToLine />
                        my resume
            </Button>
          
          {isOpen && (
            <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center align-center z-50">
                <div className="p-10">
                  <EmailTerminal />
                </div>
            </div>
          )}
        </div>
      );
    }

