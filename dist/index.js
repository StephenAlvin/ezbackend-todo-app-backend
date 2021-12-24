"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@ezbackend/common");
const openapi_1 = require("@ezbackend/openapi");
const cors_1 = require("@ezbackend/cors");
const app = new common_1.EzBackend();
//---Plugins---
//Everything is an ezapp in ezbackend
app.addApp(new openapi_1.EzOpenAPI());
app.addApp(new cors_1.EzCors());
//---Plugins---
const todo = new common_1.EzModel('Todo', {
    content: common_1.Type.VARCHAR,
});
app.addApp(todo, { prefix: 'todo' });
app.start({
    address: '0.0.0.0',
});
