class DateFormatter {
  static String format(DateTime date) {
    final difference = DateTime.now().difference(date);
    if (difference.inDays == 0) {
      return 'Today';
    } else if (difference.inDays == 1) {
      return 'Yesterday';
    } else if (difference.inDays < 7) {
      return '${difference.inDays} days ago';
    } else {
      return '${date.day}/${date.month}/${date.year}';
    }
  }

  static String formatWithTime(DateTime date) {
    final difference = DateTime.now().difference(date);
    final time = '${date.hour}:${date.minute.toString().padLeft(2, '0')}';
    if (difference.inDays == 0) {
      return 'Today at $time';
    } else if (difference.inDays == 1) {
      return 'Yesterday at $time';
    } else if (difference.inDays < 7) {
      return '${difference.inDays} days ago';
    } else {
      return '${date.day}/${date.month}/${date.year}';
    }
  }
}
