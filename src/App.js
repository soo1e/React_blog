/*eslint-disable*/

import './App.css';
import { useState } from "react";
import Modal from "./Modal";

function App() {
    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [mtitle, setMtitle] = useState(0);
    let [input, setInput] = useState('');

    const handleLike = (index) => {
        let copy = [...like];
        copy[index] = copy[index] + 1;
        setLike(copy);
    };

    const handleDelete = (index) => {
        let copyTitle = [...title];
        let copyLike = [...like];
        copyTitle.splice(index, 1);
        copyLike.splice(index, 1);
        setTitle(copyTitle);
        setLike(copyLike);
    };

    return (
        <div className="App">
            <div className="black-nav">
                <div>Blog</div>
            </div>
            {
                title.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => { setModal(true); setMtitle(i); }}>{title[i]}</h4>
                            <span className="db" onClick={() => handleLike(i)}>👍 {like[i]} </span>
                            <button onClick={() => handleDelete(i)}>삭제</button>
                        </div>
                    )
                })
            }

            <input onChange={(e) => { setInput(e.target.value); }} />

            <button onClick={() => {
                let copyTitle = [...title];
                let copyLike = [...like];
                copyTitle.unshift(input);
                copyLike.unshift(0);
                setTitle(copyTitle);
                setLike(copyLike);
            }}>글 발행</button>

            {
                modal === true ? <Modal mtitle={mtitle} title={title} /> : null
            }
            {/*<SortButton title={title} setTitle={setTitle}></SortButton>*/}
        </div>
    )
}

export default App;
