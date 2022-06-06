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
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginY={10} paddingX={15}>
        {title && (
          <Text fontSize={18} fontWeight="bold">
            {title}
          </Text>
        )}
        {actionButtonText && (
          <Button onPress={_onButtonActionPressed} size="sm" type="clear" color="primary" title={actionButtonText} />
        )}
      </Box>
      {children}
    </Box>
  );
};
