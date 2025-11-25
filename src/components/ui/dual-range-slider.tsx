import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from './utils';

interface DualRangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  className?: string;
  formatLabel?: (value: number) => string;
}

export function DualRangeSlider({
  min,
  max,
  step,
  value,
  onValueChange,
  className,
  formatLabel = (val) => `$${val.toFixed(2)}`,
}: DualRangeSliderProps) {
  return (
    <div className={cn('w-full space-y-3', className)}>
      {/* Value Labels */}
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-foreground">{formatLabel(value[0])}</span>
        <span className="text-muted-foreground">to</span>
        <span className="text-foreground">{formatLabel(value[1])}</span>
      </div>

      {/* Slider */}
      <SliderPrimitive.Root
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          className
        )}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        minStepsBetweenThumbs={1}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary/30">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing" />
      </SliderPrimitive.Root>

      {/* Min/Max Labels */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatLabel(min)}</span>
        <span>{formatLabel(max)}</span>
      </div>
    </div>
  );
}
