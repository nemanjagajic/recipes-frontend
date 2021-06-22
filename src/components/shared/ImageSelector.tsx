import React, { useRef } from 'react'
import * as Styled from './ImagesSelector.styled'
import { Image } from 'react-ionicons'
import theme from '../../theme/theme'

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
          <Image width={'60px'} height={'60px'} color={theme.gray_400} />
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
