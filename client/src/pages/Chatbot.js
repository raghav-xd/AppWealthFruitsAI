import React, { useState } from 'react';
import './Chatbot.css';

const fruitsData = [
    {
        name: 'Apple',
        description: 'Apples are rich in fiber, vitamins, and minerals. They can be eaten fresh or used in various dishes.',
        imageUrl: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Banana',
        description: 'Bananas are an excellent source of potassium and energy. They are great as a snack or added to smoothies.',
        imageUrl: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Orange',
        description: 'Oranges are loaded with Vitamin C and are known to boost immunity. They can be juiced or eaten fresh.',
        imageUrl: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Mango',
        description: 'Mangoes are tropical fruits that are sweet and juicy. They are rich in vitamins A and C and can be eaten fresh, in salads, or as a juice.',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.cvDoDFXPeABsZxbv3BvCgAHaE8&pid=Api&P=0&h=180'
    },
    {
        name: 'Strawberry',
        description: 'Strawberries are rich in Vitamin C, manganese, and antioxidants. They are popular in desserts, smoothies, and salads.',
        imageUrl: 'https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Pineapple',
        description: 'Pineapples are packed with vitamins, enzymes, and antioxidants. They are known for their anti-inflammatory properties and sweet-tart flavor.',
        imageUrl: 'https://images.pexels.com/photos/915016/pexels-photo-915016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isChatting, setIsChatting] = useState(false);

    const handleSend = () => {
        if (inputValue.trim() === '') return;
        setMessages(prevMessages => [...prevMessages, { text: inputValue, isUser: true }]);

        if (inputValue.trim().toLowerCase() === 'show fruits') {
            fruitsData.forEach(fruit => {
                const botMessage = (
                    <div className="fruit-message" key={fruit.name}>
                        <img src={fruit.imageUrl} alt={fruit.name} className="fruit-image" />
                        <div>
                            <strong>{fruit.name}</strong>
                            <p>{fruit.description}</p>
                        </div>
                    </div>
                );
                setMessages(prevMessages => [...prevMessages, { text: botMessage, isUser: false }]);
            });
        } else {
            const botResponse = `Bot: You said "${inputValue}"`;
            setMessages(prevMessages => [...prevMessages, { text: botResponse, isUser: false }]);
        }

        setInputValue('');
    };

    const handleStartChatting = () => {
        setIsChatting(true);
    };

    return (
        <div className="containr">
            <h1 className="title">Chatbot</h1>
            <p>Welcome to the Fruit.AI chatbot!</p>
            <h2>Type "Show Fruits" to get detailed information about fruits.</h2>
            <br></br>
            {!isChatting ? (
                <button className="button1" onClick={handleStartChatting}>Start Chatting Now</button>
            ) : (
                <div className="chat-container">
                    {messages.map((msg, index) =>
                        typeof msg.text === 'string' ? (
                            <div className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`} key={index}>
                                {msg.text}
                            </div>
                        ) : (
                            msg.text
                        )
                    )}
                </div>
            )}
            {isChatting && (
                <div className="input-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="input"
                    />
                    <button className="button1" onClick={handleSend}>Send</button>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
