import { useState, useRef, useEffect, useContext } from "react";
import { ScreenSize } from "../../../../App";
import Button from "../../../../Components/Button";
import { BsSearch } from "react-icons/bs";
function FriendsListTool() {
    const context = useContext(ScreenSize);
    const inputRef = useRef();
    const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
        isFocus && inputRef.current && inputRef.current.focus();
    }, [isFocus]);
    return (
        <div className="flex flex-col w-full p-2">
            <div className="flex">
                <div className=" w-1/2">
                    <span className=" text-[20px] font-bold">Bạn bè</span>
                </div>
                {context.width >= 1024 && (
                    <div className="flex w-1/2">
                        <div className="flex rounded-full p-2  bg-gray-100">
                            <Button
                                _className={"text-gray-500"}
                                onClick={() => setIsFocus(true)}
                            >
                                <BsSearch />
                            </Button>
                            <input
                                ref={inputRef}
                                className=" outline-none ml-2 bg-transparent"
                                type="text"
                                placeholder="Tìm kiếm"
                                onBlur={() => setIsFocus(false)}
                            />
                        </div>
                        <div className="flex items-center mx-2">
                            <Button
                                _className={
                                    " text-blue-500 font-semibold px-2 py-1 rounded-md hover:bg-hover"
                                }
                            >
                                <span>Lời mời kết bạn</span>
                            </Button>
                        </div>
                        <div className="flex items-center ">
                            <Button
                                to={"/friends"}
                                _className={
                                    " text-blue-500 font-semibold px-2 py-1 rounded-md hover:bg-gray-200"
                                }
                            >
                                <span>Tìm bạn bè</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FriendsListTool;
