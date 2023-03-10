import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { mergeAttributes } from '@tiptap/core';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Highlight from '@tiptap/extension-highlight';
import TypographyExtension from '@tiptap/extension-typography';
import UnderlineExtension from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Blockquote from '@tiptap/extension-blockquote';
import Paragraph from '@tiptap/extension-paragraph';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Dropcursor from '@tiptap/extension-dropcursor';
import Text from '@tiptap/extension-text';
import Code from '@tiptap/extension-code';
import FontFamily from '@tiptap/extension-font-family';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import TextStyle from '@tiptap/extension-text-style';
import { ColorHighlighter } from './ColourHighlighter';
import { Color } from '@tiptap/extension-color';
import UniqueID from './UniqueID';
import TableOfContents from './TableOfContents';
import Heading from '@tiptap/extension-heading';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import Image from '@tiptap/extension-image';
import { getPostBody, getPostTitle, getPostTags } from '../../store/book';
import useCreateSavePost from './hooks/usecreateSavePost';
import ProjectCreateContentToolbar from './Toolbar';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import ImageAdd from './ImageAdd';
import { BackgroundColorExtension } from './BackgroundColorExtension';
import { BackgroundColorMark } from './BackgroundColorMark';
import media from '../../lib/media';
import { toast } from 'react-toastify';
import { Post, UploadImageToCloudinaryMutation } from '../../types/apolloComponent';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE_TO_CLOUDINARY } from '../../lib/graphql/posts';

export type TapProps = {
  postId: string;
  posts: Post[];
};

type Levels = 1 | 2 | 3;

const classes: Record<Levels, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
};

