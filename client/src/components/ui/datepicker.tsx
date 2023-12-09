import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

import type { Matcher } from 'react-day-picker';

import Button from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/utils';
import { useState } from 'react';
import HeroIcons from '../shared/HeroIcons';

type Props = {
  value?: Date;
  onChange?: (date?: Date) => void;
  disabled?: Matcher | Matcher[];
};
export default function DatePicker({ onChange, value, disabled }: Props) {
  const [date, setDate] = useState<Date | undefined>(value);

  const handleDateChange = (date?: Date) => {
    setDate(date);
    onChange?.(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'flex w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <HeroIcons.CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            dayjs(date).format('MMMM Do, YYYY')
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={disabled}
          mode="single"
          selected={value || date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
