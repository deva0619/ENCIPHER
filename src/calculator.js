import React, { useState, useEffect } from "react";
function Calculator() {
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState("");
    useEffect(() => {
        try {
            if (value !== "") {
                setAnswer(eval(value));
            } else {
                setAnswer("");
            }
        } catch {
            setAnswer("");
        }
    }, [value]);
    const addValue = (val) => {
        setValue(value + val);
    };
    const clear = () => {
        setValue("");
        setAnswer("");
    };
    return (
        <div style={styles.container}>
            <h2>Calculator</h2>
            <input style={styles.display} value={value} readOnly />
            <input style={styles.result} value={answer} readOnly />
            <div style={styles.grid}>
                <button onClick={() => addValue("7")}>7</button>
                <button onClick={() => addValue("8")}>8</button>
                <button onClick={() => addValue("9")}>9</button>
                <button onClick={() => addValue("/")}>÷</button>
                <button onClick={() => addValue("4")}>4</button>
                <button onClick={() => addValue("5")}>5</button>
                <button onClick={() => addValue("6")}>6</button>
                <button onClick={() => addValue("*")}>×</button>
                <button onClick={() => addValue("1")}>1</button>
                <button onClick={() => addValue("2")}>2</button>
                <button onClick={() => addValue("3")}>3</button>
                <button onClick={() => addValue("-")}>−</button>
                <button onClick={() => addValue("0")}>0</button>
                <button onClick={clear}>C</button>
                <button onClick={() => addValue("+")}>+</button>
                <button onClick={() => setValue(answer.toString())}>=</button>
            </div>
        </div>
    );
}
const styles = {
    container: {
        width: "200px",
        margin: "50px auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
    },
    display: {
        width: "100%",
        height: "35px",
        fontSize: "18px",
        marginBottom: "5px",
        textAlign: "right",
    },
    result: {
        width: "100%",
        height: "30px",
        fontSize: "16px",
        marginBottom: "10px",
        textAlign: "right",
        color: "green",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "5px",
    },
};
export default Calculator;
