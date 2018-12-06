// Import packages
import express from 'express';
import routes from './routes/routes';
// App
const app = express();

app.use(express.json());
app.use(routes);

// Starting server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at port ${port}....`));

export default app;
