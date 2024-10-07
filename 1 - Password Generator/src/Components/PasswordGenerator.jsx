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
      <main className="password-generator">
        <h1 className="password-generator__title">Password generator</h1>

        {/* Password generator box */}
        <section className="password-generator__output">
          {/* password generator input box */}
          <input
            ref={passwordRef}
            type="text"
            value={password}
            placeholder="Generating Password"
            className="password-generator__input"
          />

          {/* password copy button */}
          <button
            onClick={copyPasswordToClipboard}
            className="password-generator__copy-btn"
          >
            Copy Password!
          </button>
        </section>

        {/* password key parameters */}
        <section className="password-generator__controls">
          <div className="password-generator__control">
            <input
              className="password-generator__range"
              type="range"
              id="length-input"
              min={6}
              max={20}
              value={length}
              onChange={(fireEvent) => {
                setLength(fireEvent.target.value);
              }}
            />
            <label htmlFor="length-input" className="password-generator__label">
              Length: {length}{" "}
            </label>
          </div>

          <div className="password-generator__control">
            <input
              id="number-input"
              className="password-generator__number"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number-input" className="password-generator__label">
              Number{" "}
            </label>
          </div>

          <div className="password-generator__control">
            <input
              id="special-input"
              className="password__generator__parameter"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="special-input">Special Characters </label>
          </div>
        </section>
      </main>
    </>
  );
}

export default PasswordGenerator;
