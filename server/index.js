const app = require('./app');
const port = 3000;

app.listen(port,() => {
    console.log(`Dummy Google server listening at http://localhost:${port}`)
});