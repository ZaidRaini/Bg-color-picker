import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { icon } = props;
    return (
      <div className="relative py-2">
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-[15px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
