import React, { Dispatch, PureComponent, SetStateAction } from 'react';
import imageCompression from 'browser-image-compression';
import styled from 'styled-components';
import {
  UploadedImage,
  UploadImageToCloudinaryMutationFn,
} from '../../types/apolloComponent';

interface BookInfo {}

interface WebWorkerState {
  progress: number | null;
  inputSize: string | null;
  outputSize: string | null;
  inputUrl: string | null;
  outputUrl: string | null;
}

interface PostThumbnailState {
  open: boolean;
  previewSource: string;
  maxSizeMB: number;
  maxWidthOrHeight: number;
  webWorker: WebWorkerState;
  mainThread: WebWorkerState;
}

interface UploadThumbnailOptions {
  file: File;
}

interface UploadThumbnailResponse {}

interface ImageProps {
  addImage: (e: string | ArrayBuffer | null) => void;
  readyForFile: string;
  uploadThumbnail: any;
  previewSource: number;
  setreadyForFile: Dispatch<SetStateAction<string>>;
  setPreviewSource: Dispatch<SetStateAction<number>>;
  thumbnail: string | null;
}

export default class PostThumbnail extends PureComponent<ImageProps> {
  constructor(args: ImageProps | Readonly<ImageProps>) {
    super(args);
    this.compressImage = this.compressImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false,
      previewSource: '',
      maxSizeMB: 5,
      maxWidthOrHeight: 1024,
      webWorker: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      },
      mainThread: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      } as any,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  onPopoverClick = () => {
    // @ts-ignore
    this.preventNextClose = true;
  };

  openPopover = () => {
    // @ts-ignore
    if (!this.state.open) {
      // @ts-ignore
      this.preventNextClose = true;
      this.setState({
        open: true,
      });
    }
  };

  cleardata = () => {
    this.props.setPreviewSource(0);
    this.setState({
      webWorker: {
        progress: null,
        inputSize: null,
        outputSize: null,
        inputUrl: null,
        outputUrl: null,
      },
    });
  };

  closePopover = () => {
    // @ts-ignore
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: false,
      });
    }

    // @ts-ignore
    this.preventNextClose = false;
  };

  handleChange(target: any) {
    return (e: { currentTarget: { value: any } }) => {
      this.setState({ [target]: e.currentTarget.value });
    };
  }

  onProgress(p: any, useWebWorker: any) {
    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    this.setState((prevState: any) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        progress: p,
      },
    }));
  }

  async compressImage(event: any, useWebWorker: boolean) {
    const file = event.target.files[0];

    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    this.setState((prevState: any) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      },
    }));

    const options = {
      maxSizeMB: 5,
      maxWidthOrHeight: 1024,
      useWebWorker,
      onProgress: (p: any) => this.onProgress(p, useWebWorker),
    };
    const output = await imageCompression(file, options);

    const reader = new FileReader();

    reader.readAsDataURL(output);
    reader.onloadend = async () => {
      const { addImage, setreadyForFile, readyForFile } = this.props;

      this.props.setPreviewSource(1);
      addImage(reader.result);

      if (typeof reader.result === 'string') {
        setreadyForFile(reader.result);
      }
    };

    this.setState((prevState: any) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
      },
    }));
  }

  render() {
    const { webWorker, mainThread, maxSizeMB, maxWidthOrHeight }: any = this.state;

    return (
      <div className="cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="mb-1 text-[1.3rem] font-semibold text-[#212529] dark:text-darkText">
            썸네일 등록
          </div>
          <div className="flex">
            {this.props.readyForFile && this.props.previewSource == 2 ? (
              <>
                <div
                  onClick={() => this.cleardata()}
                  className="cursor-pointer text-base text-[#212529]">
                  취소
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="relative w-full pt-[55.11%]">
          <div className="absolute left-0 top-0 h-full w-full shadow">
            {this.props.previewSource == 1 ? (
              <div className="flex h-full w-full items-center justify-center">
                {/* <Spinner size={48} /> */}
              </div>
            ) : this.props.readyForFile && this.props.previewSource == 2 ? (
              <img
                src={this.props.readyForFile}
                className="flex h-full w-full flex-col items-center justify-center object-cover"
              />
            ) : (
              <label htmlFor="input-file">
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#E9ECEF] dark:bg-dark-400">
                  <svg width="107" height="85" fill="none" viewBox="0 0 107 85">
                    <path
                      fill="#868E96"
                      d="M105.155 0H1.845A1.844 1.844 0 0 0 0 1.845v81.172c0 1.02.826 1.845 1.845 1.845h103.31A1.844 1.844 0 0 0 107 83.017V1.845C107 .825 106.174 0 105.155 0zm-1.845 81.172H3.69V3.69h99.62v77.482z"></path>
                    <path
                      fill="#868E96"
                      d="M29.517 40.84c5.666 0 10.274-4.608 10.274-10.271 0-5.668-4.608-10.276-10.274-10.276-5.665 0-10.274 4.608-10.274 10.274 0 5.665 4.609 10.274 10.274 10.274zm0-16.857a6.593 6.593 0 0 1 6.584 6.584 6.593 6.593 0 0 1-6.584 6.584 6.591 6.591 0 0 1-6.584-6.582c0-3.629 2.954-6.586 6.584-6.586zM12.914 73.793a1.84 1.84 0 0 0 1.217-.46l30.095-26.495 19.005 19.004a1.843 1.843 0 0 0 2.609 0 1.843 1.843 0 0 0 0-2.609l-8.868-8.868 16.937-18.548 20.775 19.044a1.846 1.846 0 0 0 2.492-2.72L75.038 31.846a1.902 1.902 0 0 0-1.328-.483c-.489.022-.95.238-1.28.6L54.36 51.752l-8.75-8.75a1.847 1.847 0 0 0-2.523-.081l-31.394 27.64a1.845 1.845 0 0 0 1.22 3.231z"></path>
                  </svg>

                  <input
                    id="input-file"
                    type="file"
                    name="file"
                    onChange={e => this.compressImage(e, true)}
                    style={{ display: 'none' }}
                  />
                  <div className="mt-2 cursor-pointer rounded-3xl bg-[#fff] px-[32px] py-[6px] text-sm font-semibold text-[#181A20] hover:text-[#5b646d]">
                    업로드
                  </div>
                </div>
              </label>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const ButtonStyles = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(134, 142, 150);
  cursor: pointer;
`;
