export interface LongTouchEventInterface {
  changeStyle?: (state: boolean) => void;
  longTouchEvent?: () => void;
  clickEvent?: () => void;
  isScrolling?: () => boolean;
}