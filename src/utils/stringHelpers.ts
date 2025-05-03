import { StringFiedDate } from "src/utils/types";

type TimeUnit = {
    text: string;
    minMinutes: number;
};
  
const TIME_UNITS: TimeUnit[] = [
    { text: 'day', minMinutes: 1440 },
    { text: 'hour', minMinutes: 60 },
    { text: 'minute', minMinutes: 1 }
]

export const getTimeAgoFormated = (createdAt: StringFiedDate): string => {
    const createdDate = new Date(createdAt).getTime();
    const currentDate = Date.now();

    const difference = (currentDate - createdDate) / 60000;
  
    for (const { text, minMinutes } of TIME_UNITS) {
      const quantity = Math.floor(difference / minMinutes);
      if ( quantity < 1) continue

      return `${quantity} ${text}${quantity > 1 ? 's' : ''} ago`;
    }
  
    return 'Just now';
}
