/** Importing  [express and routes] into the app. */
import express from 'express';
import routes from './routes/routes';
/** Intializing express app. */
const app = express();

app.use(express.json());
app.use(routes);

/** serving up the app. */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at port ${port}....`));

export default app;
