/* koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım. */
const Koa = require('koa');
const app = new Koa();
const port = 3000;
const Router = require('koa-router');
const router = new Router();
router.get('/', ctx => {
    ctx.status = 200;
    ctx.body = "<h1>Welcome to Index Page</h1>"
});
router.get("/about", ctx => {
    ctx.status = 200;
    ctx.body = "<h1>Welcome to About Page</h1>"
});
router.get("/contact", ctx => {
    ctx.status = 200;
    ctx.body = "<h1>Welcome to Contact Page</h1>"
});
app.use(router.routes())
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
