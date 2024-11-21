// components/Editor.js
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = ({ value, onChange }) => {
  const modules = {
    toolbar: [[{ 'header': [ false] }],
      [{ header: "2" }, { header: "3" }, { header: "4" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image"],
    ],
  };

  return (
    <ReactQuill dir="rtl" value={value} onChange={onChange} modules={modules} />
  );
};

export default Editor;
