import React, { useRef } from 'react'
import * as Styled from './ImagesSelector.styled'
import { Image, CloseCircle } from 'react-ionicons'
import theme from '../../theme/theme'
import $t from '../../i18n'

type PropTypes = {
  multiple?: boolean;
  handleAddImage: (e: React.FormEvent<HTMLInputElement>, isCoverImage?: boolean) => void;
  images: (File | null)[];
  handleRemoveImage: (index: number) => void
}

const ImageSelector = ({ handleAddImage, images, multiple = false, handleRemoveImage }: PropTypes) => {
  const inputElement = useRef(null);

  return (
    <Styled.Wrapper multiple={multiple}>
      <Styled.ImagesContainer multiple={multiple} showPlaceholder={images.length === 0}>
        {images.length > 0 ? (
          images.map((image, index) => (
            image && (
              <Styled.ImageWrapper key={index} style={{ position: 'relative' }}>
                <Styled.CloseBtn onClick={() => handleRemoveImage(index)}>
                  <CloseCircle height={'35px'} width={'35px'} color={theme.black} />
                </Styled.CloseBtn>
                <Styled.Image src={URL.createObjectURL(image)}/>
              </Styled.ImageWrapper>
            )
          ))
        ) : (
          <Image width={'60px'} height={'60px'} color={theme.gray_400} />
        )}
      </Styled.ImagesContainer>
      <Styled.AddImageBtn
        onClick={() => {
          // @ts-ignore
          inputElement?.current?.click()
        }}
      >
        <Styled.AddImageBtnText>{$t(`dashboard.${multiple ? 'addImages' : 'addImage'}`)}</Styled.AddImageBtnText>
        <input
          style={{ display: 'none' }}
          type="file"
          name="images"
          accept=".png, .jpg"
          multiple
          onChange={e => handleAddImage(e, true)}
          ref={inputElement}
        />
      </Styled.AddImageBtn>
    </Styled.Wrapper>
  )
}

export default ImageSelector
