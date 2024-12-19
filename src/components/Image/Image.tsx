import { ImageProps, ImageSourcePropType } from "react-native";
import { ImageContent, Image as ImageStyled,  } from "./styled";

type IImage = ImageProps & {
    source: ImageSourcePropType;
    alt: string;
}

export const Image = ({ source, alt, ...image }: IImage) => {
    return (
        <ImageContent>
            <ImageStyled source={source} {...image} alt={alt} />
        </ImageContent>
    )
}   