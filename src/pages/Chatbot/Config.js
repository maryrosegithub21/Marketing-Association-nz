import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "MyChatBot",
  initialMessages: [createChatBotMessage("Hi, how can I help you?")],
};

export default config;
