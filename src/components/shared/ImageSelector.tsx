import React, { useRef } from 'react'
import * as Styled from './ImagesSelector.styled'
import { Image } from 'react-ionicons'
import theme from '../../theme/theme'
import $t from '../../i18n'

type PropTypes = {
  multiple?: boolean;
  handleAddImage: (e: React.FormEvent<HTMLInputElement>, isCoverImage?: boolean) => void;
  images: (File | null)[];
}

const ImageSelector = ({ handleAddImage, images, multiple = false }: PropTypes) => {
  const inputEl = useRef(null);

  return (
    <Styled.Wrapper multiple={multiple}>
      <Styled.ImagesContainer multiple={multiple} showPlaceholder={images.length === 0}>
        {images.length > 0 ? (
          images.map((image, index) => (
            image && <Styled.Image key={index} src={URL.createObjectURL(image)}/>
          ))
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
        <Styled.AddImageBtnText>{$t(`dashboard.${multiple ? 'addImages' : 'addImage'}`)}</Styled.AddImageBtnText>
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
