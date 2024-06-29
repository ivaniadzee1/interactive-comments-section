import { useState } from "react";
import Reply from "./Reply";

function Posts() {
    const [count,setCount] = useState(12)
    const [reply,setReply] = useState(false)
     
    const increase = () => {
      if(count <15)
        setCount(count +1)
    }
    const decrease = () => {
        if(count >10){
            setCount(count -1)
        }
    }
    const handleReply = () => {
        setReply(!reply)
    }

    return (
      <div className="flex items-center justify-center">
        <div className="flex w-[343px] h-[256px] bg-white mt-[20px] rounded-xl">
          <img  src="/assets/man1.svg" alt="" className="ml-[15px] mt-[15px] w-[40px] h-[40px]" />
            <h1 className="text-lg mt-[20px] ml-[10px] font-bold">Ramsesmiron</h1>
            
            <div className="flex items-center justify-center flex-col">
                      <h1 className="ml-[-150px] mt-[70px]">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design </h1>


                      <div className="flex w-[100px] h-[40px] bg-[#F5F6FA] ml-[-360px] mt-[20px]">
                         <button onClick={increase} className="mt-[-10px] ml-[5px]">+</button>
                         <h1 className="ml-[20px] mt-[4px]">{count}</h1>
                         <button onClick={decrease} className="mt-[-10px] ml-[30px]">-</button>
                         <button onClick={handleReply}  className="text-[#5357B6] font-bold  ml-[80px]">Reply</button>
                         {reply && <Reply/>}
              </div>
                      
            </div> 
           
            <div>
               
            </div>
            
        </div>
      </div>
    );
  }
  
  export default Posts;
  