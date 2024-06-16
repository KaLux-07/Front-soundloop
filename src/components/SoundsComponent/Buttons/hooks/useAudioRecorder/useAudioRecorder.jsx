import { Howl } from "howler";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useAudioRecorder = (soundUrl, setAudioBlobs, soundId) => {
    const [ mediaRecorder, setMediaRecorder ] = useState(null);
    const [ audioChunks, setAudioChunks ] = useState([]);
    const [ audio, setAudio ] = useState(null);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ isRecording, setIsRecording ] = useState(false);
    const [ newId, setNewId ] = useState(null);
    const [ recordingComplete, setRecordingComplete ] = useState(false);

    useEffect(() => {
        if (soundUrl) {
            const howl = new Howl({ src: [soundUrl], format: ['webm'], loop: true });
            setAudio(howl);
            setIsPlaying(false);
            setRecordingComplete(true);
        }
    }, [soundUrl])

    const startRecording = async () => {
        if (isRecording) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
            let chunks = [];

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            recorder.onstop = () => {
                if (chunks.length > 0) {
                    console.log("Llega aqui");
                    const blob = new Blob(chunks, { type: 'audio/webm' });
                    const url = URL.createObjectURL(blob);
                    const howl = new Howl({ src: [url], format: ['webm'], loop: true });
                    howl.play();
                    setAudio(howl);
                    const newId = uuidv4();
                    setAudioBlobs((prevBlobs) => [...prevBlobs, { blob, id: newId }]);
                    setAudioChunks([]);
                    setNewId(newId);
                    setIsPlaying(true);
                    setRecordingComplete(true);
                }
                setIsRecording(false);
            };

            recorder.start();
            setMediaRecorder(recorder);
            setIsRecording(true);
            setRecordingComplete(false);
        } catch (error) {
            console.error('Error accessing media devices: ', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setMediaRecorder(null);
        }
    };

    const togglePlayback = () => {
        if (audio) {
            if (audio.playing()) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
        }
    };

    
    const deleteRecording = () => {
        if (audio) {
            console.log(audio._src);
            audio.stop();
            audio.unload();
            setAudio(null);
            setIsPlaying(false);
            setIsRecording(false);
            setRecordingComplete(false);
            if (soundId) {
                setAudioBlobs((prevBlobs) => prevBlobs.filter(blobData => blobData.id !== soundId));
            }
            else {
                setAudioBlobs((prevBlobs) => prevBlobs.filter(blobData => blobData.id !== newId));
            }
        }

    };

    return {
        startRecording,
        stopRecording,
        togglePlayback,
        deleteRecording,
        isRecording,
        isPlaying,
        hasSound: !!audio,
        recordingComplete,
    };

}

export default useAudioRecorder;