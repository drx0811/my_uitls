### vue 中的dom操作;
> vue中有时候需要进行dom操作,比如 插入一个dom真实节点,在销毁的时候一定要手动移除

例子是:花裤衩中的右侧settings全局设置组件,我们通过ref找到组件的真实dom,然后在mounted中掺入,在beforeDestory的时候删除

