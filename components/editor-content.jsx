const EditorContent = ({ data }) => {
  return (
    <div  id="blog-body" className="editorContent" dangerouslySetInnerHTML={{ __html: data }} />
  );
};

export default EditorContent;
