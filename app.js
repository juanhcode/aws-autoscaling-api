const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hola desde la instancia: ${os.hostname()}`);
});

// Endpoint que consume CPU para simular carga
app.get('/heavy', (req, res) => {
    let count = 0;
    for (let i = 0; i < 1e9; i++) {
        count += i;
    }
    res.send("Carga pesada procesada 🚀");
});

app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

app.listen(3000,'0.0.0.0', () => {
    console.log("API corriendo en puerto 3000");
});
