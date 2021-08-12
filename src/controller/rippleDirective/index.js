import BezierEasing from 'bezier-easing';

const DEFAULT__SCALE__DURATION = 300;
const DEFAULT__OPACITY__ENTER__DURATION = 217;
const DEFAULT__OPACITY__LEAVE__DURATION = 150;

export default {
  bind(el, binding, vnode) {
    /*
      binding.value: Boolean | Object
      {
        color：| String | 水波纹的颜色 | rgba($color: #000000, $alpha: 0.03) |
        scaleDuration: 400ms,
        opacityEnterDuration: 217ms
        opacityLeaveDuration: 150ms,
        radius：| Number | 水波纹大小
        circle: | Boolean | 水波纹容器是否为圆，默认为矩形 | false |
        delay: false
      }
    */
    const vm = vnode.context;
    updateRipple(el, binding, false, vm);
  },
  unbind(el) {
    delete el._ripple;
    removeListener(el);
  },
  update(el, binding, vnode) {
    /* istanbul ignore else */
    if (binding.value === binding.oldValue) {
      return;
    }
    const vm = vnode.context;
    updateRipple(el, binding, !!binding.oldValue, vm);
  },
};

const LAZY_TIME = 44;

function updateRipple(el, binding, wasEnabled, vm) {
  el._ripple = el._ripple || {};
  const value = binding.value || {};
  el._ripple.vm = vm;
  /* istanbul ignore else */
  if (value.color) {
    el._ripple.color = value.color;
  } else {
    el._ripple.color =
      vm.$dark && vm.$dark.isDark
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.03)';
  }
  /* istanbul ignore else */
  if (value.circle) {
    el._ripple.circle = value.circle;
  }
  el._ripple.scaleDuration = value.scaleDuration
    ? value.scaleDuration
    : DEFAULT__SCALE__DURATION;
  el._ripple.opacityEnterDuration = value.opacityEnterDuration
    ? value.opacityEnterDuration
    : DEFAULT__OPACITY__ENTER__DURATION;
  el._ripple.opacityLeaveDuration = value.opacityLeaveDuration
    ? value.opacityLeaveDuration
    : DEFAULT__OPACITY__LEAVE__DURATION;
  /* istanbul ignore else */
  if (value.radius) {
    el._ripple.radius = value.radius;
  }
  /* istanbul ignore else */
  if (value.delay) {
    el._ripple.delay = value.delay;
  }
  el._ripple.rippleList = el._ripple.rippleList || [];
  const enabled = !!binding.value;
  el._ripple.enabled = enabled;
  if (enabled && !wasEnabled) {
    el.addEventListener('touchstart', rippleShow, { passive: true });
    el.addEventListener('touchmove', rippleCheckTouch, { passive: true });
    el.addEventListener('touchend', rippleHide, { passive: true });
    el.addEventListener('touchcancel', rippleHide);

    el.addEventListener('mousedown', rippleShow);
    el.addEventListener('mouseup', rippleHide);
    el.addEventListener('mouseleave', rippleHide);
  } else if (!enabled && wasEnabled) {
    removeListener(el);
  }
}

function rippleShow(event) {
  const element = event.currentTarget;
  /* istanbul ignore else */
  if (
    !element ||
    !element._ripple ||
    element._ripple.touched ||
    !element._ripple.enabled
  ) {
    return;
  }
  if (isTouchEvent(event)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    /* istanbul ignore else */
    if (element._ripple.isTouch) return;
  }
  const { width, height, x, y, radius } = calc(event, element);
  // 创建ripple，始终居中。
  const ripple = document.createElement('div');
  ripple.classList.add('color-ripple__container');
  ripple.setAttribute('data-dark-exclude-tree', '');
  const rippleWidth = element._ripple.radius
    ? element._ripple.radius * 2
    : Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) * 2;
  const rippleOffsetLeft = -(rippleWidth - width) / 2;
  const rippleOffsetTop = -(rippleWidth - height) / 2;

  /* istanbul ignore else */
  if (element._ripple.circle) {
    ripple.style.width = rippleWidth + 'px';
    ripple.style.height = rippleWidth + 'px';
    ripple.style.left = rippleOffsetLeft + 'px';
    ripple.style.top = rippleOffsetTop + 'px';
    ripple.style.borderRadius = '50%';
  }

  // 初始半径和半径比值，wave半径略大于ripple直径
  const initRadius = (rippleWidth / 2) * 0.28;
  const scaleFactor = radius / initRadius;
  // 创建wave
  const wave = document.createElement('span');
  wave.classList.add('color-ripple__wave');
  if (element._ripple.color) {
    wave.style.backgroundColor = element._ripple.color;
  }

  // 设置初始大小
  wave.style.width = initRadius * 2 + 'px';
  wave.style.height = initRadius * 2 + 'px';

  // 设置涟漪中心点
  let centerX = x - initRadius;
  let centerY = y - initRadius;
  let translateX = 0;
  let translateY = 0;
  /* istanbul ignore else */
  if (element._ripple.circle) {
    centerX -= rippleOffsetLeft;
    centerY -= rippleOffsetTop;
    translateY = height / 2 - y;
    translateX = width / 2 - x;
  }
  wave.style.left = `${centerX}px`;
  wave.style.top = `${centerY}px`;

  ripple._wave = wave;
  ripple.appendChild(wave);
  element._ripple.touchTimeout = setTimeout(
    () => {
      ripples.show(element, ripple, {
        translateX,
        translateY,
        scaleFactor,
      });
    },
    element._ripple.delay ? LAZY_TIME : 0
  );
}

