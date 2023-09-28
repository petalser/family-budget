import React, { useState, useEffect } from "react";
import {
  ImCheckboxChecked,
  ImCheckboxUnchecked,
  ImInfo,
  ImCross,
  ImPencil,
} from "react-icons/im";

type Item = [string, number];

interface FormProps {
  className?: string;
  labels: string[];
}

const Form = ({ className, labels }: FormProps) => {
  const upperLabels = [
    labels[0].charAt(0).toUpperCase() + labels[0].substring(1),
    labels[1].charAt(0).toUpperCase() + labels[1].substring(1),
  ];

  const [simpleMode, setSimpleMode] = useState(false);
  const [textarea, setTextarea] = useState("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [matches, setMatches] = useState<RegExpMatchArray[]>([]);
  const [localState, setLocalState] = useState<Item[]>([
    ["wdwd", 133],
    ["awdw", 13],
    ["wwd", -42342],
    ["awdwad", -4464658],
  ]);

  const toggleSimpleMode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSimpleMode(e.target.checked);

  useEffect(() => {
    if (textarea.endsWith(";")) {
      //fix first 'value' if blank by adding "..."
      if (textarea.startsWith(">")) {
        setTextarea((prev) => "..." + prev);
      }
      //fix non-first 'value' if blank by adding "..."
      setTextarea((prev) => prev.replaceAll(";>", ";...>"));

      //in case of blank "price" it will get a special value for further processing
      setTextarea((prev) => prev.replaceAll(">;", ">-42342;"));
      setMatches([...textarea.matchAll(/([^>]+)>([^;]+);/g)]);
      // console.log([...textarea.matchAll(/([^>]+)>([^;]+);/g)]);
    }
  }, [textarea]);

  // useEffect(() => {
  //   const subState: Item[] = [];
  //   for (const match of matches) {
  //     const item = match[0].split(">");
  //     const subName: string = item[0].trim();
  //     // if (item[1].trim() === ";") {
  //     //   subState.push([subName, -42342]);
  //     //   continue;
  //     // }
  //     const subPrice: number = parseFloat(item[1].trim());
  //     if (isNaN(subPrice)) {
  //       subState.push([subName, -4464658]);
  //       continue;
  //     }
  //     subState.push([subName, subPrice]);
  //   }
  //   setLocalState(subState);
  // }, [matches]);

  const handleClick = () => {
    if (name && price) {
      setLocalState((prev) => [...prev, [name, parseFloat(price)]]);
      setName("");
      setPrice("");
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className={className}>
      <ul>
        {localState.map((item, index) => {
          switch (item[1]) {
            case -42342:
              return (
                <li className="listItem error" key={index}>
                  <div className="listContent">
                    <p>{`${upperLabels[1]} for "${item[0]}" was not specified`}</p>
                    <ImPencil className="pencil" />
                  </div>
                  <ImCross className="delete" />
                </li>
              );
            case -4464658:
              return (
                <li className="listItem error" key={index}>
                  <div className="listContent">
                    <p>
                      {`Specified ${labels[1]} for "${item[0]}" is not a number`}{" "}
                    </p>
                    <ImPencil className="pencil" />
                  </div>
                  <ImCross className="delete" />
                </li>
              );
            default:
              return (
                <li className="listItem" key={index}>
                  <div className="listContent">
                    <p>{`${item[0]} = ${item[1]}`}</p>
                    <ImPencil />
                  </div>
                  <ImCross className="delete" />
                </li>
              );
          }
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="simpleModeSwitch">
          <input
            type="checkbox"
            name="toggleSimpleMode"
            id="toggleSimpleMade"
            onChange={toggleSimpleMode}
          />
          <label htmlFor="toggleSimpleMade">
            {simpleMode ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            Simple input mode <ImInfo />
            <span>
              Use following format for easier use: "name &gt; price &#59;"
              <br /> (e.g. "milk &gt; 1.09 &#59;strawberry &gt; 2.10
              &#59;icecream &gt; 1.12 &#59;" will become <br /> milk = 1.09
              <br />
              strawberry = 2.10
              <br />
              icecream = 1.12 )
            </span>
          </label>
        </div>

        {simpleMode ? (
          <div>
            <textarea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setTextarea(e.target.value)
              }
            ></textarea>
          </div>
        ) : (
          <div>
            <div>
              <label htmlFor="value">{upperLabels[0]}</label>
              <input
                type="text"
                id="value"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              ></input>
            </div>
            <div>
              <label htmlFor="amount">{`${upperLabels[1]}*`}</label>
              <input
                required
                type="number"
                id="amount"
                value={price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
                }
              />
            </div>
            <input type="button" onClick={handleClick} value="One more"></input>
          </div>
        )}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

// Tasks:
// create tooltip for simpleMode                  V
// give it proper styling
// red style for input number if not specified
// onSubmit func
// style
// add X and PEN buttons to list items
