'use client';
import { useTheme } from '@/lib/hooks/use-theme';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeButton = ({
  className,
  onClick,
  ...rest
}: Props & MotionProps) => {
  const { isDarkMode, toggle } = useTheme();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    toggle();
  };

  return (
    <motion.button
      className={`rounded-full hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-inherit cursor-pointer w-fit ${className} duration-200`}
      onClick={clickHandler}
      {...rest}
    >
      <Icon
        icon={
          isDarkMode
            ? 'solar:sun-2-bold'
            : 'emojione-monotone:first-quarter-moon'
        }
        width="29"
        height="29"
      />
    </motion.button>
  );
};

export default DarkModeButton;
