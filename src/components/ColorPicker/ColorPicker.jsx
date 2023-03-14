import { useState } from 'react';
import css from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionsIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionsIdx];

  const makeOptionClassName = index => {
    return index === activeOptionsIdx
      ? css.colorsItemActiveIndex
      : css.colorsItem;
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Color picker</h2>
      <p className={css.description}>Active Color: {label}</p>
      <div className={css.colorsContainer}>
        {options.map(({ label, color }, index) => {
          return (
            <button
              className={makeOptionClassName(index)}
              key={label}
              aria-label={label}
              style={{ backgroundColor: color }}
              onClick={() => setActiveOptionIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
