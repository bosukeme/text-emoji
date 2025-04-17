import { Request, Response, NextFunction } from 'express';
import * as emoji from 'node-emoji';


export const home = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Welcome to the Text to Emoji Service' });
};

export const emojiToText = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { emoji: emojiChar } = req.body;

    const found = emoji.find(emojiChar);

    if (!found) {
        res.status(400).json({ message: 'Failed', error: "Invalid input: Not a recognized emoji." });
        return;
    }
    
    res.status(200).json({ message: 'Success', data: found.key });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const textToEmoji = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { text } = req.body;

    const key = text.replace(/:/g, '');

    if (emoji.has(key)) {
      const found = emoji.get(key);
      res.status(200).json({ message: 'Success', data: found });
      return;
    } else {
        res
          .status(400)
          .json({
            message: 'Failed',
            error: 'Invalid input: No matching emoji found for text',
          });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
