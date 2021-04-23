import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, ButtonActive, Title, TitleActive } from './styles';

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
    <>
      {active === false ? (
        <Button {...rest}>
          <Title>{title}</Title>
        </Button>
      ) : (
        <ButtonActive {...rest}>
          <TitleActive>{title}</TitleActive>
        </ButtonActive>
      )}
    </>
  );
}
