## vite 可能出现的this指向的问题
> 比如之前版本的antd，里面会用到一些this来执行window，
但是vite启动之后用的是<script type="module">，这会造成这些this指向错误
表现就是modal打开后关不掉
>
解决办法 我后来换的material-ui
