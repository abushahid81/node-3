const http = require('http');

const homeController = require('./Controller/homeController');
const userController = require('./Controller/userController');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        homeController.home(req, res);
    }else if(req.url.includes('/users')){
   try{
if (req.method == 'GET'){
    userController.getUsers(req, res);
}else{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(
        JSON.stringify({
            code: 405,
            remark: 'Method not allowed'
        })
    )
}
   }catch(e){
    console.log(e);
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(
        JSON.stringify({
            code: 500,
            remark: 'Internal server error',
            data: null,
            error: e
        })
    );
   }
    }
});

const PORT = 5001 ;
server.listen(PORT, ()=> {
    console.log(`Server listen on ${PORT}`);
})