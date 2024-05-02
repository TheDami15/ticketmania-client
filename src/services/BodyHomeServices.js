import {useCallback, useEffect, useRef } from 'react';

export const fetchEvents = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/v1/events');
    const data = await response.json();
    return data.data; 
};

export const useCarousel = () => {

    
    const carouselRef = useRef(null);
    const colors = ['#fff2cd', '#ffffff', '#5f8375', '#f1c081', '#7bae98'];
    let colorIndex = 0;
    let timeRunning = 3000;
    let timeAutoNext = 10000;
    let runTimeOut;
    let runNextAuto;

    const showSlider = useCallback((type) => {
        if (!carouselRef.current) return; 

        const carouselDom = carouselRef.current;
        const SliderDom = carouselDom.querySelector('.list');
        const thumbnailBorderDom = carouselDom.querySelector('.thumbnail');
        const SliderItemsDom = SliderDom.querySelectorAll('.item');
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
            colorIndex = (colorIndex + 1) % colors.length;
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        }

        const timeElement = carouselDom.querySelector('.time');
        const topicElements = carouselDom.querySelectorAll('.item .topic');
        timeElement.style.backgroundColor = colors[colorIndex];
        topicElements.forEach(topic => {
            topic.style.color = colors[colorIndex];
        });

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);
    }, [carouselRef, colors]); 

    useEffect(() => {
        if (!carouselRef.current) return; 
    
        const carouselDom = carouselRef.current;
        const nextDom = carouselDom.querySelector('#next');
        const prevDom = carouselDom.querySelector('#prev');
    
        nextDom.onclick = () => showSlider('next');
        prevDom.onclick = () => showSlider('prev');
    
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    
        return () => {
            clearTimeout(runNextAuto);
            clearTimeout(runTimeOut);
        };
    }, [showSlider]);

    return { carouselRef, showSlider };
};