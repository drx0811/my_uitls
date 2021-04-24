import {customRef} from 'vue'
function useDebouncedRef<T>(value: T, delay: number = 2000) {
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value
      },
      set(val) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
          value = val;
          trigger();
        }, delay)
      }
    }
  })
}
export default {
  setup(){
    const keyword = useDebouncedRef('abc', 1000);
  }
}
