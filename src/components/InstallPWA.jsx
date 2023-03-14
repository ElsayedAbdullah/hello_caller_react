import React, { useEffect, useState } from 'react';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log('we are being triggered :D');
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <>
      <button class='install-app d-none d-lg-flex' aria-label='Install app' title='Install app' onClick={onClick}>
        <svg class='flex-shrink-0' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.57201 21C8.90681 20.3598 10.4102 20 12.0002 20C13.5902 20 15.0936 20.3598 16.4284 21M2.00098 12C2.00098 13.6802 2.00019 14.7202 2.32718 15.362C2.6148 15.9265 3.07374 16.3854 3.63822 16.673C4.27996 17 5.12004 17 6.80019 17H17.2002C18.8804 17 19.7204 17 20.3622 16.673C20.9267 16.3854 21.3856 15.9265 21.6732 15.362C22.0002 14.7202 22.0002 13.8802 22.0002 12.2V7.8C22.0002 6.11984 22.0002 5.27976 21.6732 4.63803C21.3856 4.07354 20.9267 3.6146 20.3622 3.32698C19.7204 3 18.8804 3 17.2002 3H12.0002' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M2 6L6 10M6 10L10 6M6 10V2' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>

        <span>Install Hello</span>
      </button>

      <button class='install-app d-lg-none' aria-label='Install app' title='Install app' onClick={onClick}>
        <svg class='flex-shrink-0' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12 17.5H12.01M12 2H15.8C16.9201 2 17.4802 2 17.908 2.21799C18.2843 2.40973 18.5903 2.71569 18.782 3.09202C19 3.51984 19 4.07989 19 5.2V18.8C19 19.9201 19 20.4802 18.782 20.908C18.5903 21.2843 18.2843 21.5903 17.908 21.782C17.4802 22 16.9201 22 15.8 22H8.2C7.07989 22 6.51984 22 6.09202 21.782C5.71569 21.5903 5.40973 21.2843 5.21799 20.908C5 20.4802 5 19.9201 5 18.8V14M12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='M1 5L5 9M5 9L9 5M5 9V1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>

        <span>Add Hello to Home Screen</span>
      </button>
    </>
  );
};

export default InstallPWA;
