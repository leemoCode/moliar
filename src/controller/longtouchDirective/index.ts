import { ref, Directive, DirectiveBinding } from 'vue';

interface EventInterface {
  changeStyle?: (state: boolean) => void;
  longTouchEvent?: () => void;
  clickEvent?: () => void;
  isScrolling?: () => boolean;
}

const longLock = ref(false);
const timeoutId = ref(0);
const touchTime = 250;
const antiTouchDistanse = 30;

const touchStartclientY = ref(0);
const touchEndclientY = ref(0);

const useTouchEvent = (el: Element, event: EventInterface) => {
  const onTouchStart = () => {
    event.changeStyle && event.changeStyle(true);

    touchStartclientY.value = el.getBoundingClientRect().y;

    clearTimeout(timeoutId.value);
    timeoutId.value = window.setTimeout(async () => {
      const isScrolling = ref(false);

      if (event && event.isScrolling) {
        isScrolling.value = await event.isScrolling();
        console.log('isScrolling:', isScrolling.value);
      }

      touchEndclientY.value = el.getBoundingClientRect().y;

      if (
        Math.abs(touchStartclientY.value - touchEndclientY.value) <= antiTouchDistanse &&
        !isScrolling.value
      ) {
        longLock.value = true;

        event.longTouchEvent && event.longTouchEvent();
      }

      event.changeStyle && event.changeStyle(false);
    }, touchTime);
  };

  const onTouchMove = () => {
    event.changeStyle && event.changeStyle(false);

    if (!longLock.value) {
      clearTimeout(timeoutId.value);
      timeoutId.value = 0;
    }
  };

  const onTouchEnd = () => {
    event.changeStyle && event.changeStyle(false);

    touchEndclientY.value = el.getBoundingClientRect().y;

    if (
      timeoutId.value != 0 &&
      !longLock.value &&
      Math.abs(touchStartclientY.value - touchEndclientY.value) <= antiTouchDistanse
    ) {
      event.clickEvent && event.clickEvent();
    }

    clearTimeout(timeoutId.value);
    longLock.value = false;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

const initLongTouch = (el: Element, binding: DirectiveBinding) => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchEvent(
    el,
    binding.instance as EventInterface,
  );

  el.addEventListener('touchstart', onTouchStart);
  el.addEventListener('touchmove', onTouchMove);
  el.addEventListener('touchend', onTouchEnd);
};

const uninstallLongTouch = (el: Element, binding: DirectiveBinding) => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchEvent(
    el,
    binding.instance as EventInterface,
  );

  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchmove', onTouchMove);
  el.removeEventListener('touchend', onTouchEnd);
};

export const longtouchDirective: Directive = {
  mounted: initLongTouch,
  unmounted: uninstallLongTouch,
};
