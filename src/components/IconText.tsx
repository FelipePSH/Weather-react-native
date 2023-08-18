import React from 'react';
import { HStack, Icon, Text } from 'native-base';
import { MaterialCommunityIcons, AntDesign, Entypo, Feather } from "@expo/vector-icons";

interface IconTextProps {
  iconName: string;
  iconColor?: string;
  text: string;
}

const IconText: React.FC<IconTextProps> = ({
  iconName,
  iconColor = 'coolGray.800',
  text,
}) => {
  return (
    <HStack space={1}>
      <Icon
        as={Feather}
        name={iconName}
        size={5}
        color={iconColor}
        _dark={{
          color: 'warmGray.50',
        }}
      />
      <Text>{text}</Text>
    </HStack>
  );
};

export default IconText;
