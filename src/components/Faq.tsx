import { useState } from "react";
import styles from "./faq.module.css";
import { MinusIcon, PlusIcon } from "../assets/icons";
import { useTheme } from "../hooks/useTheme";
import type { FaqProps } from "../types/faq";


const Faq:React.FC<FaqProps> = ({question, answer, id}) => {
  const {theme} = useTheme();
  const isDark = theme === "dark";

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const isOpen = openIndexes.includes(id);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((itemIndex) => itemIndex !== index)
        : [...prev, index]
    );
  };

  return (
    <div key={id} className={styles.faqCard}>
      <div className={styles.titleSection}>
        <h1 className={styles.faqTitle}>
          Q{id}. {question}
        </h1>

        <button onClick={() => toggleIndex(id)} className={styles.button}>
          {isOpen ? (
            <MinusIcon stroke={`${isDark ? "#ffffff" : "#252525"}`} />
          ) : (
            <PlusIcon stroke={`${isDark ? "#ffffff" : "#252525"}`} />
          )}
        </button>
      </div>

      <div
        className={`${styles.answerWrapper} ${
          isOpen && styles.answerWrapperOpen
        }`}
      >
        <p className={styles.faqAnswwer}>{answer}</p>
      </div>
    </div>
  );
}

export default Faq