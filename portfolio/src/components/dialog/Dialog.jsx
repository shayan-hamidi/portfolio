import React from "react";
import { useTranslation } from "react-i18next";
import "./dialog.css";
function Dialog({ setOpen }) {
  const { i18n } = useTranslation();
  return (
    <div className="dialog-outer">
      <div className="dialog-container">
        <div className="dialog-header">
          <h2>Select Language</h2>
          <h2>انتخاب زبان</h2>
        </div>
        <div className="dialog-body">
          <h5>choose your language</h5>
          <h5>زبان خود را انتخاب کنید</h5>
        </div>
        <div className="dialog-footer">
          <button
            className="btn btn-primary"
            onClick={() => {
              i18n.changeLanguage("en");
              setOpen(false);
            }}
          >
            English
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              i18n.changeLanguage("fa");
              setOpen(false);
            }}
          >
            فارسی
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
