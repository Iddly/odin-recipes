function bookclick2(i) {
    if (document.getElementById(i).style.visibility == 'visible') {
        // Links are visible. Reload page.
        location.reload();
       }
      else {
        // Links are hidden. Turn visible.
        document.getElementById(i).style.visibility = 'visible';
      }
}