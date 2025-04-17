import express from 'express';
import { errorHandler } from './middlewares/errorHandler';

import textEmojiRoutes from "./routes/textEmoji";

const app = express();

app.use(express.json());

app.use("/", textEmojiRoutes);

app.use(errorHandler);

export default app;