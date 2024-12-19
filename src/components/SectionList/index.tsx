import React from "react";
import {
  SectionList as RNSectionList,
  SectionListProps,
  Text,
} from "react-native";
import * as S from "./styled";
import { Divider } from "@/src/components/Divider";

export interface ISectionListComponent<T> extends SectionListProps<T> {
  sections: Array<{
    title: string;
    data: T[];
  }>;
  ListEmptyComponent?: React.ComponentType | React.ReactElement | null;
  ListHeaderComponent?: React.ComponentType | React.ReactElement | null;
  ListFooterComponent?: React.ComponentType | React.ReactElement | null;
  keyExtractor?: (item: T, index: number) => string;
}

export const SectionList = <T,>({
  sections,
  ListEmptyComponent = () => <Text>Nenhum item encontrado.</Text>,
  ListHeaderComponent,
  ListFooterComponent,
  keyExtractor = (item, index) => `${index}`,
  ItemSeparatorComponent = Divider,
  ...rest
}: ISectionListComponent<T>) => {
  return (
    <S.SectionList
      sections={sections}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...rest}
    />
  );
};
