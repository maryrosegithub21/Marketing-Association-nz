import React from 'react'
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider';
// / === To applied the style you have to import this === //
import styles from './Chatbot.module.css'
// === To applied the style you have to import this === //
export default function ChatBot() {
  return (
    <div className={styles.containerChat} >
        
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>

    </div>
  )
}
