import React from 'react';
import { FlashList, ListRenderItem, FlashListProps } from '@shopify/flash-list';
import { View, Text } from 'react-native';

export interface ListProps<T> extends FlashListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  estimatedItemSize: number;
  ListEmptyComponent?: React.ComponentType | React.ReactElement;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export function List<T>({
  data,
  renderItem,
  estimatedItemSize = 20,
  ListEmptyComponent,
  onRefresh,
  refreshing = false,
  ...rest
}: ListProps<T>) {
  const DefaultEmptyComponent = () => (
    <View>
      <Text>Nenhum item encontrado</Text>
    </View>
  );

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={estimatedItemSize}
      ListEmptyComponent={ListEmptyComponent || DefaultEmptyComponent}
      onRefresh={onRefresh}
      refreshing={refreshing}
      {...rest}
    />
  );
}