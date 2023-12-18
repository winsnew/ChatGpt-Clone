"use client";
import Gptlogo from "./assets/chatgptLogo.svg";
import GptLogos from "./assets/chatgpt.svg";
import AddLogo from "./assets/add-30.png";
import Message from "./assets/message.svg";
import Home from "./assets/home.svg";
import Send from "./assets/send.svg";
import Rocket from "./assets/rocket.svg";
import Bookmark from "./assets/bookmark.svg";
import UserIcon from "./assets/user-icon.png";

import { OpenAI } from "openai";
import { useState } from "react";
import Image from "next/image";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Mendapatkan pesan dari input
    const userMessage = inputMessage;

    // Menambahkan pesan pengguna ke state pesan
    setMessages([...messages, { role: 'user', content: userMessage }]);

    try {
      // Kirim pesan ke OpenAI API
      const response = await openai.completions.create({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userMessage },
        ],
        model: 'gpt-3.5-turbo-0613',
      });

      // Menambahkan jawaban dari OpenAI ke state pesan
      setMessages([
        ...messages,
        { role: 'assistant', content: response.data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error('Error:', error.message || error);
    }

    // Bersihkan input setelah mengirim pesan
    setInputMessage('');
  };

  const handleInputChange = (e) => {
    // Memperbarui state inputMessage saat pengguna mengetik
    setInputMessage(e.target.value);
  };
  return (
    <div class="flex h-screen antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <div class="flex-3 flex-col py-6 pl-0 pr-2  flex-shrink-0">
          <div class="flex flex-row items-center justify-center h-12 w-full">
            <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-300 h-10 w-10">
              <Image src={GptLogos} />
            </div>
            <div class="ml-2 font-bold text-2xl text-white">LPG4</div>
          </div>
          <div class="flex flex-col items-center  mt-4 w-full px-4">
            <button className="query flex text-slate-300 items-center justify-center bg-transparent p-2 border-2 border-solid border-gray-700 rounded-lg my-2 mx-auto">
              <Image src={Message} className="mr-8 object-cover" />
              What Is Programming?
            </button>
            <button className="query flex text-slate-300 items-center justify-center bg-transparent p-2 border-2 border-solid border-gray-700 rounded-lg my-2 mx-auto">
              <Image src={Message} className="mr-8 object-cover" />
              What Is Programming?
            </button>
          </div>
          <div class="flex flex-col mt-auto">
            <div className="listitem m-2 flex text-white items-center text-xl">
              <Image src={Home} className="listitemimage m-4 mr-4" />
              Home
            </div>
            <div className="listitem m-2 flex text-white items-center text-xl">
              <Image src={Bookmark} className="listitemimage m-4 mr-6" />
              BookMark
            </div>
            <div className="listitem m-2 flex text-white items-center text-xl">
              <Image src={Rocket} className="listitemimage m-4 mr-4" />
              Upgrade
            </div>
          </div>
        </div>
        {/* Main */}
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-transparent h-full p-4">
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        AI
                      </div>
                      {messages.map((msg, index) => (
                        <div
                          key={index}
                          className={`col-start-1 col-end-8 p-3 rounded-lg ${
                            msg.role === "user" ? "bg-white" : "bg-indigo-100"
                          }`}
                        >
                          <div className="flex flex-row items-center">
                            <div
                              className={`flex items-center justify-center h-10 w-10 rounded-full ${
                                msg.role === "user"
                                  ? "bg-indigo-500"
                                  : "bg-indigo-300"
                              } flex-shrink-0`}
                            >
                              {msg.role === "user" ? "U" : "A"}
                            </div>
                            <div
                              className={`relative ml-3 text-sm py-2 px-4 shadow rounded-xl ${
                                msg.role === "user"
                                  ? "bg-white"
                                  : "bg-indigo-100"
                              }`}
                            >
                              <div>{msg.content}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div class="flex items-center justify-start flex-row-reverse">
                      
                    </div>
                  </div>

                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center h-16 rounded-xl bg-transparent w-full px-4">
              <div>
                <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex-grow ml-4">
                <div class="relative w-full">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    class="flex w-full border bg-transparent text-white rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="ml-4">
                <button
                  class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  onClick={sendMessage}
                >
                  <span>Send</span>
                  <span class="ml-2">
                    <svg
                      class="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
