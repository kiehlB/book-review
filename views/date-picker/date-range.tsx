import React, { useEffect, useState } from 'react';
import DateRangePicker from './day-picker';
import { addDays, endOfDay, format, startOfDay, subDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import useCoreStore from '@/store/core';

const today = new Date();

const ActivityDateRangePicker = () => {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null } | null>(null);
  const [selectedByUser, setSelectedByUser] = useState(false);
  const setTimestamp = useCoreStore(state => state.setTimestamp);
  const router = useRouter();

  const startOfYear = new Date(today.getFullYear(), 0, 1);

  useEffect(() => {
    if (selectedByUser && range?.from && range?.to) {
      router.push('/trending');
      setTimestamp({ from: range.from, to: range.to });
    }
  }, [range, setTimestamp, router, selectedByUser]);

  const ranges = [
    {
      label: '오늘',
      value: { from: startOfDay(today), to: endOfDay(today) },
    },
    {
      label: '이번 주',
      value: { from: subDays(today, 7), to: endOfDay(today) },
    },
    {
      label: '이번 달',
      value: { from: subDays(today, 28), to: endOfDay(today) },
    },
    {
      label: '올해',
      value: { from: startOfYear, to: endOfDay(today) },
    },
  ];

  return (
    <DateRangePicker
      mode="range"
      range={range}
      setRange={setRange}
      ranges={ranges}
      onChange={setRange}
      setSelectedByUser={setSelectedByUser}
    />
  );
};

export default ActivityDateRangePicker;
