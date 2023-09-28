import React from 'react';
import './style.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect( () => setIsDropdownOpen(isOpen),[isOpen]);
  React.useEffect( () => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
      if (isOpen === undefined) {
          setIsDropdownOpen(!isDropdownOpen)
      }
  }

  return (
      <div className="dropdown-container">
        <div onClick={ handleOpen } className={isDropdownOpen ? 'opened' : 'closed'}>
          { button }
        </div>

        {isDropdownOpen && (
            <div className="dropdown-box">
              <div className="dropdown-list" onClick={() => setIsDropdownOpen(false)}>
                {children}
              </div>
            </div>
        )}

      </div>
  );
}
