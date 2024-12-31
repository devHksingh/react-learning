import { useCallback, useEffect, useState,useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(6);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef()

  const handleCopy = ()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }

    const passwordGenrator = useCallback(()=>{
        let pass = ""
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklxcvbnm"
        if(isNum) str+="0123456789"
        if(isChar) str+="!@#$%^&*_+-/"
        for(let i=0;i<length;i++){
            let randomIndex = Math.floor(Math.random()*str.length)
            pass +=str.charAt(randomIndex)
            
        }
        setPassword(pass)
    },[isChar,isNum,setPassword,length])
    
    useEffect(()=>{
        passwordGenrator()
    },[isNum,isChar,length])
  
  return (
    <div className="flex-col items-center justify-center max-w-md mx-auto min-h-lvh bg-card">
      <h2 className="mb-4 text-center">PasswordGenerator</h2>
      <div className="w-full p-4 border rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            className="w-3/4 px-2 py-1 font-medium rounded-md bg-slate-700 text-slate-200"
          />
          <button 
          className="px-3 py-1 rounded-md bg-sky-600 hover:bg-sky-500"
          onClick={handleCopy}
          >
            Copy
          </button>
          <button 
          className="px-3 py-1 bg-orange-600 rounded-md hover:bg-orange-800"
          onClick={()=>passwordGenrator()}
          >
            Regenrate
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <input
            type="range"
            name=""
            id="password-length"
            min={6}
            max={40}
            value={length}
            onChange={(e)=>setLength(e.target.value)}
          />
          <label htmlFor="password-length"> {length}</label>

          <input
            type="checkbox"
            name=""
            id="num-allowed"
            value={isNum}
            onClick={() => setIsNum((prev) => !prev)}
          />
          <label htmlFor="num-allowed">Number</label>
          <input
            type="checkbox"
            name=""
            id="char-allowed"
            value={isChar}
            onClick={() => setIsChar((prev) => !prev)}
          />
          <label htmlFor="char-allowed">Special char</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
