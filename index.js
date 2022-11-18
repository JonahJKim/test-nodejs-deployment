const express = require('express')

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send({
        result: "true"
    })
})

app.listen(3001, () => {
    console.log("Server is up on port 3001");
})