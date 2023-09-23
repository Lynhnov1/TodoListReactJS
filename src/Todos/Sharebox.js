import React from 'react';
import imagecopy from './image/copy.png';
import imagefacebook from './image/facebook.png';
import imagetelegram from './image/telegram.png';
import imagevk from './image/vk.png';
import imagewhatsapp from './image/whatsapp.png';

function Sharebox() {
    return (
        <div className="share-box">
            <img src={imagecopy} alt="Copy" />
            <img src={imagefacebook} alt="Facebook" />
            <img src={imagetelegram} alt="Telegram" />
            <img src={imagevk} alt="Vk" />
            <img src={imagewhatsapp} alt="Whatsapp" />
        </div>
    );
}

export default Sharebox;
