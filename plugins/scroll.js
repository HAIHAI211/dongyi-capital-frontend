import Vue from "vue";

// 简单的节流函数
function throttle(func, wait, mustRun) {
  let timeout;
  let startTime = new Date();

  return function() {
    let context = this;
    let args = arguments;
    let curTime = new Date();

    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait);
    }
  };
}

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        console.log("销毁滚动事件");
        window.removeEventListener("scroll", f);
      }
    };
    console.log("绑定滚动事件");
    // window.addEventListener('scroll',throttle(realFunc,500,1000));
    window.addEventListener("scroll", throttle(f, 150, 300));
  }
});
