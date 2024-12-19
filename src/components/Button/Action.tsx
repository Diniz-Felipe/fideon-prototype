import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import * as S from './styled';

interface ActionProps extends TouchableOpacityProps {
    children: React.ReactNode;
    variant?: 'outline' | 'solid' | 'ghost';
    loading?: boolean;
}

export const Action = ({ 
    children, 
    onPress, 
    variant = 'solid', 
    loading = false,
    disabled,
    ...rest 
}: Partial<ActionProps>) => {
    return (
        <S.ActionContainer 
            onPress={onPress}
            variant={variant}
            disabled={loading || disabled}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'solid' ? '#FFF' : '#000'} />
            ) : (
                children
            )}
        </S.ActionContainer>
    );
};