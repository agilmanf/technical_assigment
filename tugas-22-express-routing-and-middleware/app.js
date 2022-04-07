const express = require('express');
const app = express();
const PORT = 3000;

const hewan = [
    { id: 1, nama: 'Snowy', spesies: 'kucing' },
    { id: 2, nama: 'Blacki', spesies: 'anjing' },
    { id: 3, nama: 'Molly', spesies: 'kucing' },
    { id: 4, nama: 'Milo', spesies: 'kelinci' },
    { id: 5, nama: 'Rere', spesies: 'kucing' },
]

app.use(express.json());

// Middleware Logger
app.use((req, res, next) => {
    console.log(`Middle Logger : ${req.url}`);
    next();
})

//Middleware Post Checker
const postChecker = (req, res, next) => {
    const { spesies } = req.body;
    const acceptedSpesies = ['kucing', 'anjing', 'kelinci'];
    let isAccepted = false;

    acceptedSpesies.forEach(s => { if (s == spesies) isAccepted = true })

    if (isAccepted) {
        next();
    } else {
        res.status(400);
        res.json({ error: "Spesies not valid" });
    }
}

app.get('/hewan', (req, res) => {
    res.json({
        message: "success get data Pet",
        hewan
    });
})

app.get('/hewan/:id', (req, res) => {
    const { id } = req.params;
    const data = hewan.find(h => h.id == id);

    if (data) {
        res.json({
            message: "success get data Pet",
            data
        });
    } else {
        res.status(404);
        res.json({ error: 'data not found' })
    }
})

app.post('/hewan', postChecker, (req, res) => {
    const data = req.body;

    hewan.push(data);
    res.json({
        message: "success adding one pet",
        hewan
    });
})

app.put('/hewan/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const data = hewan.find(h => h.id == id);
    console.log(data)

    hewan.map(h => {
        if (h.id == id) {
            h.nama = newData.nama || h.nama;
            h.spesies = newData.spesies || h.spesies;
            h.id = newData.id || id
        }
    })

    if (data) {
        res.json({
            message: `success update data with id: ${id}`,
            newData
        });
    } else {
        res.status(404);
        res.json({ error: `update failed : data with id ${id} not found` })
    }
})

app.delete('/hewan/:id', (req, res) => {
    const { id } = req.params;
    const data = hewan.find(h => h.id == id);
    const dataIndex = hewan.findIndex(h => h.id == id);

    if (data) {
        hewan.splice(dataIndex, 1);
        res.json({
            message: "sucess delete one pet data",
            deletedData: data
        })
    } else {
        res.status(404);
        res.json({ error: 'data not found' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})