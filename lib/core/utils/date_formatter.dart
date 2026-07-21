class DateFormatter {
  static int _calendarDayDifference(DateTime date) {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final day = DateTime(date.year, date.month, date.day);
    return today.difference(day).inDays;
  }

  static String format(DateTime date) {
    final dayDiff = _calendarDayDifference(date);
    if (dayDiff == 0) {
      return 'Today';
    } else if (dayDiff == 1) {
      return 'Yesterday';
    } else if (dayDiff < 7) {
      return '$dayDiff days ago';
    } else {
      return '${date.day}/${date.month}/${date.year}';
    }
  }

  static String formatWithTime(DateTime date) {
    final dayDiff = _calendarDayDifference(date);
    final time = '${date.hour}:${date.minute.toString().padLeft(2, '0')}';
    if (dayDiff == 0) {
      return 'Today at $time';
    } else if (dayDiff == 1) {
      return 'Yesterday at $time';
    } else if (dayDiff < 7) {
      return '$dayDiff days ago';
    } else {
      return '${date.day}/${date.month}/${date.year}';
    }
  }
}
