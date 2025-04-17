import { Router } from 'express';

import { home, emojiToText, textToEmoji } from '../controllers/textEmoji';
import { validateBody } from '../middlewares/validate';
import {
  textEmojiSchema,
  emojiTextSchema,
} from '../validators/textEmojiValidator';

const router = Router();

router.get('/', home);
router.post('/emoji-to-text', validateBody(emojiTextSchema), emojiToText);
router.post('/text-to-emoji', validateBody(textEmojiSchema), textToEmoji);

export default router;
