import { ImageBackgroundProps, ImageSourcePropType } from "react-native";
import { ImageBackground as ImageBackgroundStyled } from "./styled";

type IImageBackground = ImageBackgroundProps & {
  source: ImageSourcePropType;
  children: React.ReactNode;
  alt: string;
};

export const ImageBackground = ({
  source,
  children,
  alt,
  ...imageBackground
}: IImageBackground) => {
  return (
    <ImageBackgroundStyled source={source} {...imageBackground} alt={alt}>
      {children}
    </ImageBackgroundStyled>
  );
};
