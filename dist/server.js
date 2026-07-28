
   import { createRequire } from 'module';
   const require = createRequire(import.meta.url);
    
import p from"express";var r=p();r.get("/",(c,n)=>{n.send("Server is running (changed)")});var o=r;import{configDotenv as i}from"dotenv";import{env as t}from"process";i();var f={NODE_ENV:t.NODE_ENV,PORT:t.PORT,DATABASE_URL:t.DATABASE_URL},e=f;e.NODE_ENV!=="production"&&o.listen(3e3,()=>{console.log("server is running on http://localhost:3000")});var d=o;export{d as default};
