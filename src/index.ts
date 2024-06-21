import express from 'express';
import bodyParser from 'body-parser';
import { pingRouter } from './routes/ping';
import { submitRouter } from './routes/submit';
import { readRouter } from './routes/read';
import { deleteRouter } from './routes/delete';
import { editRouter } from './routes/edit';
import { searchRouter } from './routes/search';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/ping', pingRouter);
app.use('/submit', submitRouter);
app.use('/read', readRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
