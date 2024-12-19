import { Controller, UseControllerProps } from 'react-hook-form';
import * as S from './styled';
import { TextInputProps } from 'react-native';
import { FieldValues } from 'react-hook-form';
import { Text } from '@/src/components/Text';
import React from 'react';

export const TextInput = <TypeForm extends FieldValues>({ 
    name, 
    control, 
    rules, 
    ...inputProps 
}: UseControllerProps<TypeForm> & TextInputProps) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                    <S.TextInput 
                        onChangeText={onChange} 
                        value={value} 
                        {...inputProps} 
                    />
                    {error?.message && <Text.Error>{error.message}</Text.Error>}
                </>
            )}
        />
    );
};
