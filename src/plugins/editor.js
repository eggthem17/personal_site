import Vue from 'vue'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import '@toast-ui/editor/dist/i18n/ko-kr'

import { Editor, Viewer } from '@toast-ui/vue-editor'
// import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell'

Vue.component('viewer', Viewer)

// const signedEditor = new Editor({
//   mounted () {
//     Editor({
//       plugins: [tableMergedCell]
//     })
//   }
// })

Vue.component('editor', Editor)
