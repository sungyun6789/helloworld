import '@uiw/react-textarea-code-editor/dist.css';

import styled from '@emotion/styled';
import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import dynamic from 'next/dynamic';

const TextArea = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), {
  ssr: false,
});

const Editor = (props: TextareaCodeEditorProps) => <CodeEditor {...props} />;

export default Editor;

const CodeEditor = styled(TextArea)`
  max-width: 300px;
  max-height: 200px;
  overflow: scroll !important;
  font-size: 15px;
  font-family: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace';
  background-color: #f5f5f5;
`;
