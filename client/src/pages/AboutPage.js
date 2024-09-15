import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="containers">
            <h1 className="title">About Fruit.ai</h1>
            <p className="section">
                Welcome to <span className="highlight">Fruit.ai</span>, your personal health manager! Our application is designed to help you track your health and wellness journey with ease. 
                Whether you're looking to manage your nutrition, monitor your fitness, or access helpful resources, Fruit.ai is here to assist you.
            </p>
            <p className="section">
                Our mission is to empower individuals to take charge of their health by providing easy access to tools and information that promote well-being and a balanced lifestyle.
            </p>
            <p className="section">
                <ul className="features-list">
                    <li>Personalized Health Tracking</li>
                    <li>Comprehensive FAQs</li>
                    <li>Interactive Chatbot</li>
                    <li>Community Support</li>
                </ul>
            </p>
            <p className="section">
                Fruit.ai was developed by a dedicated team of health enthusiasts, developers, and designers who are passionate about making health management accessible and engaging for everyone.
            </p>
            <p className="section">
                "Fruit.ai has transformed the way I manage my health. The tools are easy to use, and the chatbot always provides me with the information I need!" - <span className="highlight">Sarah J.</span>
            </p>
            <p className="section">
                Ready to take control of your health? Sign up today and start your journey towards a healthier lifestyle with Fruit.ai!
            </p>
            <p className="section">
                Have questions? Feel free to contact us at <span className="highlight">support@fruit.ai</span>.
            </p>
        </div>
    );
};

export default AboutPage;
