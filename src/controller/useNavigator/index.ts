
export function useNavigator() {

  const msg = 'useNavigator';

  const loadToast = () => {
    console.log(msg);
  };

  return {
    msg,
    loadToast,
  }

}