function rippleHide(event) {
  const element = event.currentTarget;
  setTimeout(() => {
    /* istanbul ignore else */
    if (element._ripple) {
      element._ripple.touched = false;
      const lastRipple = element._ripple.rippleList.pop();
      /* istanbul ignore else */
      if (lastRipple) lastRipple.element._touched = false;
    }
    setTimeout(() => {
      const ripples = element.getElementsByClassName('color-ripple__container');
      /* istanbul ignore else */
      if (ripples.length === 0 && element.dataset.previousPosition) {
        element.style.position = element.dataset.previousPosition;
        delete element.dataset.previousPosition;
      }
    }, 500);
  }, LAZY_TIME);
}

function rippleCheckTouch(event) {
  const element = event.currentTarget;
  if (element._ripple && element._ripple.delay) {
    window.clearTimeout(element._ripple.touchTimeout);
    element._ripple.touchTimeout = null;
  }
}

function isTouchEvent(event) {
  return event.type === 'touchstart';
}

const ripples = {
  show(element, ripple, options) {
    if (!element || !element._ripple) {
      return;
    }
    // 设置ripple父容器的position
    const computed = window.getComputedStyle(element);
    /* istanbul ignore else */
    if (computed && computed.position === 'static') {
      element.style.position = 'relative';
      element.dataset.previousPosition = 'static';
    }

    element._ripple.touched = true;
    element.appendChild(ripple);
    ripple._touched = true;

    let { scaleDuration, opacityEnterDuration, opacityLeaveDuration } =
      element._ripple;
    element._ripple.rippleList.push({
      element: ripple,
      scale: createAnimation({
        duration: scaleDuration,
        element,
        ripple,
        update: (progress) => {
          const { translateX, translateY, scaleFactor } = options;
          ripple._wave.style.transform = `translate(${
            bezier(progress) * translateX
          }px, ${bezier(progress) * translateY}px) scale(${
            bezier(progress) * scaleFactor
          })`;
        },
        done: () => {
          createAnimation({
            element,
            ripple,
            duration: opacityLeaveDuration,
            update: (progress) => {
              ripple._wave.style.opacity = 1 - bezier(progress);
            },
            done: () => {
              element.removeChild(ripple);
            },
          });
        },
      }),
      opacity: createAnimation({
        duration: opacityEnterDuration,
        element,
        ripple,
        update: (progress) => {
          ripple._wave.style.opacity = bezier(progress);
        },
      }),
    });
  },
};

function calc(event, element) {
  const { width, height, top, left } = element.getBoundingClientRect();
  const target = isTouchEvent(event)
    ? event.touches[event.touches.length - 1]
    : event;

  const x = target.clientX - left;
  const y = target.clientY - top;

  let radius = 0;
  if (element._ripple && element._ripple.circle) {
    radius = element._ripple.radius
      ? element._ripple.radius
      : Math.ceil(Math.sqrt((width / 2) ** 2 + (height / 2) ** 2));
  } else {
    radius = element._ripple.radius
      ? element._ripple.radius
      : Math.sqrt(
          (width / 2 + Math.abs(x - width / 2)) ** 2 +
            (height / 2 + Math.abs(y - height / 2)) ** 2
        );
  }

  return { width, height, radius, x, y };
}

function removeListener(el) {
  el.removeEventListener('touchstart', rippleShow);
  el.removeEventListener('touchmove', rippleCheckTouch);
  el.removeEventListener('touchend', rippleHide);
  el.removeEventListener('touchcancel', rippleHide);
  el.removeEventListener('mousedown', rippleShow);
  el.removeEventListener('mouseup', rippleHide);
  el.removeEventListener('mouseleave', rippleHide);
}

function createAnimation({ duration, update, done, element, ripple }) {
  let start = 0;
  let diff = 0;
  let progress = 0;
  let animationId = 0;

  done =
    typeof done === 'function'
      ? done
      : function () {
          console.log('111');
        };

  function stopAnimation() {
    cancelAnimationFrame(animationId);
    animationId = 0;
  }

  animationId = requestAnimationFrame(function _animation(timestamp) {
    if (!start) start = timestamp;
    diff = timestamp - start;
    progress = Math.min(diff / duration, 1);
    update(progress);
    /* istanbul ignore else */
    if (timestamp < start + duration) {
      animationId = requestAnimationFrame(_animation);
      return;
    }

    if ((element._ripple && !element._ripple.touched) || !ripple._touched) {
      stopAnimation();
      done();
    } else {
      animationId = requestAnimationFrame(_animation);
    }
  });
}

function bezier(x) {
  return BezierEasing(0.33, 0, 0.67, 1)(x);
}
