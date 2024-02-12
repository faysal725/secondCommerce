import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Ckeditor({title="description", editorData}) {
  return (
    <div className="App">
        <h2 className='uppercase'>{title}</h2>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                // console.log( editor.getData() );
                editorData(editor.getData())
            } }
            
        />
    </div>
  )
}
