import React, { PureComponent } from 'react';
import imageCompression from 'browser-image-compression';
import styled from 'styled-components';

type ImageProps = {
  addImage: (imageData: string | ArrayBuffer | null) => void;
  previewSource: number;
};

type WorkerStatus = {
  progress: number | null;
  inputSize: string | null;
  outputSize: string | null;
  inputUrl: string | null;
  outputUrl: string | null;
};

type ImageState = {
  open: boolean;
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker: boolean;
  webWorker: WorkerStatus;
  mainThread: WorkerStatus;
};

export default class ImageAdd extends PureComponent<ImageProps, ImageState> {
  constructor(args: ImageProps | Readonly<ImageProps>) {
    super(args);
    this.compressImage = this.compressImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false,
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: false,
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
      },
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

  handleChange =
    (target: keyof ImageState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value: string | number =
        target === 'maxSizeMB' || target === 'maxWidthOrHeight'
          ? parseInt(e.currentTarget.value)
          : e.currentTarget.value;
      this.setState({ ...this.state, [target]: value });
    };

  onProgress = (p: number) => {
    const targetName = this.state.useWebWorker ? 'webWorker' : 'mainThread';
    this.setState((prevState: ImageState) => ({
      ...prevState,
      [targetName]: {
        ...prevState[targetName],
        progress: p,
      },
    }));
  };
  async compressImage(
    event: React.ChangeEvent<HTMLInputElement>,
    useWebWorker: boolean,
  ): Promise<void> {
    if (event.target.files && event.target.files.length > 0) {
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
        maxSizeMB: this.state.maxSizeMB,
        maxWidthOrHeight: this.state.maxWidthOrHeight,
        useWebWorker,
        onProgress: this.onProgress,
      };
      const output = await imageCompression(file, options);

      const reader = new FileReader();

      reader.readAsDataURL(output);
      // reader.readAsDataURL(file);
      reader.onloadend = () => {
        const { addImage } = this.props;
        addImage(reader.result);
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
  }

  render() {
    const { webWorker }: any = this.state;

    return (
      <div className="cursor-pointer">
        <ButtonStyles>
          {this.props.previewSource == 1 ? (
            // <Spinner size={18} />
            <div>wait</div>
          ) : (
            <div className="flex cursor-pointer dark:text-[#cfcfcf]">
              <label htmlFor="fileInput">
                <svg
                  className="cursor-pointer"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.5rem"
                  width="1.5rem"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                </svg>
              </label>

              <input
                id="fileInput"
                name="image"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                className="hover:bg-neutral-100 cursor-pointer p-1.5 transition-all"
                onChange={e => this.compressImage(e, true)}
              />
            </div>
          )}
        </ButtonStyles>
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
