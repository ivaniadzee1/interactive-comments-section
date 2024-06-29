import { useState } from "react";

function Reply() {
  const [comment, setComment] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const [isInputVisible, setInputVisible] = useState<boolean>(true);

  const addComments = () => {
    if (text.trim() !== "") {
      setComment((prev) => [...prev, text]);
      setText("");
      setInputVisible(false); 
    }
  };

  const deleteFunction = (commentToDelete: string) => {
    setComment((prev) => prev.filter((item) => item !== commentToDelete));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-[343px] h-[250px]">
        {isInputVisible && (
          <div className="flex items-center justify-center flex-col w-[343px] ml-[-480px] h-[250px] bg-white rounded-2xl mt-[100px]">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-[311px] h-[97px] border-[#5357B6] mt-[10px] rounded-xl p-2 border"
            />
            <button onClick={addComments}  className="w-[104px] h-[48px] bg-[#5357B6] rounded-2xl mt-[25px] text-white p-2 hover:bg-blue-600"> Reply </button>
          </div>
        )}
        <ul className="list-none p-0">
          {comment.map((item, index) => (
            <div key={index} className="flex flex-col items-center mb-2 w-[343px] ml-[-415px] mt-[80px] bg-white  rounded-xl">
              <div className=" w-[311px] h-[97px] flex items-center justify-between  p-4">
                <img src="/assets/man1.svg" alt="" />
                <h1 className=" ml-[10px]">{item}</h1>
                <button onClick={() => deleteFunction(item)} className="bg-red-500 text-white p-1 rounded hover:bg-red-600"> Delete</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Reply;
