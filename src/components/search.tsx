import React, { useState, useRef } from "react";
import "../styles/style.css";
import { DatePicker, DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";
import Counter from "./old/Counter";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const arr1: string[][] = [
    ["大人", "13歳以上"],
    ["子ども", "年齢2 - 12"],
    ["乳幼児", "2歳未満"],
    ["ペット", "介助動物同伴の場合は？"],
  ];

  function handleLabelClick(event: React.MouseEvent<HTMLElement>) {
    const value = event.currentTarget.textContent!;
    setInputValue(value);
  }
  const handleIncrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (index !== 0 && counts[0] === 0) {
        newCounts[0]++;
      }
      if (newCounts[index] < 9) {
        newCounts[index]++;
      }
      return newCounts;
    });
  };
  const handleDecrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index]--;
      }
      if (
        counts[0] === 1 &&
        (counts[1] !== 0 || counts[2] !== 0 || counts[3] !== 0)
      ) {
        newCounts[0] = 1;
      }
      return newCounts;
    });
  };
  const inputValue2 = `${
    counts[0] > 0 || counts[1] ? "ゲスト" + (counts[0] + counts[1]) + "人," : ""
  }${counts[2] > 0 ? "乳幼児" + counts[2] + "名," : ""}${
    counts[3] > 0 ? "ペット数:" + counts[3] : ""
  }`;

  const [showDiv, setShowDiv] = useState(true);
  const topcontainerRef = useRef(null);
  function handleDivClick() {
    setShowDiv(!showDiv);
    // console.log(showDiv);
  }
  function handleClickOutside(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === topcontainerRef.current) {
      setShowDiv(true);
    }
  }

  // console.log(showDiv1, showDiv2);
  return (
    <>
      <div
        className="top"
        ref={topcontainerRef}
        onClick={handleClickOutside}
        style={{ height: showDiv ? "80px" : "150px" }}
      >
        <div
          className="sbar"
          onClick={handleDivClick}
          style={{ display: showDiv ? "flex" : "none" }}
        >
          <div className="slocation">
            <span>どこでも</span>
          </div>
          <div className="scheckin">
            <span>いずれかの月の週</span>
          </div>
          <div className="sguests">
            <span>ゲスト数を追加</span>
            <div className="sicon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <div className="bar" style={{ display: showDiv ? "none" : "flex" }}>
          <div className="location">
            <p>ロケーション</p>
            <input
              className="input-box"
              type="text"
              placeholder="目的地を検索"
              defaultValue={inputValue}
            />
            <div className="box">
              <div className="lbox">
                <h5>地域で検索</h5>
                <div className="sitebox" onClick={handleLabelClick}>
                  <img
                    alt=""
                    src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                  />
                  <p>柔軟な検索を試し</p>
                </div>
                <div className="sitebox" onClick={handleLabelClick}>
                  <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                  />
                  <p>ヨーロッパ</p>
                </div>
                <div className="sitebox" onClick={handleLabelClick}>
                  <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/c193e77c-0b2b-4f76-8101-b869348d8fc4.jpg?im_w=320"
                  />
                  <p>韓国</p>
                </div>
                <div className="sitebox" onClick={handleLabelClick}>
                  <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                  />
                  <p>東南アジア</p>
                </div>
                <div className="sitebox" onClick={handleLabelClick}>
                  <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320"
                  />
                  <p>フランス</p>
                </div>
                <div className="sitebox" onClick={handleLabelClick}>
                  <img
                    alt=""
                    src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                  />
                  <p>米国</p>
                </div>
              </div>
            </div>
          </div>
          <div className="checkin">
            <p>チェックイン</p>
            <DatePicker
              className="indate"
              size="xs"
              appearance="subtle"
              placeholder="日付を追加"
            />
          </div>
          <div className="checkout">
            <p>チェックアウト</p>
            <DatePicker
              className="indate"
              size="xs"
              appearance="subtle"
              placeholder="日付を追加"
            />
          </div>
          <div className="guests">
            <p>旅行者</p>
            <input
              className="input-box2"
              type="text"
              placeholder="ゲスト数を追加"
              defaultValue={inputValue2}
            />
            <div className="box2">
              <div className="mbox2">
                {arr1.map((value, index) => {
                  return (
                    <div key={index} className="gbox2">
                      <div className="text">
                        <p>{value[0]}</p>
                        <span>{value[1]}</span>
                      </div>
                      <Counter
                        count={counts[index]}
                        onIncrement={() => handleIncrement(index)}
                        onDecrement={() => handleDecrement(index)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <span className="sicon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
