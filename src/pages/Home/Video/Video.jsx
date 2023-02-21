import React from 'react';
import Title from "../../../components/Title/Title";

const Video = () => {
    return (
        <section className="video">
            <div className="container">
                <Title title='ВИДЕО О НАС'/>
            </div>
            <div className="video__content">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/qA5ZZssUXcY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>

        </section>
    );
};

export default Video;