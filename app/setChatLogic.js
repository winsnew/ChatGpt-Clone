import { useState } from "react";
import { chatGptRes } from "./openai";

const useChatLogic = () => {
    const [messages, setMessages] = useState([]);
    const sendMessage = async (userMessage) => {
        console.log('Mengirim pesan pengguna:', userMessage);

        setMessages([...messages, {text: userMessage, type: 'user'}]);

        try {
            // Mendapatkan respons dari ChatGPT-4
            const response = await chatGptRes(userMessage);
      
            // Log setelah permintaan
            console.log('Respons dari ChatGPT-4:', response);
      
            // Menambahkan pesan respons ke tampilan chat
            setMessages([...messages, { text: response, type: 'gpt4' }]);
          } catch (error) {
            // Log jika terjadi kesalahan
            console.error('Kesalahan saat mendapatkan respons ChatGPT-4:', error);
          }
    }
    return {messages, sendMessage};
}

export default useChatLogic;