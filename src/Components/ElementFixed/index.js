import { useState, useEffect, useRef, useContext } from "react";
import { ScreenSize } from "../../App.js";
function ElementFixed({ children, scrollValue, id }) {
    const context = useContext(ScreenSize);
    const divRef = useRef();
    const elementRef = useRef();
    const [bounding, setBounding] = useState({});
    const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        divRef.current &&
            setBounding(divRef.current.parentNode.getBoundingClientRect());
        elementRef.current &&
            setElementSize({
                width: elementRef.current.clientWidth,
                height: elementRef.current.clientHeight,
            });
    }, [id, context]);
    return (
        <div ref={divRef} className=" relative h-0 w-0">
            <div
                style={{
                    top: `${
                        bounding.y +
                        bounding.height / 2 -
                        elementSize.height / 2 -
                        scrollValue
                    }px`,
                    left: `${bounding.x - elementSize.width}px`,
                }}
                className=" fixed"
            >
                <div ref={elementRef} className="w-max">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ElementFixed;
