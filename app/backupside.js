



//

<div className="min-h-screen flex">
      <div className="sidebar flex-3 border-r-2 border-sky-500">
        <div className="upperside p-4 border-b-2 h-4/6">
          <div className="uppersidetop flex items-center mb-10">
            <Image src={GptLogos} alt="logo" className="logo mr-4" />
            <span className="brand text-2xl">Chat GPT</span>
          </div>
          <button className="midbtn flex items-center justify-center mb-12 bg-purple-700 border-none text-white p-6 text-2xl w-96 rounded-lg m-auto">
            <Image src={AddLogo} className="addbtn h-8 p-4 " />
            New Chat
          </button>
          <div className="uppersidebottom">
            <button className="query flex items-center justify-center bg-transparent p-4 w-96 border-2 border-solid border-gray-700 rounded-lg my-3 mx-auto">
              <Image src={Message} className="mr-8 h-7 object-cover" />
              What Is Programming?
            </button>
            <button className="query flex items-center justify-center bg-transparent p-4 w-96 border-2 border-solid border-gray-700 rounded-lg my-3 mx-auto">
              <Image src={Message} className="mr-8 h-7 object-cover" />
              What Is Programming?
            </button>
          </div>
        </div>
        <div className="lowerside p-8">
          <div className="listitem m-3 flex items-center text-xl">
            <Image src={Home} className="listitemimage m-4 mr-4" />
            Home
          </div>
          <div className="listitem m-3 flex items-center text-xl">
            <Image src={Bookmark} className="listitemimage m-4 mr-6" />
            Home
          </div>
          <div className="listitem m-3 flex items-center text-xl">
            <Image src={Rocket} className="listitemimage m-4 mr-4" />
            Home
          </div>
        </div>
      </div>
      <div className="main min-h-screen-14rem items-center justify-center ">
        <div className="chats">
            <div className="chat">
                <Image src={UserIcon}/>
                <p>Lorem Ipsum</p>
            </div>
            <div className="chat">
                <Image src={Gptlogo}/>
                <p>Lorem Ipsum</p>
            </div>
        </div>
        <div className="chat-footer mx-auto">
            <div className="inp ">
                <input 
                type="text"
                className="w-calc-100%-3rem outline-none p-5 text-white items-center"
                placeholder="send a message"
                />
                <button className="send">
                    <Image src={Send} alt="send"/>
                </button>
            </div>
        </div>
      </div>
    </div>