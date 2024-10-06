import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
}

// reference to password (useRef)
const passwordRef = useRef(null);

// password generator algorithm
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*(){}[]`~";

  for (let i = 1; i <= length; i++) {
    let index = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(index);
  }

  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}, [password]);

useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed]);