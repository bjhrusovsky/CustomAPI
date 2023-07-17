const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json() )

app.get('/yonko', (req, res) => {
    res.status(200).send({
        bestYonko: 'Big Mom',
        devilFruit: 'Soru Soru No Mi'

    })
});

app.post('/yonko/:age', (req, res) => {
    const { age } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }
    res.send({
        bestYonko: `Big mom is the best with a jolly roger of ${logo} and age of: ${age}`,
    })
});
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)