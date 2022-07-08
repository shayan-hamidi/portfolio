import React from "react";
import { useTranslation } from "react-i18next";
import "./dialog.css";
function Dialog({ setOpen }) {
  const { i18n } = useTranslation();
  return (
    <div className="dialog-outer">
      <div className="dialog-container">
        <div className="dialog-header">انتخاب زبان</div>
        <div className="dialog-body">
          choose your language <br />
          زبان خود را انتخاب کنید
        </div>
        <div className="dialog-footer">
          <button
            className="btn"
            onClick={() => {
              i18n.changeLanguage("fa");
              setOpen(false);
            }}
          >
            فارسی
          </button>
          <button
            className="btn"
            onClick={() => {
              i18n.changeLanguage("en");
              setOpen(false);
            }}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
