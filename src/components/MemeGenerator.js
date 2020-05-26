import React, { useState, useEffect } from 'react'

function MemeGenerator(){
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImage, setRandomImage] = useState("http://i.imgflip.com/1bij.jpg");
    const [allMemeImgs, setAllMemeImgs] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => setAllMemeImgs(response.data.memes));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const chosenImage = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)];
        setRandomImage(chosenImage.url);
    }

    return(
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={topText}
                    onChange={(e) => {
                        const {value} = e.target
                        setTopText(value)
                    }}
                    placeholder="Top text" 
                />
                <input 
                    type="text"
                    value={bottomText}
                    onChange={(e) => {
                        const {value} = e.target
                        setBottomText(value)
                    }}
                    placeholder="Bottom text" 
                />
                <h1>{topText} {bottomText}</h1>
                <button>Generate!</button>
            </form>
            <div className="meme">
                <img src={randomImage} alt="" />
            </div>
        </div>
    )
}

export default MemeGenerator;