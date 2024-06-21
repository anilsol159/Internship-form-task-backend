import { Router } from 'express';
import fs from 'fs';
import path from 'path';

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

export const editRouter = Router();

editRouter.put('/', (req, res) => {
  const index = parseInt(req.query.index as string, 10);
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  const updatedSubmission: Submission = { name, email, phone, github_link, stopwatch_time };

  const dbPath = path.join(__dirname, '../db.json');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8')) as Submission[];

  if (index >= 0 && index < dbData.length) {
    dbData[index] = updatedSubmission;
    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Submission not found' });
  }
});
