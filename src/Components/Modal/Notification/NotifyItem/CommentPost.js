import { Link } from "react-router-dom";
import { formatTime } from "../../../../Hooks/useFormat";
import Button from "../../../Button";
function CommentPost({ data, closeModal = () => {}, newNoti }) {
    return (
        <Button
            to={
                data.groupId
                    ? `/group/${data.groupId}/postsNoti/${data.postsId}`
                    : `/profile/${data.userId}/posts/${data.postsId}`
            }
            _className="flex p-2 pr-5 rounded-md hover:bg-hover"
            onClick={closeModal}
        >
            <div className="">
                <div className=" relative">
                    <img
                        className="w-14 h-14 rounded-full border border-gray-500"
                        src={data.avt}
                        alt=""
                    />
                    <i className=" absolute bottom-[-5px] right-[-5px] block h-7 w-7 bg-urlIcons4 bg-szIcons4 bg-commentIcon4"></i>
                </div>
            </div>
            <div className="flex-1 ml-3 leading-[1.333]">
                <span className=" text-[15px] text-gray-600 line-clamp-3">
                    <strong className=" font-semibold">{data.userName}</strong>{" "}
                    đã bình luận về bài viết của bạn
                    {data.groupId ? (
                        <strong className=" font-semibold">
                            {" "}
                            {data.groupName}
                        </strong>
                    ) : (
                        "."
                    )}
                </span>
                <span
                    className={`text-[13px] ${
                        newNoti ? "text-blue-500" : "text-gray-600"
                    } `}
                >
                    {formatTime(+data.time)}
                </span>
            </div>
        </Button>
    );
}

export default CommentPost;
