import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  // reference to password (useRef)
  const passwordRef = useRef(null);

  // password generator algorithm
  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]`~";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      generatedPassword += str.charAt(index);
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      {/* main  */}
      <div className="main">
        <h1>Password generator</h1>

        {/* Password generator box */}
        <div className="password__generator-section">
          {/* password generator input box */}
          <input
            ref={passwordRef}
            type="text"
            value={password}
            placeholder="Generating Password"
          />

          {/* password copy button */}
          <button onClick={copyPasswordToClipboard}>Copy Password!</button>
        </div>

        {/* password key parameters */}
        <div className="password__generator__parameter__section">
          <input
            className="password__generator__parameter"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(fireEvent) => {
              setLength(fireEvent.target.value);
            }}
          />
          <label>Length: {length} </label>

          <input
            className="password__generator__parameter"
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number </label>

          <input
            className="password__generator__parameter"
            type="checkbox"
            defaultChecked={charAllowed}
            id="specialInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Special Characters </label>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
