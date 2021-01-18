const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

// Default response for any other request(Not Found) Catch all
// This will override the other routes so make sure it goes last and doesn't.
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});