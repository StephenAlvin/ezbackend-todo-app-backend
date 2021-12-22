import {EzBackend, EzModel, Type} from '@ezbackend/common'
import { EzOpenAPI } from "@ezbackend/openapi";
import { EzDbUI } from "@ezbackend/db-ui";
import { EzCors } from "@ezbackend/cors";
const app = new EzBackend()
//---Plugins---
//Everything is an ezapp in ezbackend
app.addApp(new EzOpenAPI())
app.addApp(new EzCors())
//---Plugins---
const todo = new EzModel('Todo', {
  content: Type.VARCHAR,
})

app.addApp(todo, { prefix: 'todo' })

app.start()