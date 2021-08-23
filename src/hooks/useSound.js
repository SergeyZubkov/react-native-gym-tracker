import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export default function useSound(name) {
    const [sound, setSound] = useState();

    async function playAsync() {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/sounds/start.mp3")
        )

        setSound(sound)

        await sound.playAsync()
    }

    async function stopAsync() {
        if (!sound) return
        
        await sound.stopAsync()
    }

    useEffect(() => {
        return sound 
        ? () => sound.unloadAsync()
        : undefined
    })

    return [playAsync, stopAsync]
}