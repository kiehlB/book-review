import React, { PureComponent } from 'react';
import imageCompression from 'browser-image-compression';
import styled from 'styled-components';
import { Spinner } from 'evergreen-ui';

type ImageProps = {
  addImage: (e) => void;
  readyForFile: any;
  uploadThumbnail: any;
  previewSource: any;
  setreadyForFile: any;
  setPreviewSource: any;
  thumbnail: any;
};

export default class PostThumbnail extends PureComponent<ImageProps> {
  constructor(args) {
    super(args);
    this.compressImage = this.compressImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false,
      previewSource: '',
      maxSizeMB: 1,
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

  handleChange(target) {
    return e => {
      this.setState({ [target]: e.currentTarget.value });
    };
  }

  onProgress(p, useWebWorker) {
    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    this.setState(prevState => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        progress: p,
      },
    }));
  }

  async compressImage(event, useWebWorker) {
    const file = event.target.files[0];

    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    this.setState(prevState => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      },
    }));

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker,
      onProgress: p => this.onProgress(p, useWebWorker),
    };
    const output = await imageCompression(file, options);

    const reader = new FileReader();

    reader.readAsDataURL(output);
    reader.onloadend = async () => {
      const { addImage, setreadyForFile, readyForFile } = this.props;
      this.props.setPreviewSource(1);
      addImage(reader.result);

      if (reader.result) {
        setreadyForFile(reader.result);
      }
    };

    this.setState(prevState => ({
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
        <div className="flex justify-between items-center">
          <div className="text-[1.3rem] text-[#212529] font-semibold mb-1">
            썸네일 등록
          </div>
          <div className="flex">
            {this.props.readyForFile && this.props.previewSource == 2 ? (
              <>
                <div
                  onClick={() => this.cleardata()}
                  className="text-base text-[#212529] cursor-pointer">
                  취소
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="w-full pt-[55.11%] relative">
          <div className="w-full h-full absolute left-0 top-0 shadow">
            {this.props.previewSource == 1 ? (
              <div className="w-full h-full flex justify-center items-center">
                <Spinner size={48} />
              </div>
            ) : this.props.readyForFile && this.props.previewSource == 2 ? (
              <img
                src={this.props.readyForFile}
                className="w-full h-full flex items-center flex-col justify-center object-cover"
              />
            ) : (
              <label htmlFor="input-file">
                <div className="w-full h-full flex items-center flex-col bg-[#E9ECEF] justify-center">
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
                  <div className="mt-2 text-sm px-[32px] py-[6px] rounded-3xl bg-[#Fff] text-[#181A20] cursor-pointer hover:text-[#5b646d] font-semibold ">
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
