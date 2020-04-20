# 高性能 vuex 数据刷新保持

**说明**：vuex-persist 的缺点，每一次执行 store.commit，相当于操作 localStorage，返回操作 localStorage 和 sessionStorage 会使页面性能下降

**_优势_**:
1、只有在页面刷新的时候才把 state 的值存在 sessionStorage（localStorage），减少反复操作缓存，导致性能的下降，刷新完毕后，
自动清除留在 sessionStorage（localStorage）的数据

2、可配置 module，只将该 module 进行刷新保持
