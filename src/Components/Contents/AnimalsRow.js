import styledComponents from 'styled-components';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useRef } from 'react';
import {SmoothHorizontalScrolling} from '../utiliti/index'
import { useState } from 'react';
import { useEffect } from 'react';
import { useViewport } from '../hooks';


function AnimalsRow(props) {

    const {title, animals} = props;

    const sliderRef = useRef();
    const animalRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag]   = useState(false);
    const [windowWidth] = useViewport();

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - 
        sliderRef.current.clientWidth;
    
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(sliderRef.current,
            250,
            animalRef.current.clientWidth *2,
            sliderRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
    
        if (sliderRef.current.scrollLeft >0 ){
            SmoothHorizontalScrolling(sliderRef.current,
            250,
            -animalRef.current.clientWidth *2,
            sliderRef.current.scrollLeft
            )
        }
    }

    useEffect(() => {
        if (isDrag) {
            if(dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }

    }, [dragDown, dragMove, isDrag])

    const onDragStart = e => {
        setIsDrag(true);
        setDragDown(e.screenX);
    }

    const onDragEnd = e => {
        setIsDrag(false);
    }

    const onDragEnter = e => {
        setDragMove(e.screenX);
    }

    return (
        <Contents draggable='false'>
                <h1 className=' heading'>{title}</h1>
            <Animalslider 
                ref={sliderRef} 
                draggable='true'
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                style={
                    animals && animals.length > 0
                    ? {
                        gridTemplateColumns: `repeat(${animals.length},
                            ${windowWidth > 1200 ? '360px'
                                : windowWidth > 992 ? '300px'
                                : windowWidth > 768 ? '250px': '200px'
                            })`
                    } : {}
                }
            >
            {
                animals.map((list, index) => (
                    <div key={index} draggable='false' className='animalitems' ref={animalRef}>
                        <img src={list} alt="" draggable='false'/>
                    </div>
                ))
            }
            </Animalslider>
            <div className='btnLeft' onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className='btnRight' onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </Contents>
    )
}

export default AnimalsRow;

export const Contents = styledComponents.div`
    margin-top: 50px;
    z-index: 5;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 30px;
    padding-bottom: 1px;

    .heading {
        font-size: 30px;
        user-select: none;
        text-align:center;

        @media only screen and (max-width: 700px) {
            font-size: 24px;
        }

    }

    .btnLeft {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background: rgba(0,0,0,0.5);
        height: 80px;
        width: 40px;
        boder-radius: 5px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover {
        background: rgba(0,0,0,0.8);

        svg {
            opacity: 1;
            transform: scale(1.2);
        }
        }

        svg {
            opacity: 0.7;
            font-size: 30px;
            transition: all 0.3s linear;
            color: white;
        }
    }

    .btnRight {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background: rgba(0,0,0,0.5);
        height: 80px;
        width: 40px;
        boder-radius: 5px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover {
        background: rgba(0,0,0,0.8);

        svg {
            opacity: 1;
            transform: scale(1.2);
        }
        }

        svg {
            opacity: 0.7;
            font-size: 30px;
            transition: all 0.3s linear;
            color: white;
        }
    }
`;

export const Animalslider = styledComponents.div`

    display: grid;
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 18px;
    padding-bottom:18px;
    scroll-behavior: smooth;

    .animalitems {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        tranform: center left;
        position: relative;

        &:hover {
            transform: scale(1.1);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }
`;