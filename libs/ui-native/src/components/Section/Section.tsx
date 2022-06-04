import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  actionButtonText?: string;
  onButtonActionPressed?: () => void;
}

export const Section: React.FC<SectionProps> = ({ children, title, actionButtonText, onButtonActionPressed }) => {
  const _onButtonActionPressed = () => {
    if (onButtonActionPressed) {
      onButtonActionPressed();
    }
  };

  return (
    <Box>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginY={10}>
        {title && (
          <Text fontSize={18} fontWeight="bold" marginLeft={15}>
            {title}
          </Text>
        )}
        {actionButtonText && (
          <Button onPress={_onButtonActionPressed} type="clear" color="primary" title={actionButtonText} />
        )}
      </Box>
      {children}
    </Box>
  );
};
