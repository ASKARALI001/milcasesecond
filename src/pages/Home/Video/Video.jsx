import React, {useEffect, useState} from 'react';
import Title from "../../../components/Title/Title";
import axios from "../../../utils/axios";

const Video = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        axios('/allVideo')
            .then(({data}) => setVideo(data))
            .catch((err) => console.log(err))
    },[])
    return (
        <section className="video">
            <div className="container">
                <Title title='ВИДЕО О НАС'/>
            </div>
            <div className="video__content">
                <iframe width="100%" height="400" src={video[0]}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>

        </section>
    );
};

export default Video;