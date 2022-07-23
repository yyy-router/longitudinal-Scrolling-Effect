##### 该仓库实现了经典纵向滚动网页效果，并附带指示器

> 本项目使用vite热启动，使用方法：
>
> ```
> 克隆项目到本地；
> 进入项目根目录；
> npm install;
> npm run dev。
> ```

> 基本实现原理
>
> ```
> 使用大盒子container，包裹几个slider小盒子。溢出隐藏，通过使用js动态切换container的top值来实现视图的切换；
> 指示器使用ul嵌套li处理，并通过li的索引来推断出当前页面的索引，然后通过js绑定点击事件进行处理。
> ```

> 节流
>
> ```
> 为了解决鼠标滚轮事件触发过快的问题，使用了一个节流函数。
> 核心思想：根据前后两次 new Date().getTime()的数值不同，约束了最短的重复触发时间。
> ```
