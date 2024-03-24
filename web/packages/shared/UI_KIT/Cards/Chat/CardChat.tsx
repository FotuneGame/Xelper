import React, { useState, useEffect } from 'react';
import "./CardChat.module.scss";

interface Message {
    id: number;
    text: string;
}

interface Chat {
    id: string;
    name: string;
    messages: Message[];
}

const CardChat = () => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [currentChat, setCurrentChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");

    // Загрузка чатов из localStorage при загрузке компонента
    useEffect(() => {
        const savedChats = localStorage.getItem('chats');
        if (savedChats) {
            setChats(JSON.parse(savedChats));
        }
    }, []);

    // Сохранение чатов в localStorage при изменении состояния чатов
    useEffect(() => {
        localStorage.setItem('chats', JSON.stringify(chats));
    }, [chats]);

    const handleChatSelection = (chat: Chat) => {
        setCurrentChat(chat);
        setMessages(chat.messages);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage
            };
            setMessages([...messages, newMessage]);
            setInputMessage("");
        }
    };

    const handleCreateChat = () => {
        // Создаем новый чат
        const newChat = {
            id: Math.random().toString(),
            name: "Новый чат",
            messages: [] as Message[]
        };
        setChats(prevChats => [...prevChats, newChat]);
    };

    const handleDeleteChat = (chatId: string) => {
        setChats(prevChats => prevChats.filter(chat => chat.id !== chatId));
        setCurrentChat(null); // Сбрасываем текущий чат после удаления
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Чаты</h5>
                <ul className="list-group">
                    {chats.map((chat) => (
                        <li key={chat.id} className="list-group-item" onClick={() => handleChatSelection(chat)}>
                            {chat.name}
                            <button className="btn btn-sm btn-danger float-right" onClick={() => handleDeleteChat(chat.id)}>Удалить чат</button>
                        </li>
                    ))}
                </ul>
                {currentChat && (
                    <div>
                        <h5 className="mt-3">Чат: {currentChat.name}</h5>
                        <div className="chat-messages">
                            {messages.map((message) => (
                                <div key={message.id} className="message">
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Введите сообщение..." value={inputMessage} onChange={handleMessageChange} />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" onClick={handleSendMessage}>Отправить</button>
                            </div>
                        </div>
                    </div>
                )}
                <button className="btn btn-success mt-3" onClick={handleCreateChat}>Создать новый чат</button>
            </div>
        </div>
    );
};

export default CardChat;
