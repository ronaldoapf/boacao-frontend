import { useCallback, useEffect } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import _cloneDeep from "lodash.clonedeep";

import withField from "../Field/withField";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import { Container, PhotosContainer } from "./style";

const PhotoUploader = ({ maxFiles, name, value, setFieldValue }) => {

  console.log({ name, value })

  const onDrop = useCallback((files) => {
    if (value.length >= maxFiles) return;
    console.log(value, maxFiles)
    const newFiles = [
      ...value,
      ...files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        uuid: uuid(),
      })),
    ];
    setFieldValue(name, newFiles.slice(0, maxFiles));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const deleteFile = (uuid) => {
    const newValue = _cloneDeep(value);
    const fileIndex = newValue.findIndex((file) => file.uuid === uuid);
    if (fileIndex === -1) return;
    newValue.splice(fileIndex, 1);
    setFieldValue(name, newValue);
  };

  return (
    <PhotosContainer>
      {value?.length < maxFiles && (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Container>
            <CameraAltIcon />
          </Container>
        </div>
      )}
      {value.map((file) => {
        console.log(file);
        return (
          <Container key={file.uuid}>
            <button className="close" onClick={() => deleteFile(file.uuid)}>
              <CloseIcon />
              <span>Excluir Imagem</span>
            </button>
            <img src={file.preview} alt="file" />
          </Container>
        ) 
      })}
    </PhotosContainer>
  );
};

PhotoUploader.propTypes = {
  maxFiles: PropTypes.number,
  value: PropTypes.array,
  name: PropTypes.string,
  setFieldValue: PropTypes.func,
};

PhotoUploader.defaultProps = {
  maxFiles: 5,
  value: [],
};

export default withField(PhotoUploader);
