const scrollToAnswer = () =>
  document
    .getElementsByClassName("iconCheckmarkLg")[0]
    .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.scrollIntoView(
      { behavior: "smooth" }
    );
window.onload = () => scrollToAnswer();
