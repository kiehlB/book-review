import React, { PureComponent } from 'react';
import imageCompression from 'browser-image-compression';
import styled from 'styled-components';
import { Spinner } from 'evergreen-ui';
import { AiFillEdit } from 'react-icons/ai';

type ImageProps = {
  addImage: (e) => void;
  readyForFile: any;
  uploadThumbnail: any;
  previewSource: any;
  setreadyForFile: any;
  setPreviewSource: any;
  thumbnail: any;
};

export default class ProfileThumbnail extends PureComponent<ImageProps> {
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
    this.props.setreadyForFile(null);
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
        {this.props.readyForFile && this.props.previewSource == 2 ? (
          <>
            <div
              onClick={() => this.cleardata()}
              className="text-base text-[#212529] cursor-pointer">
              이미지 제거
            </div>
          </>
        ) : (
          ''
        )}

        {this.props.previewSource == 1 ? (
          <div className="w-full h-full flex justify-center items-center ">
            <Spinner size={48} />
          </div>
        ) : this.props.readyForFile && this.props.previewSource == 2 ? (
          <>
            <label htmlFor="input-file" className="w-full h-full">
              <div className=" rounded-lg absolute hover:bg-[#00000066] transition-all  z-10 w-[128px] h-[128px] flex justify-center items-center opacity-0 hover:opacity-100">
                <AiFillEdit size={42} color="#ffff" className="" />
              </div>
              <img
                src={this.props.readyForFile}
                className="flex items-center flex-col justify-center object-cover w-[128px] h-[128px]"
              />

              <input
                id="input-file"
                type="file"
                name="file"
                onChange={e => this.compressImage(e, true)}
                style={{ display: 'none' }}
              />
            </label>
          </>
        ) : (
          <>
            <label htmlFor="input-file">
              <div className=" rounded-lg absolute hover:bg-[#00000066] transition-all  z-10 w-[128px] h-[128px] flex justify-center items-center opacity-0 hover:opacity-100">
                <AiFillEdit size={42} color="#ffff" className="" />
              </div>
              <img
                className="rounded-lg transition-all"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII="
              />

              <input
                id="input-file"
                type="file"
                name="file"
                onChange={e => this.compressImage(e, true)}
                style={{ display: 'none' }}
              />
            </label>
          </>
        )}
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
