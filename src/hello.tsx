import React, {useState, useEffect, useRef} from 'react'

type Option = {
  value: string,
  label: string
}

const options: Option[] = [
  {value: '111', label: '111'},
  {value: '222', label: '222'},
  {value: '333', label: '333'},
  {value: '444', label: '444'},
  {value: '555', label: '555'},
  {value: '666', label: '666'},
  {value: '777', label: '777'},
  {value: '888', label: '888'},
]

export default function Hello() {
  const [selectedValue, setSelectedValue] = useState<string []>([]);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const select = selectRef.current;
    if (select) {
      const option = select.options[select.selectedIndex];
      if (option) {
        option.scrollIntoView();
      }
    }
  }, [selectedValue]);

  function searchKeyword(keyword: string) {
    const found = keyword && options.find(it => it.label.startsWith(keyword))
    if (found) {
      setSelectedValue([found.value])
    } else {
      setSelectedValue([])
    }
  }

  return <div>
    <h1>Input Text and Scroll To Matched Option</h1>
    <div>
      <div>
        <input type="text" onChange={event => searchKeyword(event.target.value)}/>
        <span>{selectedValue}</span>
      </div>
      <div>
        <select multiple value={selectedValue} size={5} ref={selectRef}>
          {
            options.map(({value, label}) =>
              <option key={value} value={value}>{label}</option>)
          }
        </select>
      </div>
    </div>
  </div>
};
