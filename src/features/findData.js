import { useSelector } from "react-redux";
import { selectListStyles } from "./styleSlice";
// const lists = useSelector(selectListStyles);

export function getFeaturedEvents() {
  return lists.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return lists;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = lists.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getDataById(lists, id) {
  return lists.find((event) => event.id === id);
}
