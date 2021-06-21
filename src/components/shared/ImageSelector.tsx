import React, { useRef } from 'react'
import * as Styled from './ImagesSelector.styled'
import imagePlaceholder from '../../assets/imagePlaceholder.png'

type PropTypes = {
  handleAddImage: (e: React.FormEvent<HTMLInputElement>, isCoverImage?: boolean) => void
  image: File | null
}

const ImageSelector = ({ handleAddImage, image }: PropTypes) => {
  const inputEl = useRef(null);

  return (
    <Styled.Wrapper>
      <Styled.ImagesContainer>
        {image ? (
          <Styled.Image src={URL.createObjectURL(image)} />
        ) : (
          <Styled.Image width={100} src={imagePlaceholder} />
        )}
      </Styled.ImagesContainer>
      <Styled.AddImageBtn
        onClick={() => {
          // @ts-ignore
          inputEl?.current?.click()
        }}
      >
        <Styled.AddImageBtnText>Add image</Styled.AddImageBtnText>
        <input
          style={{ display: 'none' }}
          type="file"
          name="images"
          accept=".png, .jpg"
          multiple
          onChange={e => handleAddImage(e, true)}
          ref={inputEl}
        />
      </Styled.AddImageBtn>
    </Styled.Wrapper>
  )
}

export default ImageSelector
