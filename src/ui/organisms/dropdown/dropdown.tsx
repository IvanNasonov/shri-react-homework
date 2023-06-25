import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { DropDownList } from "@ui/atoms";
import { DropdownControl } from "@ui/molecules";

type Props = {
  placeholderText: string;
  selectedItem: string | null;
  items: string[];
  setSelectedItem: (item: string) => void;
};

export const Dropdown = ({
  items,
  selectedItem,
  setSelectedItem,
  placeholderText,
}: Props) => {
  const controlRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [controlDomRect, setControlDomRect] = useState<DOMRect | null>(null);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeList = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const setNewControlRect = () => {
      if (controlRef.current) {
        setControlDomRect(controlRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", setNewControlRect);

    setNewControlRect();

    return () => {
      window.removeEventListener("resize", setNewControlRect);
    };
  }, []);

  return (
    <>
      <DropdownControl
        selectedItem={selectedItem}
        onClick={toggleIsOpen}
        isListOpen={isOpen}
        ref={controlRef}
        placeholderText={placeholderText}
      />
      {controlDomRect
        ? createPortal(
            <DropDownList
              topPosition={controlDomRect.bottom + 4}
              leftPosition={controlDomRect.left}
              width={controlDomRect.width}
              isOpen={isOpen}
              items={items}
              onClickItem={setSelectedItem}
              closeList={closeList}
            />,
            document.body
          )
        : null}
    </>
  );
};
