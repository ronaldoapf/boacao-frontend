import styled from "styled-components";

const Container = styled.div`
  min-width: 128px;
  width: 128px;
  height: 128px;
  border-radius: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  .close {
    opacity: 0;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 1;
    cursor: pointer;
    border: none;
    outline: none;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 10px;
  }
  &:hover .close {
    opacity: 1;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: center;
  & ${Container} {
    margin-right: 16px;
  }
`;

export { Container, PhotosContainer };
