import Joi from 'joi';

export const textEmojiSchema = Joi.object({
  text: Joi.string().min(1).required(),
});

export const emojiTextSchema = Joi.object({
  emoji: Joi.string().min(1).required(),
});