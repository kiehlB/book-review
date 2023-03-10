import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getEndOfDay, getStartOfDay, minusDays } from '../../lib/dateFormat';
import DateRangePicker from './DayPicker';
import { DateRange, DayPicker } from 'react-day-picker';
import { addDays, format, subDays } from 'date-fns';
import { getTimestamp } from '../../store/core';
import { useRouter } from 'next/router';

const today = new Date();

const ActivityDateRangePicker = () => {
  // Computed values

  const defaultSelected: DateRange = {
    from: today,
    to: subDays(today, 0),
  };
  const [range, setRange] = useState<DateRange | undefined>();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (range?.from && range?.to) {
      router.push('/trending');
      dispatch(
        getTimestamp({
          from: range.from,
          to: range.to,
        }),
      );
    }
  }, [range, dispatch]);

  const ranges = [
    {
      label: '오늘',
      value: { from: subDays(today, 0), to: today },
    },
    {
      label: '이번 주',
      value: { from: subDays(today, 7), to: today },
    },
    {
      label: '이번 달',
      value: { from: subDays(today, 28), to: today },
    },
    {
      label: '올해',
      value: { from: subDays(today, 365), to: today },
    },
  ];

  return (
    <DateRangePicker
      mode="range"
      fixedWeeks
      range={range}
      selected={range}
      setRange={setRange}
      onSelect={setRange}
      ranges={ranges}
      onChange={setRange}
    />
  );
};

export default ActivityDateRangePicker;
