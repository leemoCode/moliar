
export function useTemplate() {

  const msg = 'useTemplate';

  const loadToast = () => {
    console.log(msg);
  };

  return {
    msg,
    loadToast,
  }

}