import { Router } from 'express';
import fs from 'fs';
import path from 'path';

export const searchRouter = Router();

searchRouter.get('/', (req, res) => {
  const email = req.query.email as string;

  const dbPath = path.join(__dirname, '../db.json');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  const result = dbData.filter((submission: { email: string }) => submission.email === email);

  if (result.length > 0) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'No submissions found for the given email' });
  }
});
