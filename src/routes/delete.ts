import { Router } from 'express';
import fs from 'fs';
import path from 'path';

export const deleteRouter = Router();

deleteRouter.delete('/', (req, res) => {
  const index = parseInt(req.query.index as string, 10);

  const dbPath = path.join(__dirname, '../db.json');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  if (index >= 0 && index < dbData.length) {
    dbData.splice(index, 1);
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Submission not found' });
  }
});
