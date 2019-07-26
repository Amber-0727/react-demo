const config = require('./config');
const jsonServer = require('json-server');
const rules = require('./routes');
const dbfile = require(config.DB_FILE);

const ip = config.SERVER;
const port = config.PORT;
const db_file = config.DB_FILE;
// Express server
const server = jsonServer.create();
// JSON Server router
const router = jsonServer.router(dbfile());
// 中间件
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
// 重写路由
server.use(jsonServer.rewriter(rules));
// 设置增加一个响应头信息“从server到前端”
server.use((req, res, next) => {
 res.header('X-Hello', 'World');
 next();
})
// 数据发送到前端之前包一层
router.render = (req, res) => {
    res.jsonp({
        code: 0,
        body: res.locals.data
    })
}

server.use(jsonServer.rewriter(rules));
server.use(router);

server.listen({
    host: ip,
    port: port,
}, function() {
    console.log(JSON.stringify(jsonServer));
    console.log(`JSON Server is running in http://${ip}:${port}`);
});