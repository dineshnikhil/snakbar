import React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';
import './Snackbar.css'

const SnackBar = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShow(true);
            setTimeout(() => {
                setShow(false)
            }, 3000);
        },
    }));

  return (
    <div 
        className="snackbar"
        id={show ? "show" : "hide"}
        style={{
            backgroundColor: props.type === "success" ? "#00F593" : "#FF0033",
            color: props.type === "success" ? "black" : "white"
        }}
    >
        <div className="symbol">
            {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
        </div>
        <div className="message">{props.message}</div>
    </div>
  )
});
export default SnackBar