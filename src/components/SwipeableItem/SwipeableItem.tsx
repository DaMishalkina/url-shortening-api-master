import classNames from "classnames";
import React, {useRef, useEffect, ReactElement} from "react";

import {DeleteIcon} from "../svgs/DeleteIcon";

import "./SwipeableItem.scss";

interface Props {
    id: string,
    onSwipe: (id: string) => void,
    children?: ReactElement,
    threshold?: number,
    className?: string
}


export const SwipeableItem = ({id, onSwipe, children, threshold, className = ""}: Props) => {
    const listElementRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    const dragStartXRef = useRef(0);
    const leftRef = useRef(0);
    const draggedRef = useRef(false);

    useEffect(() => {
        window.addEventListener("mouseup", onDragEndMouse);
        window.addEventListener("touchend", onDragEndTouch);
        return () => {
            window.removeEventListener("mouseup", onDragEndMouse);
            window.removeEventListener("touchend", onDragEndTouch);
        };
    });

    function onDragStartMouse(event: React.MouseEvent) {
        onDragStart(event.clientX);
        window.addEventListener("mousemove", onMouseMove);
    }

    function onDragStartTouch(event: React.TouchEvent) {
        const touch = event.targetTouches[0];
        onDragStart(touch.clientX);
        window.addEventListener("touchmove", onTouchMove);
    }

    function onDragStart(clientX: number) {
        draggedRef.current = true;
        dragStartXRef.current = clientX;
        if(listElementRef.current){
            listElementRef.current.className = "ListItem";
        }


        requestAnimationFrame(updatePosition);
    }

    function updatePosition() {
        if (draggedRef.current) {
            requestAnimationFrame(updatePosition);
        }
        if(listElementRef.current) {
            listElementRef.current.style.transform = `translateX(${leftRef.current}px)`;
        }
    }

    function onMouseMove(event: MouseEvent) {
        const left = event.clientX - dragStartXRef.current;
        if (left < 0) {
            leftRef.current = left;
        }
    }

    function onTouchMove(event: TouchEvent) {
        const touch = event.targetTouches[0];
        const left = touch.clientX - dragStartXRef.current;
        if (left < 0) {
            leftRef.current = left;
        }
    }

    function onDragEndMouse() {
        window.removeEventListener("mousemove", onMouseMove);
        onDragEnd();
    }

    function onDragEndTouch() {
        window.removeEventListener("touchmove", onTouchMove);
        onDragEnd();
    }

    function onDragEnd() {
        if (draggedRef.current) {
            draggedRef.current = false;
            const newThreshold = threshold || 0.5;

            if (listElementRef.current &&
                leftRef.current <
                listElementRef.current.offsetWidth * newThreshold * -1
            ) {
                leftRef.current = -listElementRef.current.offsetWidth * 2;

                if (window.confirm("Delete item?") && wrapperRef.current) {
                    wrapperRef.current.style.maxHeight = "0";
                    onSwipe && onSwipe(id);
                } else {
                    leftRef.current = 0;
                }
            } else {
                leftRef.current = 0;
            }
            if(listElementRef.current){
                listElementRef.current.style.transform = `translateX(${leftRef.current}px)`;
            }
        }
    }

    return (
        <div className={classNames("item-to-swipe", className)} ref={wrapperRef}>
            <div className="item-to-swipe__background-container" ref={backgroundRef}>
                <span>
                    <DeleteIcon/>
                </span>
            </div>
            <div
                className="item-to-swipe__bouncing-item"
                ref={listElementRef}
                onMouseDown={(event) => onDragStartMouse(event)}
                onTouchStart={(event) => onDragStartTouch(event)}
            >
                {children}
            </div>
        </div>

    );
}
