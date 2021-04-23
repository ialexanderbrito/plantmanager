import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import styles, { Button, ButtonActive, Title, TitleActive } from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <Button style={[active && styles.containerActive]} {...rest}>
      <Title style={[active && styles.titleActive]} {...rest}>
        {title}
      </Title>
    </Button>
  );
}
