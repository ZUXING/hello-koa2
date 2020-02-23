// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
/*
	什么是ctx：https://www.jianshu.com/p/a4fdfdf93472
	ctx是context的简称，你可以把ctx理解为浏览器内容的框。
*/
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

/*
	廖老师把一个async代码块称作一个middleware
	这样设计的好处是结构化开发，虽然我还没感觉到怎么个结构化……
*/
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');