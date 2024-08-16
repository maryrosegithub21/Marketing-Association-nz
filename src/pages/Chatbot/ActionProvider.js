
// ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you today?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
    howToBuy() {
      const message = this.createChatBotMessage("How to Buy a Car FAQs");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;