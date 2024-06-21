import { Router } from 'express';
import fs from 'fs';
import path from 'path';

export const readRouter = Router();

readRouter.get('/', (req, res) => {
  const index = parseInt(req.query.index as string, 10);

  const dbPath = path.join(__dirname, '../db.json');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  if (index >= 0 && index < dbData.length) {
    res.json(dbData[index]);
  } else {
    res.status(404).json({ error: 'Submission not found' });
  }
});
