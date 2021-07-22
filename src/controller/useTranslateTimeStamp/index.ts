export const padStart = (single: number): string => {
  return single >= 10 ? '' + single : '0' + single;
};
export const translateTimeStamp = function (timestamp: number): string | null {
  const nowTime = Math.floor(Date.now() / 1000);
  const publishTime = Math.floor(timestamp);
  const diff = nowTime - publishTime;

  const day = Math.floor(diff / 86400);
  const hour = diff % 86400;
  const hours = Math.floor(hour / 3600);
  const minute = hour % 3600;
  const minutes = Math.floor(minute / 60);
  // const second = minute % 60;
  // const seconds = Math.floor(second);

  const s = new Date(publishTime * 1000);
  const y = s.getFullYear();
  const M = s.getMonth() + 1;
  const d = s.getDate();
  const h = s.getHours();
  const m = s.getMinutes();

  /**
   * n 天前
   */
  // const days = Math.floor(diff / 86400);
  // if (publishTime < getTodayZero().getTime() / 1000) {
  //   days++;
  // }

  const nowDate = Math.floor(new Date().getDate());
  const publishDate = Math.floor(new Date(publishTime * 1000).getDate());
  const thisYear = Math.floor(new Date().getFullYear());
  const publishYear = Math.floor(new Date(publishTime * 1000).getFullYear());

  const tasks = [
    function () {
      if (day > 1) {
        if (thisYear !== publishYear) {
          return y + '年' + M + '月' + d + '日';
        } else {
          return M + '月' + d + '日';
        }
      }

      return null;
    },

    function () {
      if (day > 0 && day <= 1) {
        if (nowDate === publishDate + 1) {
          return '昨天 ' + padStart(h) + ':' + padStart(m);
        } else {
          return '前天 ' + padStart(h) + ':' + padStart(m);
        }
      }

      return null;
    },

    function () {
      if (day <= 0 && hours > 3) {
        if (nowDate === publishDate) {
          return '今天 ' + padStart(h) + ':' + padStart(m);
        } else {
          return '昨天 ' + padStart(h) + ':' + padStart(m);
        }
      }

      return null;
    },

    function () {
      if (day <= 0 && hours > 0 && hours <= 3) {
        return hours + ' 小时前';
      }

      return null;
    },

    function () {
      if (day <= 0 && hours <= 0 && minutes > 5) {
        return minutes + ' 分钟前';
      }

      return null;
    },

    function () {
      if (day <= 0 && hours <= 0 && minutes <= 5) {
        return '刚刚';
      }

      return null;
    },
  ];

  for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
    const result = task();

    if (result) {
      return result;
    }
  }

  return null;
};
