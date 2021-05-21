const scrollToAnswer = () => {
  const htmlCollection = document.getElementsByClassName(
    "js-accepted-answer-indicator"
  );

  var n = htmlCollection.length;
  
  for (var i = 0; i < n; i++) {
    if (htmlCollection[i].className.search("d-none") === -1) {
      htmlCollection[i].parentElement.parentElement.scrollIntoView({
        behavior: "smooth",
      });
      break;
    }
  }
};

window.onload = () => scrollToAnswer();
