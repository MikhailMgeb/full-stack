const express = require('express');
const app = express();
const PORT = 3000;
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const { first, second } = req.query;

    if (!first || !second) {
        res.send('нет GET парамметра');
        res.status(404);
    }

    res.send(`
    Получается <b>${Number(first) + Number(second)}</b>`);
})

app.listen(PORT, () => {
    console.log(`Приложение запущено и слушает порт ${PORT}`);
})