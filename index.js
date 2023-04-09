const fastify = require('fastify')
//ทำการประกาศตัวแปร fastify และเก็บ Log 
//ทำการสร้างไฟล์ Env และใส่ branch => development ด้วยคำสั่งด้นาล่าง 
const nodeEnv = process.env.NODE_ENV || 'development'
const app = fastify({
    logger: true
})

app.get('/', async() =>{
    return{
        status: 'OK',
        status: 'run on node',
        nodeEnv,
        
    }
})

app.listen(3000, '0.0.0.0')