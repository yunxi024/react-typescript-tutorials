import React, { useState } from "react";
import { DatePicker, DateRangePicker } from "rsuite";
import Counter from "../components/old/Counter";

const Hotel: React.FC = () => {
  const [datein, setDatein] = useState<Date | null>(null);
  const handleDateinChange = (value: Date | null) => {
    setDatein(value);
    console.log(datein);
  };

  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const arr1: string[][] = [
    ["大人", "13歳以上"],
    ["子ども", "年齢2 - 12"],
    ["乳幼児", "2歳未満"],
    ["ペット", "介助動物同伴の場合は？"],
  ];
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
    counts[0] > 0 || counts[1] ? "ゲスト" + (counts[0] + counts[1]) + "人" : ""
  }${counts[2] > 0 ? ",乳幼児" + counts[2] + "名" : ""}${
    counts[3] > 0 ? ",ペット数:" + counts[3] : ""
  }`;
  return (
    <div className="hotel_main">
      <div className="hotel_top">
        <h1>Hideout Falcon - Eco Bamboo Home</h1>
        <div className="hotel_name">
          <div>
            <span>★</span>4.93 · レビュー180件 · Selat、バリ島、インドネシア
          </div>
          <div>
            <button>
              <i className="fa-solid fa-arrow-up-from-bracket"></i>シェア
            </button>
            <button>
              <i className="fa-regular fa-heart"></i>保存
            </button>
          </div>
        </div>
      </div>
      <div className="picture">
        <div className="pic1">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/160b4c17-1db0-4659-ad98-c81567b4ed6c.jpeg?im_w=720"
            alt=""
          ></img>
        </div>
        <div className="pic2">
          <div className="pictop">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/e6afe269-b0c7-468d-b93c-ea55b6592cf2.jpeg?im_w=720"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/883eb3f0-15ab-4196-be8d-bfd5a2170e1b.jpeg?im_w=720"
              alt=""
            />
          </div>
        </div>
        <div className="pic3">
          <div className="pictop">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/f0d9b54f-5395-4d79-bc40-ac06fb772e83.jpeg?im_w=720"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-34658120/original/48dafd6f-65ec-4891-8a85-df07ee8b9829.jpeg?im_w=720"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hotel_bottom">
        <div className="left">
          <div className="left1">
            <div>
              <p>Parmaさんのツリーハウス</p>
              <ol>
                <li>ゲスト2人</li>
                <li>
                  <span>·</span>1寝室
                </li>
                <li> · ベッド1台</li>
                <li> · 1バスルーム</li>
              </ol>
            </div>
            <img
              alt=""
              src="https://a0.muscache.com/im/pictures/user/9d961b24-d189-4732-b8f7-070c7a44da2c.jpg?im_w=240"
            />
          </div>
          <div className="left2">
            <div className="div1">
              <i className="fa-solid fa-key fa-flip-horizontal"></i>
              <div>
                <p className="title">入室がスムーズと大好評</p>
                <p className="content">
                  最近のゲストの95%がチェックインに5つ星をつけました。
                </p>
              </div>
            </div>
            <div className="div2">
              <i className="fa-solid fa-paw"></i>
              <div>
                <p className="title">ペット歓迎</p>
                <p className="content">ペット同伴で滞在できます。</p>
              </div>
            </div>
          </div>
          <div className="left3">
            <img
              alt=""
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            ></img>
            <p>
              ホスト側での予約キャンセル、リスティングの説明と実際の宿泊施設の相違、またチェックイン時のトラブルなど、旅行上のトラブルが発生した場合に備え、すべての予約に対して無料の安心プログラムが提供されます。
            </p>
            <button>もっと詳しく</button>
          </div>
          <div className="left4">
            <div className="div1">
              <i className="fa-solid fa-language"></i>{" "}
              一部の情報は自動的に翻訳されました。
              <button> 原文を表示</button>
            </div>
            <div className="div2">
              バリ島での完璧な小さなステイケーションがここにあります。私たちはリラクゼーションを真剣に受け止めています。
              <br />
              <br />
              Hideout
              Falconは、美しいウッドデッキとプライベートガーデンを備えた明るくモダンな竹のアパートです。屋外の加熱石造りのバスタブは非常にロマンチックで、新婚旅行者にとってファルコンが最も人気がある理由は間違いありません！
              <br />
              <br />
              <button> もっと見る </button>
            </div>
          </div>
          <div className="left5">
            <div className="div1">寝室・ベッドについて</div>
            <div className="div2">
              <i className="fa-solid fa-bed"></i>
              <div className="div2_1">寝室</div>
              <div className="div2_2">ダ⁠ブ⁠ル⁠ベ⁠ッ⁠ド1⁠台</div>
            </div>
          </div>
          <div className="left6">
            <div className="div1">提供されるアメニティ・設備</div>
            <div className="div2">
              <div className="div2_1">
                <div>
                  <i className="fa-solid fa-fan"></i>ガーデンビュー
                </div>
                <div>
                  <i className="fa-solid fa-desktop"></i>仕事専用スペース
                </div>
                <div>
                  <i className="fa-solid fa-paw"></i>ペットOK
                </div>
                <div>
                  <i className="fa-solid fa-door-open"></i>専用の玄関
                </div>
              </div>
              <div className="div2_2">
                <div>
                  <i className="fa-solid fa-wifi"></i>Wi-Fi
                </div>
                <div>
                  <i className="fa-solid fa-car-rear"></i>敷地内無料駐車場
                </div>
                <div>
                  <i className="fa-solid fa-bath"></i>バスタブ
                </div>
                <div>
                  <i className="fa-solid fa-kit-medical"></i>救急箱
                </div>
              </div>
            </div>
            <div className="div3">17のアメニティ・設備をすべて表示</div>
          </div>
          <div className="left7"></div>
        </div>
        <div className="right">
          <div className="rightdiv">
            <div className="right1">
              <div className="div1">
                <div className="div1_1">
                  <span>¥ 28,881</span>/泊
                </div>
                <div className="div1_2">
                  <span>★</span> 4.93 · <button>レビュー182件</button>
                </div>
              </div>
              <div className="div2">
                <div className="div2_1">
                  <div className="checkin">
                    <div className="spans">チェックイン</div>
                    <DatePicker
                      appearance="subtle"
                      placeholder="日程を追加"
                      size="sm"
                      preventOverflow={true}
                      value={datein}
                      onChange={handleDateinChange}
                    ></DatePicker>
                  </div>
                  <div className="checkout">
                    <div className="spans">チェックアウト</div>
                    <DatePicker
                      appearance="subtle"
                      size="sm"
                      placeholder="日程を追加"
                      preventOverflow={true}
                    ></DatePicker>
                  </div>
                </div>
                <div className="div2_2">
                  <div className="div2_2_1">人数</div>
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
                      <div className="mbox2_1">
                        こちらの宿泊施設の最大定員は2名です（乳幼児を除く）。3匹以上のペットを同伴する場合は、ホストにその旨をご連絡ください。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right2"></div>
            <div className="right3">
              <button>
                <i className="fa-solid fa-flag"></i>このリスティングを報告する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
