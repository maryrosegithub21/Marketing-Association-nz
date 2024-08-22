import React, { useEffect, useState } from 'react';
import ReactWebChat from 'botframework-webchat';
import { DirectLine } from 'botframework-directlinejs';

import styles from './../Chatbot/Chatbot.module.css'

const WebChat = () => {
  const [directLine, setDirectLine] = useState(null);

  useEffect(() => {
    const directLine = new DirectLine({
      secret: '6635b271cf3c466bb87957cb1726d71c'
    });
    setDirectLine(directLine);
  }, []);

  return (
    <div  className={styles.containerChat} >
      {directLine ? <ReactWebChat directLine={directLine} /> : <div>Loading...</div>}

     
    </div>

    // <iframe src='https://webchat.botframework.com/embed/turnerchatbot?s=Hc7yJWwyODI.RmyNzIYaJbY_d9LMnCfaD6lvRwtNInx4DUSTFaE4hm8'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
  );
};

export default WebChat;
