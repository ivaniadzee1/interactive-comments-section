import  { useState } from "react";

function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const addComment = () => {
    if (text.trim() !== "") {
      setComments((prev) => [text, ...prev]);
      setText("");
    }
  };

  const deleteComment = (commentToDelete: string) => {
    setComments((prev) => prev.filter((item) => item !== commentToDelete));
  };

  return (
    <div className="flex items-center justify-center flex-col">

  <div className="mt-[230px] ml-[190px]">

{comments.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-[343px]  mb-[20px] bg-white rounded-xl">
          <div className="flex items-center justify-between  w-[360px] h-[150px] p-4">
            <img src="/assets/man2.svg" alt="" />
            <h1 className="ml-[20px]">{item}</h1>
            <button
              onClick={() => deleteComment(item)}
              className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
</div>
      <div className="flex items-center justify-center flex-col w-[343px] mt-[100px] h-[190px] bg-white rounded-2xl">
        <input
          className="w-[311px] h-[97px] border-2 border-[#5357B6] rounded-xl pl-[10px]"
          placeholder="Add a comment..."
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="w-[104px] h-[48px] bg-[#5357B6] rounded-2xl mt-[20px] text-white"
          onClick={addComment}
        >
          Send
        </button>
      </div>

      
    </div>
  );
}

export default Comments;