function Tap({ postId, posts }: TapProps) {
  const dispatch = useDispatch();
  const isdark = useSelector((state: RootState) => state.core.isdark);
  const body = useSelector((state: RootState) => state.book.body);
  const isopen = useSelector((state: RootState) => state.book.isopen);
  const [previewSource, setPreviewSource] = useState(0);

  const [url, setUrl] = useState('');

  const [uploadThumbnail] = useMutation<UploadImageToCloudinaryMutation>(
    UPLOAD_IMAGE_TO_CLOUDINARY,
  );

  const [state, setState] = useState(false);

  const loadDataOnlyOnce = useCallback(() => {
    setState(true);
  }, [state]);

  const findPost = posts?.filter(e => e.id == postId);

  //later
  // BackgroundColorExtension,
  // BackgroundColorMark,
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    extensions: [
      StarterKit,
      Subscript,
      Dropcursor,
      Superscript,
      Image,
      Highlight,
      TypographyExtension,
      Document,
      Text,
      Code,
      OrderedList,
      ListItem,
      TextStyle,
      FontFamily,
      Link,
      BulletList.configure({
        HTMLAttributes: {
          class: 'connected-line',
        },
      }),
      HorizontalRule.configure({
        HTMLAttributes: {
          class: 'hor',
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'quote',
        },
      }),
      UnderlineExtension.configure({
        HTMLAttributes: {
          class: 'underlinetag',
        },
      }),
      Image.configure({
        allowBase64: true,
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: 'ptag',
        },
      }),
      Heading.configure({ levels: [1, 2, 3] }).extend({
        renderHTML({ node, HTMLAttributes }) {
          const hasLevel = this.options.levels.includes(node.attrs.level);
          const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0];

          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]} leading-normal`,
            }),
            0,
          ];
        },
      }),

      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
      ColorHighlighter,
      Color.configure({
        types: ['textStyle'],
      }),
      TableOfContents,
    ],

    autofocus: true,
    content:
      body?.length > 100
        ? body
        : `<div><toc></toc> 
    </div>???????????????
 
  `,
  });

  const addImage = useCallback(
    async getUrl => {
      setPreviewSource(1);
      await uploadThumbnail({
        variables: {
          body: getUrl,
          width: 813,
          height: 477,
        },
        update: (_proxy, { data: newData }) => {
          setUrl(newData.uploadImage.url);
          editor.chain().focus().setImage({ src: newData.uploadImage.url }).run();
          setPreviewSource(2);
        },
      });
    },
    [editor],
  );

  const getContent = editor?.getHTML();

  useEffect(() => {
    if (getContent?.length < 30000) {
      dispatch(getPostBody(getContent));
    } else if (!state && getContent?.length > 30000) {
      loadDataOnlyOnce();
      toast.warning('?????? ?????? ????????? ?????? ????????? ??????????????? ?????? ????????????', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (isopen) {
      dispatch(getPostBody(getContent));
    }
  }, [getContent, loadDataOnlyOnce, isopen]);

  useEffect(() => {
    if (findPost?.length == 0) return;
    if (findPost) {
      const BodyResult = findPost[0]?.body.replace('<toc></toc>', '');

      dispatch(getPostTitle(findPost[0]?.title));
      // dispatch(getPostBody(findPost[0]?.body));
      editor.commands.setContent(BodyResult);
      // dispatch(getPostTags(findPost[0]?.tags?.map(e => e?.tag?.name)));
    }
  }, [postId]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <ProjectCreateContentToolbar editor={editor} isdark={isdark}>
        <ImageAdd addImage={addImage} previewSource={previewSource} />
      </ProjectCreateContentToolbar>

      <Content
        className="w-full mt-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 px-[1rem]"
        isdark={isdark}>
        <EditorContent
          editor={editor}
          className=""
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </Content>
    </>
  );
}

export default Tap;

const Content = styled.div<{ isdark: string }>`
  .ProseMirror {
    > * + * {
    }

    img {
      height: 100%;
      max-width: 100%;
      object-fit: cover;

      &.ProseMirror-selectednode {
        outline: 3px solid #68cef8;
      }
    }

    h1 {
      font-size: 2.5rem;
      line-height: 1.5;
      font-weight: 700;
      margin-bottom: 1rem;
      margin-top: 2.5rem;
      letter-spacing: -0.004em;
      color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#212529')};

      ${media.custom(768)} {
        font-size: 2rem;
      }
    }

    h2 {
      font-size: 2rem;
      line-height: 1.5;
      margin-bottom: 1rem;
      margin-top: 2.5rem;
      letter-spacing: -0.004em;
      color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#212529')};
      ${media.custom(768)} {
        font-size: 1.5rem;
      }
    }
    h3 {
      font-size: 1.5rem;
      line-height: 1.5;
      margin-bottom: 1rem;
      margin-top: 1.5rem;
      letter-spacing: -0.004em;
      color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#212529')};
      ${media.custom(768)} {
        font-size: 1.15rem;
      }
    }
    h4 {
      font-size: 1.3125rem;
      line-height: 1.5;
      margin-bottom: 1rem;
      letter-spacing: -0.004em;
      margin-top: 1.5rem;
      color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#212529')};
      ${media.custom(768)} {
        font-size: 1rem;
      }
    }

    min-height: 100%;
    max-height: 100%;
    width: 100%;

    ol {
      list-style-type: decimal;
      position: relative;
      color: #ffb300;
      font-weight: 600;
      padding-left: 20px;
      font-size: 1.125rem;
      margin: 18px 0;

      li {
        line-height: 1.5;
        vertical-align: middle;
      }

      li p {
        vertical-align: middle;
        padding-bottom: 5px;
      }
    }

    ul {
      list-style-type: disc;
      position: relative;
      color: #ffb300;
      margin: 18px 0;
      padding-left: 20px;
      font-size: 1.125rem;

      vertical-align: middle;

      li {
        line-height: 1.5;
        vertical-align: middle;
      }

      li p {
        vertical-align: middle;
        padding-bottom: 5px;
      }
    }

    code {
      background-color: #ffe066;
      color: #212529;
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 90%;
    }

    div {
      .toc {
        margin-bottom: 1.5rem;
        white-space: initial;
        word-wrap: break-word;
        list-style: none;
        overflow: hidden;

        .toc__list {
          list-style: none;
          margin-left: 0;
          margin-right: 0;
          color: ${props => (props.isdark == 'dark' ? 'white' : '#212529')};
          padding: 0;
          margin: 0;
        }
        ul {
          list-style: none;
        }
        li:before {
          content: '';
          margin-left: 0;
          margin-right: 0;
          list-style: none;
        }
      }
      color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#212529')};
      background: ${props => (props.isdark == 'dark' ? '#212529' : '')};

      .toc__list::before {
        color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#212529')};
      }
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    .quote {
      margin: 0 auto;
      position: relative;
      padding-left: 55px;
      margin: 75px 0;
      ${media.custom(768)} {
        margin: 25px 0;
      }
      &:before {
        color: #fcd545;
        font-size: 100px;
        font-family: 'Comic Sans MS', 'Comic Sans', cursive;
        line-height: 0.9;
        content: open-quote;
        vertical-align: top;

        position: absolute;
        left: -5px;
      }

      &:after {
        visibility: hidden;
        content: close-quote;
      }
    }

    hr {
      border-top: 2px solid rgba(#0d0d0d, 0.1);
      margin: 1.5rem 0;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#333')};
    display: block;

    font-family: 'Noto Sans KR', 'Nanum Gothic', 'Roboto', 'Helvetica Neue', Arial,
      sans-serif;
    font-weight: 400;
    line-height: 1.7;

    word-break: break-all;
  }

  u {
    text-decoration: none;

    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      linear-gradient(to right, #e9756b, #e9756b, #e9756b);
    background-size: 100% 0.1em, 30% 0.1em;
    background-position: 100% 100%, 0 100%;

    background-repeat: no-repeat;
    transition: background-size 600ms;

    &:hover {
      background-size: 100% 0.1em, 100% 0.1em;
    }
  }
`;

// ol {
//   list-style: none;
//   counter-reset: my-awesome-counter;
//   margin-top: 1rem;
//   margin-bottom: 1rem;
//   counter-increment: list;

//   li {
//     display: block;
//     clear: both;
//     font-size: 1.1rem;
//     line-height: 1.375;
//     position: relative;
//     counter-increment: my-awesome-counter;
//     display: flex;
//     align-items: center;
//     margin-bottom: 0.5rem;
//   }
//   li:before {
//     content: counter(my-awesome-counter);
//     width: 2.8rem;
//     height: 2.8rem;
//     float: left;
//     margin: 0 1.5rem 0rem 0;
//     color: #fdfdfd;
//     background: #ed4264 linear-gradient(to bottom right, #ed4264 25%, #ffedbc);
//     text-shadow: 0 0 2px #ed4264;
//     border-radius: 50%;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     shape-outside: ellipse();
//     z-index: 1;
//   }
//   li:after {
//     width: 1.5rem;
//     height: 1.5rem;
//     position: absolute;
//     top: 0;
//     left: 0;
//     content: '';
//     background: #ed4264;
//     z-index: -1;
//     border-top-left-radius: 3px;
//   }
// }
