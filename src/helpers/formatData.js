import { formatDistanceToNow, format } from 'date-fns';

export const formatData = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const dataFormat = data => {
  return format(new Date(data), 'Pp');
};

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
