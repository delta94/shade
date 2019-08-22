import { useEffect } from 'react';

/**
 * Custom Hook to listen outside click event
 * Main usecase is to detect outside click
 * and hide dropdown
 * @param {ref} element whose click measured as inside click
 * @param {callback} function trigger if click outside of the ref element
 */
const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

export default useOutsideClick;
