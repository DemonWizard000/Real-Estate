  import FroalaEditor from 'react-froala-wysiwyg';
  import Froalaeditor from 'froala-editor';

  // Require Editor JS files.
  import 'froala-editor/js/froala_editor.pkgd.min.js';
  import "froala-editor/js/plugins.pkgd.min.js";

  // Require Editor CSS files.
  import 'froala-editor/css/froala_style.min.css';
  import 'froala-editor/css/froala_editor.pkgd.min.css';
  
  // Require Font Awesome.
  import 'font-awesome/css/font-awesome.css';
  
  
  
  // Include special components if required.
  import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
  import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
  import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
  import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
  import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';
  
  const avgWordsPerSec = 4;

  function CustomEditor(props) {
    const {onChange} = props;
    const handleChange = (model) => {
      let count = model.match(/\w+/g)?.length || 0;
      let time = Math.ceil(count / avgWordsPerSec);
      onChange(`${count} words. ${time} sec read.`);
    }
    return (
      <FroalaEditor
          config={{
            enter: Froalaeditor.ENTER_BR,
            tableStyles: {
              "no-border": "No border"
            },
            useClasses: false,
            attribution: false,
            toolbarSticky: false,
            charCounterCount: false,
            fontFamilySelection: true,
            fontSizeSelection: true,
            paragraphFormatSelection: true,
            heightMin: 200,
            heightMax: 550,
            linkInsertButtons: [],
            toolbarButtons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "textColor",
              "paragraphFormat",
              "lineHeight",
              "align",
              "formatOL",
              "formatUL",
              "outdent",
              "indent",
              "leftToRight",
              "rightToLeft",
              "insertLink",
              "insertImage",
              "insertTable",
              "emoticons",
              "personalize",
              "insertButton",
              "clearFormatting",
              "selectAll",
              "insertHR",
              "undo",
              "redo",
              "fullscreen",
              "html"
            ],
            linkList: [],
            events: {
              'contentChanged' : function () {
                handleChange(this.html.get())
              }
            }
          }}
           //onModelChange={handleChange}
        />
    );
  }
  export default CustomEditor;