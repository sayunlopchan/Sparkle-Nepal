import React, { useEffect, useRef } from 'react';
import SuccessIcon from '../../assets/icons/success-icon.svg';
import FailedIcon from '../../assets/icons/failed-icon.svg';

const AlertBox = ({ status = 'success', title, message }) => {
  const progressRef = useRef(null);
  const alertConfig = {
    success: {
      icon: SuccessIcon,
      defaultTitle: 'Thank you!',
      defaultMessage: 'Your submission has been sent',
      color: 'bg-green-500',
    },
    error: {
      icon: FailedIcon,
      defaultTitle: 'Oops! Something went wrong',
      defaultMessage: 'Please try again later',
      color: 'bg-red-500',
    },
  };

  const { icon, defaultTitle, defaultMessage, color } = alertConfig[status] || alertConfig.success;

  // Animation for progress bar
  useEffect(() => {
    if (progressRef.current) {
      // Reset width to 0% initially
      progressRef.current.style.width = '0%';

      // Force a reflow to ensure the transition works
      progressRef.current.offsetHeight;

      // Animate to 100% width
      progressRef.current.style.width = '100%';
    }
  }, []);

  return (
    <div className='relative bg-white flex flex-col items-center justify-center p-20 text-center rounded-lg gap-5'>
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 rounded-b-lg overflow-hidden">
        <div
          ref={progressRef}
          className={`${color} h-full transition-all duration-[5000ms] ease-linear`}
          style={{ width: '0%' }}
        />
      </div>

      {/* Alert Content */}
      <img
        src={icon}
        alt={`${status} Icon`}
        className='w-[160px]'
      />
      <div className='text-gray-700'>
        <h2 className='text-lg font-bold'>{title || defaultTitle}</h2>
        <p>{message || defaultMessage}</p>
      </div>
    </div>
  );
};

export default AlertBox;