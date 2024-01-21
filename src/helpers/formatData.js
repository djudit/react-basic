import { formatDistanceToNow } from 'date-fns';

export const formatData = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
