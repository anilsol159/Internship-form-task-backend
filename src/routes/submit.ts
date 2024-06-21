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

export const submitRouter = Router();

submitRouter.post('/', (req, res) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };

  const dbPath = path.join(__dirname, '../db.json');
  const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8')) as Submission[];

  dbData.push(newSubmission);

  fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

  res.json({ success: true });
});
